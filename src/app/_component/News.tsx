import React,{useState} from 'react'
import {Button, Typography, Radio, Space} from 'antd'
import { SearchOutlined, FileTextOutlined, FileTextTwoTone, CarTwoTone,StarTwoTone, ShoppingTwoTone } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import styles from './ButtonStyle.module.css'
const { Title } = Typography;


function News(){
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
  return(
    <>
      
      <Title level={2} style={{ marginTop: '90px' }}>了解最新动态？</Title>
      <br/>
      <Button type="primary" size="large" icon={<SearchOutlined />}>
          Start searching
      </Button>
      <br/>
      <br/>
      <br/>
    
      <Space size={[20,20]} wrap>
          
      <Button 
      
      size={size} 
      style={{ 
        padding: '60px 40px',
        textAlign: 'left', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        width: '250px', // specify your desired width
        height: '175px', // specify your desired height
        whiteSpace: 'normal',
        overflow: 'hidden'
      }}>
      <div>
      <FileTextTwoTone style={{ marginBottom: '15px' }}/>
        <h3>新闻</h3>
        <p style={{ margin: 2 }}>最即时的新闻，让你信息永不短线</p>
      </div>
    </Button>
          

    <div
    className={styles['fourButtonsStyle']}
    >
      <Button>
      
      <div>
      
        <CarTwoTone style={{ marginBottom: '15px' }}/>
      
        <h3>活动</h3>
        <p style={{ margin: 2 }}>和朋友一起互动，不错过最新、最热门的活动</p>
      </div>
    </Button>
    </div>
    

    <Button 
      size={size} 
      style={{ 
        padding: '60px 40px',
        textAlign: 'left', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        width: '250px', // specify your desired width
        height: '175px', // specify your desired height
        whiteSpace: 'normal',
        overflow: 'hidden'
      }}>
      <div>
      <StarTwoTone style={{ marginBottom: '15px' }}/>
        <h3>新生必读</h3>
        <p style={{ margin: 2 }}>了解校园生活大小事，新生指南不容错过</p>
      </div>
    </Button>

    <Button 
      size={size} 
      style={{ 
        padding: '60px 40px',
        textAlign: 'left', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        width: '250px', // specify your desired width
        height: '175px', // specify your desired height
        whiteSpace: 'normal',
        overflow: 'hidden'
      }}>
      <div>
      <ShoppingTwoTone style={{ marginBottom: '15px' }}/>
        <h3>加入我们</h3>
        <p style={{ margin: 2 }}>海量的工作机会，随时随地找工作</p>
      </div>
    </Button>
        </Space>
    
      

    </>
    
  )
}

export default News