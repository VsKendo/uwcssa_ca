import React from 'react'
import {Popover, Button} from 'antd'

export default function ThreadShortLink(props: React.PropsWithChildren<Record<string, any>>) {
    const {
        hoverContent,
        linkContent,
        // linkUrl,
        style,
        ...rest
    } = props
    const realHoverContent = (
        <div>
            <p>板块：『{hoverContent.block}』</p>
            <p>作者：{hoverContent.author}</p>
            <p>时间：{hoverContent.time}</p>
        </div>
    )
    const realLinkContent: string = linkContent.length > 17 ? `${linkContent.substring(0, 17)}...` : linkContent
    return (
        <Popover {...style} {...rest} content={realHoverContent} title={hoverContent.title}>
            <Button type="text">{realLinkContent}</Button>
            {/* <Button href={linkUrl} type="text">{realLinkContent}</Button> */}
        </Popover>
    )
}
