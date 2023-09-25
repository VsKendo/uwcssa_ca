'use client'

import React from 'react'
import Link from 'next/link'
import {Button} from 'antd'

export default function NotFound() {
    return (
        <section style={{
            textAlign: 'center',
            marginTop: 48,
            marginBottom: 40,
            padding: 100
        }}>
            <div>
                <h2>啊哦！页面找不到了 | 404 NOT FOUND</h2>
                <p>无法找到您请求的资源，这很可能是因为我们的网站仍在开发中 </p>
                <Button type="primary"><Link href="/"> 点我返回主页</Link></Button>
            </div>
        </section>

    )
}
