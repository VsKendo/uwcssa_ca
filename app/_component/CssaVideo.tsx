import React from 'react'
import {Image} from 'antd'
import styles from './CssaVideo.module.css'

function CssaVideo(){
  return(
    <>
      <div className={styles['container']}>
            <div>
                <Image src="blackShadowWithBridge.jpg" 
                alt="Bridge Image" 
                preview={false} 
                width={'100vw'}
                height={'45vw'}
                />
            </div>
            <div className={styles['text-overlay']}>
                <h1>Watch the video</h1>
                <p>Chinese Style - Chinese Cultural Fair</p>
                <div className={styles['video-container']}>
                    <iframe src="https://www.youtube.com/embed/e6Tys8ZuF_k?si=cyhRnlnBl0dDlXa7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </>
  )
}

export default CssaVideo