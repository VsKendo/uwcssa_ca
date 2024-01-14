import React from 'react'
import { Layout, Menu, Avatar, Button } from 'antd'
import {
  UserOutlined,
  EditOutlined,
  StarOutlined,
  MessageOutlined,
  ProfileOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import classes from './biography.css'

const { Header, Content } = Layout;
const items: MenuProps['items'] = [
    {
      label: '通知',
      key: 'mail',
      icon: <MessageOutlined />,
    },
    {
      label: '收藏',
      key: 'favorate',
      icon: <StarOutlined />,
    },
    {
        label: (
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              帖子
            </a>
        ),
      key: 'post',
      icon: <ProfileOutlined />,
      
    },
    {
      label: '成就',
      key: 'trophy',
      icon: <TrophyOutlined />,
    },
  ];



export default function Biography() {
    return (
        <Layout className="forum-profile-layout">
        {/* 头部区域 */}
        <Header className="header">
          {/* 背景图 */}
          <div className="background-image" />
  
          {/* 用户信息 */}
          <div className="user-info">
          <Avatar  icon={<UserOutlined />} />
            <div className="user-details">
              <h2>我是用户名</h2>
              <Button icon={<EditOutlined />} type="primary">
                编辑资料
              </Button>
            </div>
          </div>
        </Header>
  
        {/* 主要内容区域 */}
        <Content className="content">
          {/* 导航栏 */}
          <Menu selectedKeys={['mail']} mode="horizontal" items={items} className="navigation-bar"/>

          {/* ... */}
        </Content>
      </Layout>

    )
}



