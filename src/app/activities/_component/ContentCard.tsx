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
                <h2> {title} </h2>
                <i> {date} </i>
                <p> {content} </p>
                <a className={styles.more} href={link}> More </a>
            </div>

        </div>

    )

}
