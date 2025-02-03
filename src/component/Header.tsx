'use client'

import Icon, {GithubOutlined, HomeOutlined, SmileOutlined} from '@ant-design/icons'
import {Button, MenuProps, notification, Col, Layout, Menu, Row} from 'antd'
import Link from 'next/link'
import React from 'react'
import FallbackImage from '@/component/FallbackImage'
import {Authenticator} from '@aws-amplify/ui-react'
import {Amplify} from 'aws-amplify'
import LoginPage from '@/component/LoginPage'
import {NOTIFICATION_TYPES} from '@/lib/types'
import awsconfig from '../aws-exports'

Amplify.configure(awsconfig)
const {Header} = Layout

function HeartSvg() {
    return (<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path
            d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"/>
    </svg>)
}

function ForumsSvg() {
    return (
        <svg height="1.2em" viewBox="0 0 128 128" width="1.2em" fill="currentColor">
            <path
                d="m111.257 65.762 10.437-18.462-20.843 3.91-5.494-12.394-21.836 27.711 12.7-43.734-13.278 2.74-8.943-19.227-8.945 19.227-13.278-2.74 12.7 43.734-21.834-27.711-5.494 12.394-20.843-3.91 10.437 18.462-9.952 9.207 33.061 11.625-7.74 15.856 31.888-6.928 31.888 6.928-7.74-15.856 33.061-11.625z"
                fill="#f7502f"/>
            <path
                d="m121.69 47.3-2.05 3.62-53.89 38.54v32.23a1.75 1.75 0 0 1 -3.5 0v-32.23l-53.89-38.54-2.05-3.62 4.06.76 51.88 37.1v-75.09l1.75-3.76 1.75 3.76v75.09l51.88-37.1z"
                fill="#d8351e"/>
        </svg>
    )
}

function PandaSvg() {
    return <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
        <path
            d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
            fill="#6B676E"
        />
        <path
            d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
            fill="#FFEBD2"
        />
        <path
            d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
            fill="#E9D7C3"
        />
        <path
            d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
            fill="#FFFFFF"
        />
        <path
            d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
            fill="#6B676E"
        />
        <path
            d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
            fill="#464655"
        />
        <path
            d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
            fill="#464655"
        />
        <path
            d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
            fill="#464655"
        />
    </svg>
}

const itemStyle = {
    margin: 0,
    paddingRight: 5
}
const items: MenuProps['items'] = [
    {
        label: (<Link href="/">首页</Link>),
        key: 'index',
        icon: <HomeOutlined style={{fontSize: '1.05rem'}}/>,
        style: itemStyle
    },
    {
        label: (<Link href="/activities">活动</Link>),
        key: 'activity',
        icon: (<Icon component={PandaSvg} style={{fontSize: '1.1rem'}}/>),
        style: itemStyle
    },
    {
        label: (<Link href="/forums">“一声枫叶”论坛</Link>),
        key: 'forums',
        icon: (<Icon component={ForumsSvg} style={{fontSize: '1.1rem'}}/>),
        style: itemStyle
    },
    // {
    //     label: '攻略',
    //     key: 'guide',
    //     disabled: true,
    //     icon: <AppstoreOutlined style={{fontSize: '1.05rem'}}/>,
    //     style: itemStyle,
    //     children: [
    //         {
    //             type: 'group',
    //             label: '城市游玩',
    //             children: [
    //                 {
    //                     label: 'Windsor',
    //                     key: 'city:windsor',
    //                 },
    //                 {
    //                     label: 'Toronto',
    //                     key: 'city:toronto',
    //                 },
    //             ],
    //         },
    //         {
    //             type: 'group',
    //             label: '指引攻略',
    //             children: [
    //                 {
    //                     label: '生活指引',
    //                     key: 'category:life',
    //                 },
    //                 {
    //                     label: '专业解析',
    //                     key: 'category:major',
    //                 },
    //                 {
    //                     label: '入学指引',
    //                     key: 'category:admission',
    //                 },
    //                 {
    //                     label: '毕业指引',
    //                     key: 'category:graduation',
    //                 },
    //             ],
    //         },
    //     ],
    // },
    {
        label: (<Link href="/beginner" style={{padding: 0,marginLeft: '-2px'}}>新生手册</Link>),
        key: 'beginnerMenu',
        icon: <SmileOutlined style={{fontSize: '1.05rem'}} href="./beginner"/>,
        style: itemStyle,
    },
    {
        label: (
            <Button type="text"
                    onClick={() => {
                        notification[NOTIFICATION_TYPES.SUCCESS]({
                            message: '感谢您的支持',
                            description:
                                '您可以在转账备注中写上姓名，我们会将它放入感谢列表.',
                        })
                    }}
                    style={{cursor: 'pointer',padding: 0,marginLeft: '-5px'}}
            >
                支持我们
            </Button>
        ),
        key: 'support',
        style: itemStyle,
        icon: (<Icon component={HeartSvg} style={{
            color: 'hotpink',
            fontSize: '1.05rem'
        }}/>),
        children: [
            {
                label: '加拿大境内转账：使用emt转账给cssa@uwindsor.ca',
                key: 'support:canada',
            },
            {
                label: '其他支持方式：微信添加 uwcssapr 以了解详情',
                key: 'support:china',
            },
        ],
    },
    {
        label: (
            <a href="https://github.com/VsKendo/uwcssa_ca" target="_blank" rel="noopener noreferrer">
                开源项目
            </a>
        ),
        icon: <GithubOutlined/>,
        key: 'github',
    },
]

const MenuUnderLine = {
    background: 'white',
    borderBottom: '1px solid rgba(5, 5, 5, 0.06)'
}

export default function HeaderElement() {
    return (
        <Header style={{
            padding: 0,
            lineHeight: '55px',
            height: '55px'
        }}>
            <Row>
                <Col span={1} style={MenuUnderLine}/>
                <Col span={11} style={MenuUnderLine}>
                    <Link href="/">
                        <FallbackImage
                            preview={false}
                            style={{
                                width: 35,
                                height: 35
                            }}
                            src="/uwcssa_logo.svg"
                            alt="UWCSSA"
                        />
                        &nbsp;&nbsp;&nbsp;<strong style={{fontSize: 18}}>UWCSSA</strong>
                    </Link>
                    &nbsp;&nbsp;
                    <Authenticator.Provider>
                        <LoginPage/>
                    </Authenticator.Provider>
                </Col>
                <Col span={12}>
                    <Menu mode="horizontal" items={items} style={{height: '100%'}}/>
                </Col>
            </Row>
        </Header>
    )
}
