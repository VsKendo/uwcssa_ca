import React from 'react'
import styles from './ImagePartial.module.css'

function ImagePartial() {
    return (
        <div className={styles['image-container-right']}>
            <div className={styles['cropped-image']}/>
        </div>
    )
}

export default ImagePartial
