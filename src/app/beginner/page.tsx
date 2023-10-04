import {Space, Layout, Breadcrumb, Card,} from 'antd'
import React from 'react'
import ContentCard from '@/app/beginner/_component/ContentCard'


export default function BeginnerIndex() {
    const itemKey = 1
    const items = [
        {
            key: 1,
            label: '行前准备',
        },
        {
            key: 2,
            label: '入境指南',
        },
    ]

    return (
        <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
            <Layout>
                <div style={{padding: '0 50px'}}>
                    <Breadcrumb style={{
                        fontSize: '14px',
                        margin: '16px 0'
                    }}
                    items={[
                        {title: '首页',},
                        {title: '新生手册',},
                        {
                            title: <a rel="noopener noreferrer" href="/">
                                {items.map(item => {
                                    if (item.key === itemKey) {
                                        return item.label
                                    }
                                    return null
                                })}</a>,
                            menu: {items},
                        },
                    ]}
                    />
                </div>
            </Layout>
            <Layout>
                <ContentCard title="Card title1" content='conton1' imgsrc='./skee.jpg' date='shushen2013 -10 months ago' link='https://deprecated.uwcssa.ca/article/7bd1212e-4f18-469e-a012-32a59666b9e5' bordered={false} />
                <ContentCard title="Card title2" content='conton2' imgsrc='./food.jpg' date='Jiayi Li -10 months ago' link='https://deprecated.uwcssa.ca/article/26bec7df-e03c-4218-bb68-c662f59d804a' bordered={false}/>
            </Layout>
        </Space>
    )
}
