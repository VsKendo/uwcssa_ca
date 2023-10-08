import React from 'react'
import { Button, Image } from 'antd'
import styles from './CommunityButton.module.css'

function CommunityButton(props: React.PropsWithChildren<Record<string, any>>) {
  const {
    icon,
    title,
    content
} = props
  return (
    
      
        <div style={{ textAlign: 'center', color: 'white',padding: '30px',fontSize: '17px',width:'390px'}}>
          <Button
            type='link'
            shape='circle'
            style={{ padding: '5px', width: '80px', height: '80px' }}>
              <div className={styles.buttonIcon}>
              <Image
              src={icon}
              style={{ width: '100%', height: '100%' }}
              preview={false}
            />
              </div>
            
            
          </Button>
          <h3 style={{marginTop: '15px'}}>{title}</h3>
                <p style={{margin: 2}}>{content}</p>
          </div>
          
        
  
  )
}

export default CommunityButton
