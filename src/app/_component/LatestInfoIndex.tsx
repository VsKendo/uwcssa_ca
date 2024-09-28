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
        <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
                <Layout>
                    <Title level={2} style={{marginTop: '10px'}}>
                        最新资讯
                    </Title>
                    <LatestInfo title="UWCSSA | 秋季新生见面会"
                                content="24年8月30日下午2点，UWCSSA约你在 Room 110, Odette building 见面"
                                imgSrc="2024_autumn_meeting.png"
                                link="https://mp.weixin.qq.com/s/lvotyhndeuU5SOZ032TH3A"
                                bordered={false}/>
                    <LatestInfo title="UWCSSA | 冬季新生见面会"
                                content="24年1月20日下午2点，UWCSSA约你在 Room 112, Odette building 见面"
                                imgSrc="2024_winter_meeting.jpg"
                                link="https://mp.weixin.qq.com/s/dFSHDNuh6m0CyCnO_BBDEw"
                                bordered={false}/>

                    <div className={styles.moreButton}>

                        <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                            <Button type="primary" href="/activities">
                                <div style={{color: 'white'}}>更多 <ArrowRightOutlined/></div>
                            </Button>
                        </div>
                    </div>

                </Layout>
            </Space>
    )
}
