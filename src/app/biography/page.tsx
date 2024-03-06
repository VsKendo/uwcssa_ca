import React from 'react'
import { Menu, Button, Image, Card} from 'antd'
import {
  EditOutlined,
  StarOutlined,
  MessageOutlined,
  ProfileOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import styles from './biography.module.css'
import Bio_content from '@/app/biography/_component/Bio_content'


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
            <div className={styles['user-info']}>
              {/* <Avatar icon={<Us""erOutlined />} size="large"/> */}
              <Image width="10%" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              <p className={styles.username}>我是用户名</p>
            </div>
            <div className={styles.edit_button}>
                <Button icon={<EditOutlined />} type="dashed" size="small">
                编辑资料
                </Button>
            </div>
        </div>
        
        <div className={styles.menu}>
            {/* 导航栏 */}
            <Menu selectedKeys={['mail']} mode="horizontal" items={items} />
        </div>
        <Card title="消息列表" style={{ marginTop: "0.35%", marginLeft: "7.71%", marginRight:"7.71%", marginBottom:"1.2%"}}>
            <Bio_content title="你在帖子 游戏bug卡牌飞起来了前后... 的评论有了4次赞"
                        date="2024-1-22"
                        link="https://google.com"
            /> 
            <Bio_content title="你在帖子 只看过剧，假设你是审判日号... 的评论有了15次赞"
                        date="2023-12-28"
                        link="https://google.com"
            /> 
        </Card>
     </div>
    
    )
}
