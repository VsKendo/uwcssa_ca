import React from 'react'
import { Avatar, Card, Col, Row, Divider, Button } from 'antd'
import {
  MessageOutlined,
  LikeOutlined,
} from '@ant-design/icons'

import dynamic from 'next/dynamic'

const MyEditor = dynamic(
  () => import('@/app/forums/thread/_component/MyEditor'),
  { ssr: false }
)

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


  return (
    <div style={pageStyle}>
      {infoList.map((item: { key: number, title: string, context:string, time: string, author: string }) => (
        <Card
        key={item.key}
        style={{marginBottom: '20px'}}
        actions={[
          <Button key="reply" type="text" icon={<MessageOutlined />}>回复</Button>,
          <Button key="support" type="text" icon={<LikeOutlined />}>支持</Button>,
        ]}
        >
          <Row>
            <Col span={4} style={{ textAlign: 'center'}}>
                <Row><b>{item.author}</b> </Row>

                <Row>
                    <Avatar
                    shape="square"
                    size={100}
                    style={{ margin: '5vw 0' }}
                    src="/favicon.ico"
                />
                </Row>

            </Col>
            <Col span={20}>
              <h3>{item.title}</h3>
              <p>发布于 {item.time}</p>
              <Divider />
              <p style={{fontSize: '17px'}}>{item.context}</p>
            </Col>
          </Row>
        </Card>

      ))}
      <div>
        <MyEditor />
        <Button type='primary' style={{marginTop: '1rem'}}>提交</Button>
      </div>

    </div>
  )
}
