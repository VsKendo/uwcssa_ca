import {Button} from 'antd'
import React from 'react'

function JoinUsButton(props: React.PropsWithChildren<Record<string, any>>) {
    const {
        icon,
        title,
        content
    } = props
    return (
        <Button
            size="large"
            style={{
                padding: '20px 30px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'row', // Changed to row to lay out children side by side
                alignItems: 'center',  // Vertically centering the contents
                justifyContent: 'space-between', // Push title to the left and icon+content to the right
                width: '70vw',
                height: '80px',
                whiteSpace: 'normal',
                overflow: 'hidden'
            }}>

            <h3>{title}</h3>
            <div style={{display: 'flex', alignItems: 'center'}}>  {/* Adjusted the flexDirection to default ('row') and added alignItems */}
                <p style={{margin: 2,fontSize: '14px', color: '#808080'}}>{content}</p>
                <div style={{marginLeft: '15px',fontSize: '25px'}}> {/* Added marginLeft for spacing between content and icon */}
                    {icon}
                </div>
            </div>
        </Button>
    )
}

export default JoinUsButton
