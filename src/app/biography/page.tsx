'use client'

import React, {useEffect, useState} from 'react'
import {Menu, Button, Image, Card} from 'antd'
import {
    EditOutlined,
    StarOutlined,
    MessageOutlined,
    ProfileOutlined,
    TrophyOutlined,
} from '@ant-design/icons'
// import {createTodo, updateTodo, deleteTodo} from '@/graphql/mutations'
// import {listTodos} from '@/graphql/queries'
import type {MenuProps} from 'antd'
import BioContent from '@/app/biography/_component/BioContent'
import {USERNAME} from '@/lib/storeConstant'
import {getOrDefault} from '@/lib/stringUtils'
import styles from './biography.module.css'

const items: MenuProps['items'] = [
    {
        label: '通知',
        key: 'mail',
        icon: <MessageOutlined/>,
    },
    {
        label: '收藏',
        key: 'favorite',
        icon: <StarOutlined/>,
    },
    {
        label: (
            <a>
                帖子
            </a>
        ),
        key: 'post',
        icon: <ProfileOutlined/>,
    },
    {
        label: '成就',
        key: 'trophy',
        icon: <TrophyOutlined/>,
    },
]

export default function Biography() {
    const [nickname, setNickname] = useState('')
    useEffect(() => {
        const storedData = getOrDefault(localStorage.getItem(USERNAME))
        setNickname(storedData)
    }, [])
    return (
        <div className={styles.Background}>
            <div className={styles['background-image']}>
                <div className={styles['user-info']}>
                    <Image className={styles['user-image']}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        preview={false}
                        alt="User Avatar" />
                    <p className={styles.username}>{nickname}</p>
                </div>

                <div className={styles.edit_button}>
                    <Button icon={<EditOutlined/>} type="dashed" size="small">
                        编辑资料
                    </Button>
                </div>
            </div>

            <div className={styles.menu}>
                {/* 导航栏 */}
                <Menu selectedKeys={['mail']} mode="horizontal" items={items}/>
            </div>
            <Card title="消息列表"
                  style={{
                      marginTop: '0.35%',
                      marginLeft: '7.71%',
                      marginRight: '7.71%',
                      marginBottom: '1.2%'
                  }}>
                <BioContent title="测试数据1-帖子标题: 欢迎您登录"
                            date="这是测试数据，如果你看到这里，说明您成功登录了 uwcssa 网站。个人主页还在开发中。"
                            link="https://google.com"
                />
            </Card>
        </div>

    )
}
