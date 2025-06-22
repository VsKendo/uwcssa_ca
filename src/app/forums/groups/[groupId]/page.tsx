'use client';
import { generateClient } from 'aws-amplify/api';
import { useParams } from 'next/navigation';
import { Popover, Button, Typography, Divider, Breadcrumb, List, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { GetThreadGroupMainPage } from "@/graphql/get_mainpage_threads";
import UserInfoCard from '@/app/forums/_component/UserInfoCard';
import NewThreadForm from './_component/NewThreadForm';

// Group title mapping
const groupTitles: Record<string, string> = {
  '82c68ad3-c19b-4e5c-972d-bd1a2debdec5': '江湖杂谈',
  'group2': 'Group Two Title',
  'group3': 'Group Three Title',
  // ...more groups
};



type ThreadItem = {
  key: string;
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
      setThreads(
        items.map((t: any, idx: number) => ({
          key: t.id ?? idx, // use t.id if available
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
          { title: 'Home' },
          { title: 'Application Center', href: '' },
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
              title={<a href="https://ant.design">{item.title}</a>}
              
            />
            <div style={{ marginRight: '16px' }}>
                <Popover
                  content={
                    <UserInfoCard
                      avatar={'bio_background.jpg'}
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
            <NewThreadForm onRefresh={fetchThreads} />
          </div>
        }
      />
      </div>
    </main>
  );
}
