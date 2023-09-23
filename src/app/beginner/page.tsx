import {Space, Layout, Breadcrumb} from 'antd'
import React from 'react'

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
                    <Breadcrumb style={{fontSize: '14px', margin: '16px 0'}}
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
                <div style={{padding: '0 50px', backgroundColor: 'white'}}>content</div>
            </Layout>
        </Space>
    )
}
