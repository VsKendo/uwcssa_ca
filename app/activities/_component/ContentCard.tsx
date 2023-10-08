import React from 'react'
import FallbackImage from '@/component/FallbackImage'
import styles from './ContentCard.module.css'

export default function ContentCard(props: React.PropsWithChildren<Record<string, any>>) {
    const {
        title,
        date,
        content,
        imgSrc,
        link
    } = props
    return (
        <div className={styles.card}>
            <div className={styles['card-image']}>
                <FallbackImage src={imgSrc} alt="图片描述"/>
            </div>
            <div className={styles['card-content']}>           
                <div className={styles.tag}>
                    <span>节日</span>
                    <span>tag2</span>
                </div>
                <h2> {title} </h2>
                <i> {date} </i>
                <p> {content} </p>
                <a href={link}> 查看详情 </a>
            </div>

        </div>

    )

}
