'use client'

import {
    Button,
    Space,
    Divider,
} from 'antd'
import React from 'react'
import MyToolTip from '@/_component/MyTooltip'
import ImagePartial from '@/_component/ImagePartial'
import TextOverImage from '@/_component/TextOverImage'
import './home.css'

const Home = function Home() {
    return (
        <section style={{
            textAlign: 'center',
            marginTop: 0,
            marginBottom: 0,
            padding: 0
        }}>
            <Space align="start">
                <TextOverImage/>
                {/* <Image
                        preview={false}
                        style={{width: 450, height: 450}}
                        src={'uwcssa_logo.svg'}
                        className="transparent-icon"
                        alt='UWCSSA'
                    /> */}
                <div>
                    <ImagePartial/>
                </div>
                {/*
                    <h2 style={{marginBottom: 0}}>
                        欢迎来到温莎大学中国学生学者联谊会 - UWCSSA官网
                    </h2> */}

            </Space>
            <div/>
            <Divider/>
            <h3>
                Coming Soon... 网站加急开发中！
            </h3>
            {/* <h3> */}
            {/*    温莎大学中国学生学者联谊会是在温莎大学学生会下注册的一个非政治、非赢利的服务性组织。学生会于1985年由当时的一些中国学生、访问学者组建成立，为温莎华人提供服务将近20年。 */}
            {/*    学生会的目标是团结在温莎的中国学生学者；帮助大家适应学校的生活和新的文化环境；提供给大家相互交流的环境和机会；发扬宣传中国的传统文化并加强多文化的交流。 */}
            {/*    我们欢迎所有的温莎大学学生学者加入到学生会中，使学生会更强大，能给大家提供更多的帮助，更好的服务温莎大学的学生以及大温莎地区的华人。 */}
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
