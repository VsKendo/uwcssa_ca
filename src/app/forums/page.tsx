import {Button, Space, Divider, Typography, Row, Col} from 'antd'
import React from 'react'

export default function ForumsIndex() {
    return (
        <div>
            <Row style={{marginLeft: '5%'}}>
                <Col span={3}>
                    <Typography style={{width: '15%'}}>
                        <Button href="https://www.google.com" type="link">
                            1
                        </Button>
                    </Typography>
                </Col>
                <Col span={14}>
                    <Typography style={{width: '65%'}}>
                        <Button href="https://www.google.com" type="link">
                            版规：不让聊嫖娼
                        </Button>
                    </Typography>
                </Col>
                <Col span={7}>
                    <Typography>
                        <Button href="https://www.google.com" type="link">
                            29-10 21:04 <br/>
                            vskendo
                        </Button>
                    </Typography>
                </Col>
            </Row>
        </div>
    )
}
