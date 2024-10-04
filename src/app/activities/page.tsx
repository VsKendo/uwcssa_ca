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
                <ContentCard title="UWCSSA| 冬季新生见面会"
                             content="24年1月20日下午2点，UWCSSA约你在 Room 112, Odette building 见面"
                             imgSrc="2024_winter_meeting.jpg"
                             date="2024.01.14"
                             tags={['新生见面会', '线下活动']}
                             link="https://mp.weixin.qq.com/s/dFSHDNuh6m0CyCnO_BBDEw"
                             bordered={false}/>




                <ContentCard title="UWCSSA| 广寒游 中秋活动"
                             content="9月30日下午2点，UWCSSA邀你一同参与中秋节活动"
                             imgSrc="2023_mid_autumn.jpg"
                             date="2023.09.20"
                             link="https://mp.weixin.qq.com/s/ed5wf_pJ9lWLeHKB8HeM0Q"
                             tags={['中秋节', '线下活动']}
                             bordered={false}/>
            </Layout>
        </Space>
    )
}
