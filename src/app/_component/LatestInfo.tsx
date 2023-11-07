import React from 'react'
import FallbackImage from '@/component/FallbackImage'
import {Button} from 'antd'
import styles from './LatestInfo.module.css'


function LatestInfo(props: React.PropsWithChildren<Record<string, any>>){
  const {
    title,
    content,
    imgSrc,
    link
} = props

return (
    <div className={styles.card}>
        <div className={styles['card-image']}>
            <FallbackImage src={imgSrc} alt="图片描述"/>
        </div>
        <div className={styles['card-content']}>
            <h2> {title} </h2>
            <p> {content} </p>
            <div style={{ width: '20%' }}>
              <Button type="text" block href={link}><div style={{ color: 'rgb(38, 106, 254)' }}>Read More</div></Button>
            </div>
            
        </div>

    </div>

)
}

export default LatestInfo