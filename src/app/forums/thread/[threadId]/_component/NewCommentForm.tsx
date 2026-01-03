//src\app\forums\thread\[threadId]\_component\NewCommentForm.tsx
'use client';

import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio, message } from 'antd';
import dynamic from 'next/dynamic';
import { generateClient } from 'aws-amplify/api';
import { myCreateComment } from '@/graphql/my_create_comment';
import { getAccountSafe } from '@/graphql/get_account_safe';
import { getCurrentUser } from '@aws-amplify/auth';


// Dynamically import MyEditor to avoid SSR issuesd
const MyEditor = dynamic(() => import('../../../_component/MyEditor'), {
    ssr: false,
  });


const DEFAULT_ACCOUNT_ID = 'ec26fe80-7c19-4a82-a004-c2efc4d27ca9';
const DEFAULT_GROUP_ID = '82c68ad3-c19b-4e5c-972d-bd1a2debdec5';

interface NewCommentFormProps {
    open: boolean;                 // parent controls modal visibility
    onClose: () => void;           // parent closes modal
    onSuccess: () => void;         // refresh thread after insert
    threadId: string;              // FK → Thread
    parentCommentId?: string;      // FK → Comment (undefined for root)
    accountId: string;             // signed-in user id
  }
  
  interface Values {
    content?: string;
    isAnonymous?: boolean;
}


export default function NewCommentForm({
    open,
    onClose,
    onSuccess,
    threadId,
    parentCommentId,
    accountId,
  }: NewCommentFormProps) {
  const [form] = Form.useForm();

  const ensureAccountExists = async (userId: string) => {
    const client = generateClient();
    const result: any = await client.graphql({
      query: getAccountSafe,
      variables: { id: userId },
      authMode: 'userPool',
    });
    const account = result?.data?.getAccount;
    if (!account) {
      message.error('Account not found. Please complete registration first.');
      return false;
    }
    return true;
  };

  const onCreate = async (values: Values) => {
    try {
      const {userId}=await getCurrentUser();
      const ok = await ensureAccountExists(userId);
      if (!ok) return;
      const client = generateClient();

      const input: any={
            comment_id: userId,                         
            comment_content: values.content,
            accountCommentsId: userId,
            threadThread_commentsId: threadId,
            is_anonymous_comment: !!values.isAnonymous,
      }

      if (parentCommentId) {
        input.commentChild_commentsId = parentCommentId;
      }
      await client.graphql({ query: myCreateComment, variables: input, authMode: 'userPool', });

      message.success('评论成功');
      form.resetFields();
      onClose();  // close modal
      onSuccess(); // refresh parent thread
    } catch (err: any) {
      console.error('评论失败', err);
      message.error(err?.name === 'NotAuthorizedException'
      ? '请先登录再发表评论'
      : '评论失败，请重试');
    }
  };

  return (
    <>
      <Modal
        open={open}
        title="发布评论"
        okText="确认"
        cancelText="取消"
        okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
        
        onCancel={onClose}
        destroyOnClose
        width={1000}
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        
        <Form.Item name="content" label="输入评论" rules={[{ required: true, message: '正文不得为空' }]}>
        <MyEditor onChange={(html) => form.setFieldValue('content', html)} />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">公开评论</Radio>
            <Radio value="private">匿名评论</Radio>
          </Radio.Group>
        </Form.Item>
      </Modal>
    </>
  );
};
