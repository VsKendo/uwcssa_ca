import {Button} from 'antd'
import React from 'react'

function NewsButton(props: React.PropsWithChildren<Record<string, any>>) {
    const {
        icon,
        title,
        content
    } = props
    return (
        <Button
            size="large"
            style={{
                padding: '60px 40px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '250px',
                height: '175px',
                whiteSpace: 'normal',
                overflow: 'hidden'
            }}>

            <div>
                {icon}
                {/* <CarTwoTone/> */}
                <h3 style={{marginTop: '15px'}}>{title}</h3>
                <p style={{margin: 2}}>{content}</p>
            </div>
        </Button>
    )
}

export default NewsButton
