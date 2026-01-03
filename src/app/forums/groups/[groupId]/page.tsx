//src\app\forums\groups\[groupId]\page.tsx
'use client';
import { generateClient } from 'aws-amplify/api';
import { useParams } from 'next/navigation';
import { Popover, Button, Typography, Divider, Breadcrumb, List, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { GetThreadGroupMainPage } from "@/graphql/get_mainpage_threads";
import UserInfoCard from '@/app/forums/_component/UserInfoCard';
import NewThreadForm from './_component/NewThreadForm';
import Link from 'next/link';


type ThreadItem = {
  key: string;
  id: string; 
  title: string;
  nickname: string;
  updatedAt: string;
};

export default function GroupDetailPage() {
  const { groupId } = useParams() as { groupId: string };
  const [groupTitle, setGroupTitle] = useState<string>('加载中...');
  const [threads, setThreads] = useState<ThreadItem[]>([]);

  const fetchThreads = async () => {
    try {
      const client = generateClient()
      const res: any = await client.graphql({
        query: GetThreadGroupMainPage,
        variables: { groupId, limit: 50 },
      });
      const group = res?.data?.getThreadGroup;
      
      // Set the group title from the fetched data
      if (group?.group_name) {
        setGroupTitle(group.group_name);
      }
      
      const items = res?.data?.threadsByGroup_idAndUpdatedAt?.items ?? [];

      const sorted = items.slice().sort((a: any, b: any) => {
        const time = (x: any) =>
          x?.updatedAt ? Date.parse(x.updatedAt)
            : x?.createdAt ? Date.parse(x.createdAt)
            : -Infinity;
        return time(b) - time(a);
      });
      setThreads(
        sorted.map((t: any, idx: number) => ({
          key: t.id ?? idx, // use t.id if available
          id: t.id,
          title: t.title,
          nickname: t.thread_owner?.nickname ?? "匿名",
          updatedAt: t.updatedAt
            ? new Date(t.updatedAt).toLocaleString()
            : "",
        }))
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, [groupId]);

  return (
    <main className="p-6">
    <div
            style={{
              background: 'white',
              padding: '20px',
            }}
          >
      <Breadcrumb
        separator=">"
        items={[
          { title: 'Home', href: '/' },
          { title: '论坛主页', href: '/forums' },
          { title: groupTitle },
        ]}
      />
      <Divider />
      <Typography.Title level={2}>{groupTitle}</Typography.Title>
      <Divider />

      
      <List
        pagination={{
          position: 'bottom', // Only bottom
          align: 'center',
          pageSize: 10,          // Change as needed
        }}
        dataSource={threads}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${item.key}`} />
              }
              title={<Link href={`/forums/thread/${item.id}`}>{item.title}</Link>}
              
            />
            <div style={{ marginRight: '16px' }}>
                <Popover
                  content={
                    <UserInfoCard
                      avatar="/bio_background.jpg"
                      username={item.nickname}
                      role={'认证用户'}
                      level={2}
                      badges={[15, 1]}
                    />
                  }
                  title="用户信息"
                  trigger="hover"
                  placement="leftBottom"
                >
                  <Button type="text">{item.nickname}</Button>
                </Popover>
              </div>
            <div>{item.updatedAt}</div>
          </List.Item>
        )}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: '1rem' }}>
            <NewThreadForm onRefresh={fetchThreads} groupId={groupId}/>
          </div>
        }
      />
      </div>
    </main>
  );
}
