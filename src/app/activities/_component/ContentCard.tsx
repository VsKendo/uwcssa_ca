import React from 'react'
import FallbackImage from '@/component/FallbackImage'
import {Button} from 'antd'
import {WechatOutlined} from '@ant-design/icons'
import styles from './ContentCard.module.css'

export default function ContentCard(props: React.PropsWithChildren<Record<string, any>>) {
    const {
        title,
        date,
        content,
        imgSrc,
        link,
    } = props
    let {tags} = props
    if (!tags) tags=[]
    return (
        <div className={styles.card}>
            <div className={styles['card-image']}>
                <FallbackImage style={{width: '100%', height: '100%'}}  src={imgSrc} alt="图片描述"/>
            </div>
            <div className={styles['card-content']}>
                <div className={styles.tag}>
                    {tags.map((item:string, index: number) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <span key={index}> {item} </span>
                    ))}
                </div>
                <h2> {title} </h2>
                <i> 发布日期：{date} </i>
                <p> {content} </p>
                <Button href={link} target="_blank"> <WechatOutlined/>查看详情</Button>
            </div>

        </div>

    )

}
