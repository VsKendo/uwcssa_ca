'use client'

import React from 'react'
// 导入仅对本文件生效的css，在其他文件夹中禁止导入以下的css文件
import classes from './home.module.css'

export default function HomeIndex() {
    return (
        <div className={classes.homeDiv}>
            <h1>This is a empty home page</h1>
        </div>
    )
}
