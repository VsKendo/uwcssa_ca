'use client'

import { Button, Divider } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import { generateClient } from 'aws-amplify/api';
import BriefInfoThread from '@/app/forums/_component/BriefInfoThread'
import ForumsHeader from '@/app/forums/_component/ForumsHeader'
import { BriefInfo } from '@/lib/types'
import '@wangeditor/editor/dist/css/style.css'
import Link from 'next/link'
import { GetThreadGroupMainPage } from "@/graphql/get_mainpage_threads";

// group ids
const GENERAL_GROUP_ID = "620dac9a-d7f7-4041-be08-2cefa3440d32";
const MAIN_SOCIAL_GROUP_ID = "08051c13-119c-41e0-a318-92482cf77a5b";
const RENTAL_GROUP_ID = "2d021a10-20c1-436d-901a-d1451c2db585";
const SECOND_HAND_GROUP_ID = "4d82a68f-e950-4ec9-87b9-d40940ccecc6";
const ACADEMIC_GROUP_ID = "ef0dc109-7025-4383-bdcf-e72d27883593";

// 👇 add/modify groups here
const GROUPS = [
  { id: GENERAL_GROUP_ID, label: '通用板块' },
  { id: MAIN_SOCIAL_GROUP_ID, label: '江湖杂谈' },
    { id: RENTAL_GROUP_ID, label: '借舍赁居' },
    { id: SECOND_HAND_GROUP_ID, label: '旧物斋坊' },
    { id: ACADEMIC_GROUP_ID, label: '学术交流' },
];

export default function ForumsIndex() {
  const clientRef = useRef<any>();
  const [groupThreads, setGroupThreads] = useState<Record<string, BriefInfo[]>>({});

  useEffect(() => {
    if (!clientRef.current) clientRef.current = generateClient();

    const fetchGroupThreads = async (groupId: string): Promise<BriefInfo[]> => {
      const res: any = await clientRef.current!.graphql({
        query: GetThreadGroupMainPage,
        variables: { id: groupId },
      });

      const items: any[] = res?.data?.getThreadGroup?.group_threads?.items ?? [];

      // sort DESC by updatedAt (fallback createdAt), then take top 3
      const latestThree = items
        .slice()
        .sort((a, b) => {
          const time = (x: any) =>
            x?.updatedAt ? Date.parse(x.updatedAt)
              : x?.createdAt ? Date.parse(x.createdAt)
              : -Infinity;
          return time(b) - time(a);
        })
        .slice(0, 3);

      return latestThree.map((t: any, i: number) => ({
        key: t.id ?? i + 1,
        title: t.title,
        author: t.thread_owner?.nickname ?? "匿名",
        time: new Date(t.updatedAt ?? t.createdAt ?? Date.now()).toLocaleString(),
        url: `/forums/thread/${t.id}`,
        userCard: {
          avatar: "bio_background.jpg",
          username: t.thread_owner?.nickname ?? "匿名",
          role: "CSSA成员",
          level: 1,
          badges: [16, 1],
        },
      }));
    };

    (async () => {
      try {
        const results = await Promise.all(
          GROUPS.map(g => fetchGroupThreads(g.id))
        );
        const map: Record<string, BriefInfo[]> = {};
        GROUPS.forEach((g, idx) => { map[g.id] = results[idx]; });
        setGroupThreads(map);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  

  return (
    <div style={{ backgroundColor: 'rgba(245, 245, 245)' }}>
      <div style={{
        margin: '2.5%', backgroundColor: 'rgba(161, 151, 224, 0.15)', padding: '1.7%'
      }}>
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>欢迎来到🍁“一叶枫声”论坛</p>
        <br />
        <p style={{ fontSize: '1rem' }}>本论坛由温莎大学学联的技术部创建并运营，旨在为温大学生提供一个安全方便的交流平台。<br/> 为了隐私和免受打扰，目前只有使用温莎大学邮箱 @uwindsor.ca 注册的用户可以发送和查看帖子<br/>现在论坛正在完善阶段，更多功能敬请期待</p>
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
          {GROUPS.map((g) => (
            <div key={g.id}>
              <Divider>
                <Link href={`/forums/groups/${g.id}`}>
                  <Button>点击进入 “{g.label}”</Button>
                </Link>
              </Divider>
              <BriefInfoThread infoList={(groupThreads[g.id] ?? []).map((item, idx) => ({ ...item, key: idx + 1 }))} />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
