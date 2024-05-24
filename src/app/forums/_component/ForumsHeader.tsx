import React from 'react'
import {Button, Card, Col, Row} from 'antd'
import ThreadShortLink from '@/app/forums/_component/ThreadShortLink'

export default function ForumsHeader() {
    const cardStyle: React.CSSProperties = {
        // textAlign: 'center',
        backgroundColor: 'rgba(255,204,204,0.3)',
        width: 'auto',
        // height: '25vh'
    }
    const hoverContent13 = {
        'title': '进入“二手物品: 旧物斋坊”指南',
        'block': '版面公告',
        'author': '温莎市井',
        'time': '2023-10-31 00:51:04'
    }
    const hoverContent12 = {
        'title': '进入“租房专区: 借舍赁居”指南',
        'block': '版面公告',
        'author': '温莎市井',
        'time': '2023-10-31 00:51:04'
    }
    const hoverContent11 = {
        'title': '进入“交友专区: 江湖杂谈”指南',
        'block': '版面公告',
        'author': '温莎市井',
        'time': '2023-11-01 00:00:00'
    }
    const hoverContent21 = {
        'title': '统计一下大家晚上几点睡',
        'block': '交友集中',
        'author': 'before_sunset',
        'time': '2023-10-31 00:51:04'
    }
    const hoverContent22 = {
        'title': '大家不要抽大麻',
        'block': '交友集中',
        'author': 'vskendo',
        'time': '2023-10-31 00:51:04'
    }
    const hoverContent31 = {
        'title': '大家赶快注册发帖，这样你的账号就在很前面了，以后很值钱了',
        'block': '交友集中',
        'author': '温莎游子01',
        'time': '2023-10-31 00:51:04'
    }
    return (
        <Row gutter={24} style={{
            marginLeft: '1.7%',
            marginRight: '1.7%',
        }}>
            <Col span={6}>
                <Card size="small" title="必看：版面公告" bordered={false} style={cardStyle}>
                    <ThreadShortLink hoverContent={hoverContent11}
                                     linkUrl="/forums/thread"
                                     linkContent="1.论坛版规（违规者封号）"
                    /><br/>
                    <ThreadShortLink hoverContent={hoverContent11}
                                     linkUrl="/forums/thread"
                                     linkContent="2.“江湖杂谈”板块版规"
                    /><br/>
                    <ThreadShortLink hoverContent={hoverContent11}
                                     linkUrl="/forums/thread"
                                     linkContent="3.“借舍赁居”板块版规"
                    /><br/>
                    <ThreadShortLink hoverContent={hoverContent11}
                                     linkUrl="/forums/thread"
                                     linkContent="4.“旧物斋坊”板块版规"
                    /><br/>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="新鲜出炉" size="small" extra={<Button type="text">More</Button>} bordered={false}
                      style={cardStyle}>
                    <ThreadShortLink hoverContent={hoverContent12}
                                     linkUrl="/forums/thread"
                                     linkContent="租房攻略/避坑集中贴"
                    /> <br/>
                    <ThreadShortLink hoverContent={hoverContent13}
                                     linkUrl="/forums/thread"
                                     linkContent="温莎交友集中贴"
                    /> <br/>
                    <ThreadShortLink hoverContent={hoverContent31}
                                     linkUrl="/forums/thread"
                                     linkContent={hoverContent31.title}
                    /><br/>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="人气热门" size="small" extra={<Button type="text">More</Button>} bordered={false}
                      style={cardStyle}>
                    <ThreadShortLink hoverContent={hoverContent21}
                                     linkUrl="/forums/thread"
                                     linkContent={hoverContent21.title}
                    /><br/>
                    <ThreadShortLink hoverContent={hoverContent22}
                                     linkUrl="/forums/thread"
                                     linkContent={hoverContent22.title}
                    /><br/>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="精华采撷" size="small" extra={<Button type="text">More</Button>} bordered={false}
                      style={cardStyle}>
                    <ThreadShortLink hoverContent={hoverContent11}
                                     linkUrl="/forums/thread"
                                     linkContent={hoverContent11.title}
                    /><br/>
                    <ThreadShortLink hoverContent={hoverContent12}
                                     linkUrl="/forums/thread"
                                     linkContent={hoverContent12.title}
                    /> <br/>
                    <ThreadShortLink hoverContent={hoverContent13}
                                     linkUrl="/forums/thread"
                                     linkContent={hoverContent13.title}
                    /> <br/>
                </Card>
            </Col>
        </Row>
    )
}
