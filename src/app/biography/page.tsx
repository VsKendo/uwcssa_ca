import React from 'react'
import { Menu, Avatar, Button } from 'antd'
import {
  UserOutlined,
  EditOutlined,
  StarOutlined,
  MessageOutlined,
  ProfileOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import styles from './biography.module.css'

// const { Content } = Layout
const items: MenuProps['items'] = [
    {
      label: '通知',
      key: 'mail',
      icon: <MessageOutlined />,
    },
    {
      label: '收藏',
      key: 'favorite',
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
  ]


export default function Biography() {
    return (
     <div className={styles.Background}>
     
        <div className={styles['background-image']} >
        <div className="user-info">
          <Avatar icon={<UserOutlined />} size="large"/>
          <p className={styles.username}>我是用户名</p>
          <Button icon={<EditOutlined />} type="primary">
          编辑资料
          </Button>
        </div>
        </div>
        <div className={styles.menu}>
          {/* 导航栏 */}
          <Menu selectedKeys={['mail']} mode="horizontal" items={items} className={styles['navigation-bar']}/>
        </div>
     </div>


    
    )
}
