import {Space, Layout, Typography, Button} from 'antd'
import React from 'react'
import LatestInfo from '@/app/_component/LatestInfo'
import {
    ArrowRightOutlined
} from '@ant-design/icons'
import styles from './LatestInfo.module.css'


const {Title} = Typography
export default function LatestInfoIndex() {
    return (
        <>
        <Title level={2} style={{marginTop: '10px'}}>
                    最新资讯
        </Title>
        <br/>
        <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
            
            <Layout>
                <LatestInfo title="UWCSSA| 广寒游 中秋活动"
                             content="9月30日下午2点，UWCSSA邀你一同参与现在中秋节活动"
                             imgSrc="2023_mid_autumn.jpg"
                             link="https://mp.weixin.qq.com/s/ed5wf_pJ9lWLeHKB8HeM0Q"
                             bordered={false}/>
                <LatestInfo title="滑雪季到了，大家一起准备滑雪吧"
                             content="一些温莎周边滑雪的介绍以及准备"
                             imgSrc="skiing.jpg"
                             link="https://mp.weixin.qq.com/s/ed5wf_pJ9lWLeHKB8HeM0Q"
                             bordered={false}/>
                <LatestInfo title="旅游胜地早知道，收拾行囊出发！"
                             content="还在为去哪旅行放松而感到苦恼？跟我一起看完以下内容，背上行囊即刻出发！"
                             imgSrc="travel.jpg"
                             link="https://mp.weixin.qq.com/s/ed5wf_pJ9lWLeHKB8HeM0Q"
                             bordered={false}/>

                <div className={styles.moreButton}>
                        
                        
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Button type='primary' href="/activities"><div style={{ color: 'white'}}>更多 <ArrowRightOutlined /></div></Button>
                    </div>
                </div>
                
            </Layout>
        </Space>

        </>
    )
}
