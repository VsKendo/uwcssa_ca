import {Button, Space, Table, Divider, Popover, Row, Col, Card} from 'antd'
import React from 'react'
import type { ColumnsType } from 'antd/es/table';
  
const cardStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor:'rgba(255,204,204,0.3)'
  };

const hoverContent11 = (
    <div>
      <p>版块：『精品软件区』</p>
      <p>作者：叶灵苏</p>
      <p>时间：2023-10-31 00:51:4</p>
    </div>
  );

const hoverContent12 = (
    <div>
      <p>版块：『精品软件区』</p>
      <p>作者：pikamimi</p>
      <p>时间：2023-10-30 23:30:36</p>
    </div>
  );

const evenpostStyle: React.CSSProperties = {
    marginLeft: '2.5%',marginRight:'2.5%',backgroundColor:'rgba(255,204,204,0.35)'
  };

const oddnpostStyle: React.CSSProperties = {
    marginLeft: '2.5%',marginRight:'2.5%',backgroundColor:'rgba(255,0,51,0.2)'
  };



export default function ForumsIndex() {
    return (
        <div>
            
            <Divider>Middle size table</Divider>
            <Row gutter={24} style={{marginLeft: '1.7%',marginRight:'1.7%'}}>
                <Col span={6}>
                <Card title="新鲜出炉"  extra={<a href="#">More</a>} bordered={false} style={cardStyle}>
                    <Popover content={hoverContent11} title="DX书库网页检索 EbookDatabase 0.0.3.1">
                    <a href="https://www.google.com" target="_blank"> 1.DX书库网页检索 EbookDatabase 0.0.3.1<strong></strong></a>
                    </Popover>
                    <br/>
                    <Popover content={hoverContent12} title="Sav PDF Viewer v1.14.2-pdf阅读器">
                    <a href="https://www.google.com" target="_blank">2.Sav PDF Viewer v1.14.2-pdf阅读器<strong></strong></a>
                    <br/>
                    </Popover>
                </Card>
                </Col>
                <Col span={6}>
                <Card title="技术分享 New～" extra={<a href="#">More</a>} bordered={false} style={cardStyle}>
                    <a href="https://www.google.com" target="_blank"><strong></strong></a>
                </Card>
                </Col>
                <Col span={6}>
                <Card title="人气热门" extra={<a href="#">More</a>} bordered={false} style={cardStyle}>
                    <a href="https://www.google.com" target="_blank"><strong></strong></a>
                </Card>
                </Col>
                <Col span={6}>
                <Card title="精华采撷" extra={<a href="#">More</a>} bordered={false} style={cardStyle}>
                    <a href="https://www.google.com" target="_blank"><strong></strong></a>
                </Card>
                </Col>
            </Row>            
            
            <Divider>Small size table</Divider>
            <Row style={evenpostStyle}>
                <Col span={2} style={{marginRight: '2%', marginTop:'0.7rem',marginBottom:'0.7rem'}}>
                        <Button href="https://www.google.com" style={{fontSize:'1rem',marginLeft: '50%',textAlign:'center'}} type="link">
                            1
                        </Button>
                </Col>
                <Divider style={{ marginTop:'1.4rem'}} type="vertical" / > 
                <Col span={15} style={{marginLeft: '2%', marginTop:'0.7rem',marginBottom:'0.7rem'}}>
                    
                        <Button href="https://www.google.com"  type="link">
                            版规：不让聊嫖娼
                        </Button>
                    
                </Col>
                <Divider style={{ marginTop:'1.4rem'}} type="vertical" / >
                <Col style={{marginLeft: '7.5%'}}>
                    
                        <Button href="https://www.google.com" type="link">
                            29-10 21:04 <br/>
                            vskendo
                        </Button>
                    
                </Col>
            
            </Row>

            <Row style={oddnpostStyle}>
                <Col span={2} style={{marginRight: '2%', marginTop:'0.7rem',marginBottom:'0.7rem'}}>
                        <Button href="https://www.google.com" style={{fontSize:'1rem',marginLeft: '50%',textAlign:'center'}} type="link">
                            2
                        </Button>
                </Col>
                <Divider style={{ marginTop:'1.4rem'}} type="vertical" / > 
                <Col span={15} style={{marginLeft: '2%', marginTop:'0.7rem',marginBottom:'0.7rem'}}>
                    
                        <Button href="https://www.google.com"  type="link">
                        统计下 大家基本每天几点睡
                        </Button>
                    
                </Col>
                <Divider style={{ marginTop:'1.4rem'}} type="vertical" / >
                <Col style={{marginLeft: '7.5%'}}>
                        <Button href="https://www.google.com" type="link">
                            30-10 16:04 <br/>
                            before_sunset
                        </Button>
                    
                </Col>
            
            </Row>
        
        </div>
    )
}
