'use client'

import { Button, Divider, message } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import { generateClient } from 'aws-amplify/api';
import BriefInfoThread from '@/app/forums/_component/BriefInfoThread'
import ForumsHeader from '@/app/forums/_component/ForumsHeader'
import { BriefInfo } from '@/lib/types'
import '@wangeditor/editor/dist/css/style.css'
import Link from 'next/link'
import { GetThreadGroupMainPage } from "@/graphql/get_mainpage_threads";
import { GetAllThreadGroups } from "@/graphql/get_all_groups";
import { getCurrentUser } from '@aws-amplify/auth';

type LambdaThread = {
  author: string;
  id: string;
  title: string;
  updatedAt: string;
};

type LambdaGroup = {
  id: string;
  group_name: string;
  threads: LambdaThread[];
};

const LAMBDA_FORUMS_MAINPAGE_URL =
  'https://dscusgfqlfpcvofzr3oeyix24e0inzys.lambda-url.us-east-2.on.aws/';

export default function ForumsIndex() {
  const clientRef = useRef<any>();
  const [groups, setGroups] = useState<Array<{ id: string; label: string }>>([]);
  const [groupThreads, setGroupThreads] = useState<Record<string, BriefInfo[]>>({});
  const [signedIn, setSignedIn] = useState<boolean>(false);

  useEffect(() => {
    if (!clientRef.current) clientRef.current = generateClient();

    const isSignedIn = async () => {
      try {
        // If user is not signed in, getCurrentUser throws
        await getCurrentUser();
        return true;
      } catch {
        return false;
      }
    };

    const fetchGroupsGraphql = async () => {
      try {
        const res: any = await clientRef.current!.graphql({
          query: GetAllThreadGroups,
        });
        const items = res?.data?.listThreadGroups?.items ?? [];
        return items.map((item: any) => ({
          id: item.id,
          label: item.group_name || 'Unnamed Group',
        }));
      } catch (e) {
        console.error('Error fetching groups (GraphQL):', e);
        return [];
      }
    };

    const fetchGroupThreadsGraphql = async (groupId: string): Promise<BriefInfo[]> => {
      const res: any = await clientRef.current!.graphql({
        query: GetThreadGroupMainPage,
        variables: {
          groupId,
          limit: 3,
        },
      });

      const items: any[] = res?.data?.threadsByGroup_idAndUpdatedAt?.items ?? [];

      return items.map((t: any, i: number) => ({
        key: t.id ?? i + 1,
        title: t.title,
        author: t.thread_owner?.nickname ?? '匿名',
        time: new Date(t.updatedAt ?? Date.now()).toLocaleString(),
        url: `/forums/thread/${t.id}`,
        userCard: {
          avatar: 'bio_background.jpg',
          username: t.thread_owner?.nickname ?? '匿名',
          role: '认证用户',
          level: 1,
          badges: [16, 1],
        },
      }));
    };

    const fetchFromLambda = async () => {
      const res = await fetch(LAMBDA_FORUMS_MAINPAGE_URL, {
        method: 'GET',
        // keep it explicit; Lambda URL is typically CORS-enabled
        headers: { Accept: 'application/json' },
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error(`Lambda request failed: ${res.status} ${res.statusText}`);
      }

      const data = (await res.json()) as LambdaGroup[];

      const fetchedGroups = data.map((g) => ({
        id: g.id,
        label: g.group_name || 'Unnamed Group',
      }));

      const map: Record<string, BriefInfo[]> = {};
      for (const g of data) {
        map[g.id] = (g.threads ?? []).slice(0, 3).map((t, idx) => ({
          key: idx + 1,
          title: t.title,
          author: t.author ?? '匿名',
          time: new Date(t.updatedAt ?? Date.now()).toLocaleString(),
          url: `/forums/thread/${t.id}`,
          userCard: {
            avatar: 'bio_background.jpg',
            username: t.author ?? '匿名',
            role: '认证用户',
            level: 1,
            badges: [16, 1],
          },
        }));
      }

      setGroups(fetchedGroups);
      setGroupThreads(map);
    };

    (async () => {
      try {
        const s = await isSignedIn();
        setSignedIn(s);

        if (!s) {
          await fetchFromLambda();
          return;
        }

        const fetchedGroups = await fetchGroupsGraphql();
        setGroups(fetchedGroups);

        const results = await Promise.all(
          fetchedGroups.map((g: { id: string; label: string }) => fetchGroupThreadsGraphql(g.id))
        );
        const map: Record<string, BriefInfo[]> = {};
        fetchedGroups.forEach((g: { id: string; label: string }, idx: number) => {
          map[g.id] = results[idx];
        });
        setGroupThreads(map);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const handleGroupClick = (groupId: string) => {
    if (!signedIn) {
      message.error('注册/登录后即可查看板块页面');
      return;
    }
    // navigation handled by Link when signed in
  };

  const handleThreadClick = (threadId: string) => {
    if (!signedIn) {
      message.error('注册/登录后即可查看帖子详情');
      return;
    }
    // navigation handled by Link when signed in
  };

  return (
    <div style={{ backgroundColor: 'rgba(245, 245, 245)' }}>
      <div style={{
        margin: '2.5%', backgroundColor: 'rgba(161, 151, 224, 0.15)', padding: '1.7%'
      }}>
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>欢迎来到🍁"一叶枫声"论坛</p>
        <br />
        <p style={{ fontSize: '1rem' }}>本论坛由温莎大学学联的技术部创建并运营，旨在为温大学生提供一个安全方便的交流平台。<br /> 为了隐私和免受打扰，目前只有使用温莎大学邮箱 @uwindsor.ca 注册的用户可以发贴和查看帖子详情<br />现在论坛正在完善阶段，更多功能敬请期待</p>
        <br />
        {/* <p><b> 如何参与论坛测试？参与测试需要具备什么条件？</b></p>
        <p>
          参与测试不需要任何技术或金钱，只需要您有一个支持学生会的心。
          我们期待您的参与，您可以点击下方按钮参加测试报名。在通过审核后，我们会主动与您联系，谢谢！
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button style={{ width: '200px', marginTop: '1%' }} type="primary" href="/register">
            点击申请测试资格
          </Button>
        </div> */}
      </div>

      <div style={{
        backgroundColor: 'white', width: '90%', marginLeft: 'auto', marginRight: 'auto',
        borderRadius: '15px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <div>
          {/* <Divider>置顶咨讯</Divider>
          <ForumsHeader />
          <br /> */}

          {/* 动态分组区：为每个分组渲染标题 + 列表 */}
          {groups.map((g) => {
            const infoList = (groupThreads[g.id] ?? []).map((item: BriefInfo, idx: number) => {
              const threadId = String(item.url ?? '').split('/').pop() ?? '';
              return {
                ...item,
                key: idx + 1,
                url: signedIn ? item.url : undefined,
                onClick: signedIn
                  ? undefined
                  : () => handleThreadClick(threadId),
              } as any;
            });

            return (
              <div key={g.id}>
                <Divider>
                  {signedIn ? (
                    <Link href={`/forums/groups/${g.id}`}>
                      <Button>点击进入 "{g.label}"</Button>
                    </Link>
                  ) : (
                    <Button onClick={() => handleGroupClick(g.id)}>
                      点击进入 "{g.label}"
                    </Button>
                  )}
                </Divider>

                <BriefInfoThread infoList={infoList} />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
