import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from 'react'

import Header from '@/component/Header'
import Footer from '@/component/Footer'
import {Layout} from 'antd'
import StyledComponentsRegistry from '../lib/AntdRegistry'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'UWCSSA | The Chinese Students and Scholars Association at University of Windsor.',
    description: '温莎大学中国学生学者联谊会是在温莎大学学生会下注册的一个非政治、非赢利的服务性组织。学生会于1985年由当时的一些中国学生、访问学者组建成立，为温莎华人提供服务将近20年。\n' +
        '      学生会的目标是团结在温莎的中国学生学者；帮助大家适应学校的生活和新的文化环境；提供给大家相互交流的环境和机会；发扬宣传中国的传统文化并加强多文化的交流。\n' +
        '      我们欢迎所有的温莎大学学生学者加入到学生会中，使学生会更强大，能给大家提供更多的帮助，更好的服务温莎大学的学生以及大温莎地区的华人。\n' +
        '      The Chinese Students and Scholars Association at University of Windsor\n' +
        '      (CSSA-UW) is a non-political, non-profit, service-oriented organization,\n' +
        '      which is officially ratified by U.W.S.A. at University of Windsor. Founded\n' +
        '      in 1985 by a group of Chinese students and visiting scholars, the CSSA has\n' +
        '      provided services to Chinese people in Windsor for nearly 20 years. Our\n' +
        '      goal is to unite Chinese students and scholars in Windsor; to help Chinese\n' +
        '      students and scholars to adjust their campus lives and adopt the new\n' +
        '      culture; to provide them with comfortable environment and various\n' +
        '      opportunities to communicate and thus enrich their lives in Canada; and to\n' +
        '      promote Chinese culture heritage and multicultural communications in\n' +
        '      Canada. We welcome all Chinese students & scholars to join us and make\n' +
        '      CSSA a much bigger, stronger, and helpful association for all Chinese in U\n' +
        '      of W as well as in the Great Windsor Area. See less.',
}

function RootLayout({children}: { children: React.ReactNode }) {
    return <html lang="zh-CN">
    <body className={inter.className}>
    <Layout style={{height: '100vh'}}>
        <Header/>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
        <Footer/>
    </Layout>
    </body>
    </html>
}

export default RootLayout
