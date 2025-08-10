//src\app\forums\groups\[groupId]\_component\NewThreadForm.tsx
'use client';

import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio, message } from 'antd';
import dynamic from 'next/dynamic';
import { createThread } from '@/graphql/create_thread';
import { generateClient } from 'aws-amplify/api';
import { group } from 'console';

// Dynamically import MyEditor to avoid SSR issuesd
const MyEditor = dynamic(() => import('../../../_component/MyEditor'), {
    ssr: false,
  });

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}

const DEFAULT_ACCOUNT_ID = 'ec26fe80-7c19-4a82-a004-c2efc4d27ca9';
const DEFAULT_GROUP_ID = '82c68ad3-c19b-4e5c-972d-bd1a2debdec5';

interface NewThreadFormProps {
  onRefresh: () => void;
  groupId?: string; //from page
}

const NewThreadForm: React.FC<NewThreadFormProps> = ({ onRefresh, groupId }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<Values>();
  const [open, setOpen] = useState(false);

  const onCreate = async (values: Values) => {
    try {
      const client = generateClient();

      const res = await client.graphql({
        query: createThread,
        variables: {
          thread_id: "1234", // 🔒 fixed ID
          title: values.title,
          content: values.description,
          accountThreadsId: DEFAULT_ACCOUNT_ID,
          threadGroupGroup_threadsId: groupId || DEFAULT_GROUP_ID, // Use passed groupId or default
        },
      });

      message.success('发贴成功');
      setOpen(false);
      form.resetFields();
      onRefresh();
    } catch (err) {
      console.error('发贴失败', err);
      message.error('发贴失败，请重试');
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px' }}>
        <Button type="primary" onClick={() => setOpen(true)}>
            发贴
        </Button>
      </div>

      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <Modal
        open={open}
        title="发布新贴"
        okText="发贴"
        cancelText="取消"
        okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
        
        onCancel={() => setOpen(false)}
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
        <Form.Item
          name="title"
          label="输入帖子标题"
          rules={[{ required: true, message: '标题不得为空' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="输入帖子正文" rules={[{ required: true, message: '正文不得为空' }]}>
        <MyEditor onChange={(html) => form.setFieldValue('description', html)} />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">公开贴</Radio>
            <Radio value="private">匿名贴</Radio>
          </Radio.Group>
        </Form.Item>
      </Modal>
    </>
  );
};

export default NewThreadForm;