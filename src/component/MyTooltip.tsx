import React from 'react'
import {Tooltip} from 'antd'

export default function MyToolTip(props: React.PropsWithChildren<Record<string, any>>) {
    const {style,children, ...rest} = props
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...style
        }}>
            <Tooltip {...rest} >{children}</Tooltip>
        </div>
    )
}
