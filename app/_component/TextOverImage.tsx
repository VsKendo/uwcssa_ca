import React from 'react'
import {Image} from 'antd'
import styles from './TextOverImage.module.css'

function TextOverImage() {
    return (
        <div className={styles['image-container-left']}>
            <div className={styles['transparent-icon']}>
                <Image width={500} src="uwcssa_logo.svg" alt="Index Image" preview={false}/>
            </div>
            <div className={styles['text-overlay']}>
                <h1>欢迎访问温莎大学中国学生学者联谊会</h1>
                <p>- UWCSSA官网</p>
            </div>
        </div>
    )
}

export default TextOverImage
