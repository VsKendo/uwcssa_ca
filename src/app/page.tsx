'use client'

import {
    Button,
    Space,
    Divider,
} from 'antd'
import React from 'react'
import MyToolTip from '@/component/MyTooltip'
import ImagePartial from '@/app/_component/ImagePartial'
import TextOverImage from '@/app/_component/TextOverImage'
import News from './_component/News'

const Home = function Home() {
    return (
        <section style={{
            textAlign: 'center',
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
        }}>
            <Space align="start">
                <TextOverImage/>
                <ImagePartial/>
            </Space>
            <News/>
            <Divider style={{margin: 0}}>UWCSSA官方论坛</Divider>
            <h3>
                Coming Soon... 网站加急开发中！
            </h3>
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
