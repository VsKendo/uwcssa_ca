'use client'

import React from 'react'
import {Layout} from 'antd'

const {Footer} = Layout
export default function FooterElement() {
    return (
        <Footer style={{
            fontSize: 14,
            textAlign: 'center',
            borderTop: '1px solid rgba(5, 5, 5, 0.06)'
        }}>
            <strong>&copy; 2023 UWCSSA. All rights reserved.</strong>
        </Footer>
    )
}
