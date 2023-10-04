'use client'

import {
    Button,
    Space,
    Divider, Typography, Col, Row,
} from 'antd'
import React from 'react'
import MyToolTip from '@/component/MyTooltip'
import ImagePartial from '@/app/_component/ImagePartial'
import TextOverImage from '@/app/_component/TextOverImage'
import NewsButton from '@/app/_component/NewsButton'
import {CarTwoTone, FileTextTwoTone, ShoppingTwoTone, StarTwoTone} from '@ant-design/icons'

const {Title} = Typography

const Home = function Home() {
    return (
        <section style={{
            textAlign: 'center',
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
            backgroundColor: 'white'
        }}>
            <Row style={{
                backgroundColor: 'rgb(245, 245, 245)'
            }}>
                <Col span={10}><TextOverImage/></Col>
                <Col span={14}><ImagePartial/></Col>
            </Row>
            <div style={{backgroundColor: 'white'}}>
                <Title level={2} style={{marginTop: '10px'}}>了解最新动态？</Title>
                <br/>
                {/* <Button type="primary" size="large" icon={<SearchOutlined/>}> */}
                {/*     Start searching */}
                {/* </Button> */}
                <br/>
                <Space size={[20, 20]} wrap>
                    <NewsButton icon={<FileTextTwoTone/>} title="新闻"
                                content="最即时的新闻，让你信息永不短线"/>
                    <NewsButton icon={<CarTwoTone/>} title="活动"
                                content="和朋友一起互动，不错过最新、最热门的活动"/>
                    <NewsButton icon={<StarTwoTone/>} title="新生必读"
                                content="了解校园生活大小事，新生指南不容错过"/>
                    <NewsButton icon={<ShoppingTwoTone/>} title="加入我们"
                                content="海量的工作机会，随时随地找工作"/>
                </Space>
            </div>
            {/* <Divider style={{margin: 0}}>UWCSSA官方论坛</Divider> */}
            {/* <h3> */}
            {/*     Coming Soon... 网站加急开发中！ */}
            {/* </h3> */}
            <Divider style={{marginTop: 60}}>申请UWCSSA官方论坛测试资格</Divider>
            <p><b>什么是官网测试？测试什么？</b></p>
            <p> 我们打算开发二手买卖交易平台、温莎在线论坛，具体上线时间取决于我们的开发进度。如果您能参与进我们的测试，注册账号并发布帖子，我们将不胜感激——这是对我们最大的支持！</p>
            <br/>
            <p><b> 如何参与测试？参与测试需要具备什么条件？</b></p>
            <p> 参与测试不需要任何技术或金钱，只需要您有一个支持学生会的心。我们期待您的参与，您可以点击下方按钮参加测试报名。在通过审核后，我们会主动与您联系，谢谢！</p>
            <MyToolTip title="公共测试暂未开放" style={{marginTop: 30}}>
                <Button style={{width: '200px'}} type="primary" href="/apply">
                    点击加入测试
                </Button>
            </MyToolTip>
        </section>

    )
}

export default Home
