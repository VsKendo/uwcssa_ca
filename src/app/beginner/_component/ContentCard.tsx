import React from 'react'
import {Card} from 'antd'
import styles from './ContentCard.module.css'

export default function ContentCard(props: React.PropsWithChildren<Record<string, any>>) {
    const {
        style,
        content,
        ...rest
    } = props
    return (
        <div className={styles.box} style={style}>
            <Card  {...rest}>
                <div className={styles['content-text']}>{content}</div>
            </Card>
        </div>
    )
}
