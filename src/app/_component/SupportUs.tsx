import React from 'react'
import {Button, Space, Image} from 'antd'

function SupportUs(){
  return(

    <Space size={[80, 40]} align="center" wrap>
      <Image src='supportUs.jpg' preview={false} width={400}/>
      <div style={{width: '36vw'}}>
        <h2 style={{fontSize: '30px',textAlign: 'left'}}>支持我们</h2>
        <br/>
        <p style={{fontSize: '20px',textAlign: 'left'}}>贡献一份力量，帮助我们提高错误修复、网页改进和功能开发的速度。</p>
        <br/>
        <div style={{textAlign: 'left'}}>
          <Button type='primary' size='large'>捐款</Button>
        </div>
        
      </div>
    
    </Space>
  )
}
export default SupportUs