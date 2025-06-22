//src\app\forums\thread\_component\PostDetail.tsx
'use client'

import React from 'react'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {Avatar, Card, Col, Row, Divider, Button,Typography} from 'antd'
import {MessageOutlined, LikeOutlined,} from '@ant-design/icons'
import dynamic from 'next/dynamic'

export default function PostDetail(props: React.PropsWithChildren<Record<string, any>>) {
    const {infoList}: { [p: string]: any; children?: React.ReactNode | undefined } = {...props}
    for (let i = 1; i <= infoList.length; i += 1) {
        infoList[i - 1].key = i
    }
    const pageStyle = {
        backgroundColor: '#f4f4f4', // Replace with your desired background color
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        padding: '20px', // Optional: add some padding around the content
    }
    const ThreadEditor = dynamic(
        () => import('@/app/forums/thread/_component/MyEditor'),
        {ssr: false}
    )
    const CommentDisplayer = dynamic(
        () => import('@/app/forums/thread/_component/CommentDisplayer'),
        {ssr: false}
    )
    return (
        <div style={pageStyle}>
            {infoList.map((item: { key: number, title: string, context: string, time: string, author: string }) => (
                <Card
                    key={item.key}
                    style={{marginBottom: '20px'}}
                    actions={[
                        <Button key="reply" type="text" icon={<MessageOutlined/>}>回复</Button>,
                        <Button key="support" type="text" icon={<LikeOutlined/>}>支持</Button>,
                    ]}
                >
                    <Row>
                        <Col span={4} style={{textAlign: 'center'}}>
                            <Row><b>{item.author}</b> </Row>
                            <Row>
                                <Avatar
                                    shape="square"
                                    size={100}
                                    style={{margin: '5vw 0'}}
                                    src="/favicon.ico"
                                />
                            </Row>
                        </Col>
                        <Col span={20}>
                            {/* 使用Row和Col布局，标题和楼层号分为两列 */}
                            <Row justify="space-between" align="middle">
                                <Col span={18}> {/* 标题占用更大的空间 */}
                                    <Typography.Title level={3} style={{margin: 0}}>{item.title}</Typography.Title>
                                </Col>
                                <Col span={2} style={{textAlign: 'left'}}> {/* 楼层号稍微靠左一点 */}
                                    <Typography.Text >#{item.key} 楼</Typography.Text>
                                </Col>
                            </Row>
                            <Divider style={{margin: '10px'}}/>
                            <CommentDisplayer value={item.context}/>
                            <p>发布于 {item.time}</p>
                        </Col>
                    </Row>
                </Card>

            ))}
            <div>
                <ThreadEditor/>
            </div>

        </div>
    )
}
