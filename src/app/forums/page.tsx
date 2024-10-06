import {Button, Divider} from 'antd'
import React from 'react'
import BriefInfoThread from '@/app/forums/_component/BriefInfoThread'
import ForumsHeader from '@/app/forums/_component/ForumsHeader'
import {BriefInfo} from '@/lib/types'
import '@wangeditor/editor/dist/css/style.css' // 引入 css

export default function ForumsIndex() {
    const briefInfoList: BriefInfo[] = [
        {
            'key': 1,
            'title': '统计一下大家晚上几点睡',
            'author': 'before_sunset',
            'time': '2023-10-31 00:51:04',
            'url': '/forums/thread/',
            'userCard': {
                'avatar': '2023_mid_autumn.jpg',
                'username': 'before_sunset',
                'role': '校友',
                'level': 3,
                'badges': [16, 1]
            },
        },
        {
            'key': 2,
            'title': '大家不要抽大麻',
            'author': 'vskendo',
            'time': '2023-10-31 00:51:04',
            'url': '/2',
            'userCard': {
                'avatar': 'blackShadowWithBridge.jpg',
                'username': 'vskendo',
                'role': '管理员',
                'level': 5,
                'badges': [18, 1]
            },
        },
        {
            'key': 3,
            'title': '大家赶快注册发帖，这样你的账号就在很前面了，以后很值钱了',
            'author': '造谣者01',
            'time': '2023-11-01 01:24:14',
            'url': '/3',
            'userCard': {
                'avatar': 'bio_background.jpg',
                'username': '造谣者01',
                'role': 'CSSA成员',
                'level': 2,
                'badges': [15, 1]
            },
        }
    ]

    // 为每个 item 动态生成 key
    const briefInfoListWithKeys = briefInfoList.map((item, index) => ({
        ...item,
        key: index + 1, // 使用索引生成 key，确保 key 是唯一的
    }))

    return (
        <div style={{backgroundColor: 'rgba(245, 245, 245)'}}>
            <div style={{
                margin: '2.5%',
                backgroundColor: 'rgba(255,0,51,0.15)',
                padding: '1.7%'
            }}>
                <p>
                    <b>欢迎来到温莎论坛“一叶枫声”测试版面</b>
                </p>
                <p>现在本论坛正在测试阶段，效果仅供参考</p>
                <br/>
                <p><b> 如何参与论坛测试？参与测试需要具备什么条件？</b></p>
                <p>
                    参与测试不需要任何技术或金钱，只需要您有一个支持学生会的心。
                    我们期待您的参与，您可以点击下方按钮参加测试报名。在通过审核后，我们会主动与您联系，谢谢！
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Button style={{
                        width: '200px',
                        marginTop: '1%'
                    }} type="primary" href="/register">
                        点击申请测试资格
                    </Button>
                </div>
            </div>

            <div style={{
                backgroundColor: 'white',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{height: '65vh'}}>
                    <Divider>置顶咨讯</Divider>
                    <ForumsHeader/>
                    <br/>
                    <Divider>通用板块</Divider>
                    <BriefInfoThread infoList={briefInfoListWithKeys}/>
                </div>
            </div>
        </div>
    )
}
