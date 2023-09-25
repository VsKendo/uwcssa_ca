import React from 'react'
import '../app/home.css'
import {Image} from 'antd'

function TextOverImage() {
    return (
        <div className="image-container-left">
            <Image src="uwcssa_logo.svg" className="transparent-icon" alt="Index Image" preview={false}/>
            <div className="text-overlay" style={{marginTop: '40%'}}>
                <h1>欢迎访问温莎大学中国学生学者联谊会</h1>
                <p>- UWCSSA官网</p>
            </div>
        </div>
    )
}

export default TextOverImage
