import React from 'react'
import {Card} from 'antd'

export default function BioContent(props: React.PropsWithChildren<Record<string, any>>) {
    const {
        title,
        date,
        link
    } = props

    return (
        <Card
            style={{marginTop: '0.5%'}}
            type="inner"
            title={title}
            extra={<a href={link} target="_blank" rel="noreferrer">查看详情</a>}>
            {date}
        </Card>

    )

}
