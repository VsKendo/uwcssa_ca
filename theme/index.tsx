'use client'

import React from 'react'
import {ConfigProvider} from 'antd'

import zhCN from 'antd/locale/zh_CN'

const withTheme = (node: JSX.Element) => (
    <ConfigProvider locale={zhCN} theme={{token: {colorPrimary: '#52c41a',},}}>
        <ConfigProvider locale={zhCN}
                        theme={{token: {borderRadius: 16,},}}>
            {node}
        </ConfigProvider>
    </ConfigProvider>
)

export default withTheme
