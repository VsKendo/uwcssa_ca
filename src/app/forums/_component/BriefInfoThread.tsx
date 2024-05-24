import React from 'react'
import {Button, Col, Divider, Row} from 'antd'

export default function BriefInfoThread(props: React.PropsWithChildren<Record<string, any>>) {
    const {infoList}: { [p: string]: any; children?: React.ReactNode | undefined } = {...props}

    const styleList: React.CSSProperties[] = [{
        marginLeft: '2.5%',
        marginRight: '2.5%',
        backgroundColor: 'rgba(255,204,204,0.31)'
    }, {
        marginLeft: '2.5%',
        marginRight: '2.5%',
        backgroundColor: 'rgba(255,0,51,0.15)'
    }]
    for (let i = 1; i <= infoList.length; i += 1) {
        infoList[i - 1].key = i
    }
    return (
        <div style={{marginBottom: 10}}>
            {infoList.map((item: { key: number, title: string, time: string, author: string }) => (
                    <Row key={item.key} style={styleList[item.key % 2]}>
                        <Col span={2} style={{
                            marginRight: '2%',
                            marginTop: '0.7rem',
                            marginBottom: '0.7rem'
                        }}>
                            <Button style={{
                                fontSize: '1rem',
                                marginLeft: '50%',
                                textAlign: 'center'
                            }} type="text">
                                {item.key}
                            </Button>
                        </Col>
                        <Divider style={{marginTop: '1.4rem'}} type="vertical"/>
                        <Col span={12} style={{
                            marginLeft: '2%',
                            marginTop: '0.7rem',
                            marginBottom: '0.7rem',
                        }}>
                            <Button type="text" href="/forums/thread">
                                {item.title}
                            </Button>
                        </Col>
                        <Divider style={{marginTop: '1.4rem'}} type="vertical"/>
                        <Col style={{marginLeft: '20%'}}>
                            <div style={{marginTop: '2%'}}>
                                {item.time} <br/>
                                <Button type="text">
                                    {item.author}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                )
            )}
        </div>
    )

}
