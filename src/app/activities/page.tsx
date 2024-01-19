import {Space, Layout, Breadcrumb} from 'antd'
import React from 'react'
import ContentCard from '@/app/activities/_component/ContentCard'

export default function ActivitiesIndex() {
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
                                    {title: '我们的活动',},
                                ]}
                    />
                </div>
            </Layout>
            <Layout>
                <ContentCard title="UWCSSA| 广寒游 中秋活动"
                             content="9月30日下午2点，UWCSSA邀你一同参与现在中秋节活动"
                              imgSrc="2023_mid_autumn.jpg"
                             date="cssa"
                             link="https://mp.weixin.qq.com/s/ed5wf_pJ9lWLeHKB8HeM0Q"
                             bordered={false}/>

                <ContentCard title="UWCSSA| 冬季新生见面会"
                             content="1月20日下午2点，期待与你相遇！"
                             imgSrc="./_component/2024_winter_meeting.jpg"
                             date="cssa"
                             link="https://mp.weixin.qq.com/s/dFSHDNuh6m0CyCnO_BBDEw"
                             bordered={false}/>
            </Layout>
        </Space>
    )
}
