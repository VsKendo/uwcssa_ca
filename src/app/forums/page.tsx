import {Button, Divider} from 'antd'
import React from 'react'
import MyToolTip from '@/component/MyTooltip'
import BriefInfoThread from '@/app/forums/_component/BriefInfoThread'
import ForumsHeader from '@/app/forums/_component/ForumsHeader'

export default function ForumsIndex() {
    // 从返回的json中得到的data中的数据
    const briefInfoList = [
        {
            'title': '统计一下大家晚上几点睡',
            'author': 'before_sunset',
            'time': '2023-10-31 00:51:04',
            'url': '/1'
        },
        {
            'title': '大家不要抽大麻',
            'author': 'vskendo',
            'time': '2023-10-31 00:51:04',
            'url': '/2'
        }
    ]

    return (
        <div>
            <div style={{
                margin: '10px',
                backgroundColor: 'pink',
                padding: '10px'
            }}>
                <p>
                    <b>欢迎来到温莎论坛“一叶枫声”测试版面</b>
                </p>
                <p>
                    现在本论坛正在测试阶段，效果仅供参考
                </p>
                <br/>
                <p>
                    <b> 如何参与论坛测试？参与测试需要具备什么条件？</b>
                </p>
                <p>
                    参与测试不需要任何技术或金钱，只需要您有一个支持学生会的心。我们期待您的参与，您可以点击下方按钮参加测试报名。在通过审核后，我们会主动与您联系，谢谢！
                </p>
                <MyToolTip title="公共测试暂未开放" style={{marginTop: 30}}>
                    <Button disabled style={{width: '200px'}} type="primary" href="/apply">
                        点击申请测试资格
                    </Button>
                </MyToolTip>
            </div>
            <br/>
            <Divider>置顶咨讯</Divider>
            <ForumsHeader/>
            <br/>
            <Divider>通用板块</Divider>
            <BriefInfoThread infoList={briefInfoList}/>
        </div>
    )
}
