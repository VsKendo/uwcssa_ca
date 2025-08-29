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

// Group title mapping
const groupTitles: Record<string, string> = {
  '08051c13-119c-41e0-a318-92482cf77a5b': '江湖杂谈',
  '620dac9a-d7f7-4041-be08-2cefa3440d32': '通用板块',
  '4d82a68f-e950-4ec9-87b9-d40940ccecc6': '旧物斋坊',
  '2d021a10-20c1-436d-901a-d1451c2db585': '借舍赁居',
  'ef0dc109-7025-4383-bdcf-e72d27883593': '学术交流',
  // ...more groups
};



type ThreadItem = {
  key: string;
  id: string; 
  title: string;
  nickname: string;
  updatedAt: string;
};

export default function GroupDetailPage() {
  const { groupId } = useParams() as { groupId: string };
  const groupTitle = groupTitles[groupId] || 'Default Group Title';
  const [threads, setThreads] = useState<ThreadItem[]>([]);

  const fetchThreads = async () => {
    try {
      const client = generateClient()
      const res: any = await client.graphql({
        query: GetThreadGroupMainPage,
        variables: { id: groupId },
      });
      const items = res.data.getThreadGroup?.group_threads?.items ?? [];

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
                      role={'CSSA成员'}
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
