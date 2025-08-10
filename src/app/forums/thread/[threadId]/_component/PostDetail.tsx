//src\app\forums\thread\[threadId]\_component\PostDetail.tsx
'use client';

import React, { useState } from 'react';
import '@wangeditor/editor/dist/css/style.css';
import { Avatar, Card, Col, Row, Divider, Button, Typography } from 'antd';
import { MessageOutlined, LikeOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';

import NewCommentForm from './NewCommentForm'; // adjust path if needed

/* ---------------------- Props ------------------------------------- */
interface Item {
  key: number;          // floor (0-based)
  id?: string;          // comment id, may be undefined for main thread
  title: string;
  author: string;
  context: string;
  time: string;
}

interface PostDetailProps {
  infoList: Item[];
  threadId: string;
  accountId: string;
  onRefresh: () => void;          // refetch in parent after new comment
}

/* ---------------------- Component --------------------------------- */
export default function PostDetail({
  infoList,
  threadId,
  accountId,
  onRefresh,
}: PostDetailProps) {
  /* modal state */
  const [modalOpen, setModalOpen] = useState(false);
  const [replyToId, setReplyToId]   = useState<string | undefined>(undefined);

  const ThreadEditor      = dynamic(() => import('@/app/forums/thread/[threadId]/_component/MyEditor'),       { ssr: false });
  const CommentDisplayer  = dynamic(() => import('@/app/forums/thread/[threadId]/_component/CommentDisplayer'),{ ssr: false });

  const openReplyModal = (parentId?: string) => {
    setReplyToId(parentId);
    setModalOpen(true);
  };

  const pageStyle = { backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '20px' };

  return (
    <div style={pageStyle}>
      {infoList.map((item) => (
        <Card
          key={item.key}
          style={{ marginBottom: '20px' }}
          actions={[
            <Button
              key="reply"
              type="text"
              icon={<MessageOutlined />}
              onClick={() => openReplyModal(item.id)}  // undefined for main post
            >
              回复
            </Button>,
            <Button key="support" type="text" icon={<LikeOutlined />}>
              支持
            </Button>,
          ]}
        >
          <Row>
            <Col span={4} style={{ textAlign: 'center' }}>
              <Row>
                <b>{item.author}</b>
              </Row>
              <Row>
                <Avatar shape="square" size={100} style={{ margin: '5vw 0' }} src="/favicon.ico" />
              </Row>
            </Col>

            <Col span={20}>
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Typography.Title level={3} style={{ margin: 0 }}>
                    {item.title}
                  </Typography.Title>
                </Col>
                <Col span={2} style={{ textAlign: 'left' }}>
                  <Typography.Text>#{item.key + 1} 楼</Typography.Text>
                </Col>
              </Row>
              <Divider style={{ margin: '10px' }} />
              <CommentDisplayer value={item.context} />
              <p>发布于 {item.time}</p>
            </Col>
          </Row>
        </Card>
      ))}

      <Button type='primary' style={{marginTop: '0.5rem', marginRight: '1rem'}}
                          onClick={() => openReplyModal(undefined)}>回复楼主</Button>

      {/* ---------- New-comment modal ---------- */}
      <NewCommentForm
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={onRefresh}
        threadId={threadId}
        parentCommentId={replyToId}   // undefined = top-level
        accountId={accountId}
      />
    </div>
  );
}
