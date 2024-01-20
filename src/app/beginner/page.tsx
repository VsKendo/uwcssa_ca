'use client'

import {Space, Layout, Breadcrumb, Menu,} from 'antd'
import React, {useState} from 'react'
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons'
import type {MenuProps} from 'antd'
import SchoolContact from '@/app/beginner/_component/SchoolContact'
import BuildingCode from '@/app/beginner/_component/BuildingCode'
import WelcomePage from '@/app/beginner/_component/WelcomePage'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem
}

const items: MenuProps['items'] = [
    getItem('校园信息', 'sub1', <MailOutlined/>, [
        getItem('学校联系方式', '1'), getItem('教学楼代码', '2'),
    ]),

    getItem('温莎生活', 'sub2', <AppstoreOutlined/>, [
        // getItem('Option 5', '5'),
        // getItem('Option 6', '6'),
        // getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),

    {type: 'divider'},

    getItem('交通', 'sub4', <SettingOutlined/>, []),

    getItem('Tips', 'grp', null, [getItem('申请SIN', '13'), getItem('退税', '14'), getItem('医疗保险', '15')], 'group'),
]

export default function BeginnerIndex() {
    const [selectedKey, setSelectedKey] = useState('1')
    const onClick: MenuProps['onClick'] = (e) => {
        setSelectedKey(e.key)
    }
    const renderContent = () => {
        switch (selectedKey) {
        case '1':
            return <SchoolContact/>
        case '2':
            return <BuildingCode/>
        default:
            return <WelcomePage/>
        }
    }
    // const items = [
    //     {
    //         key: 1,
    //         label: '行前准备',
    //     },
    //     {
    //         key: 2,
    //         label: '入境指南',
    //     },
    // ]

    return (
        <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
            <Layout>
                <div style={{padding: '0 50px'}}>
                    <Breadcrumb style={{fontSize: '14px', margin: '16px 0'}}
                                items={[
                                    {title: '首页',},
                                    {title: '新生手册',},
                                ]}
                    />
                </div>
                <div style={{display: 'flex', height: '80vh'}}>
                    <Menu
                        onClick={onClick}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                        style={{maxWidth:'15vw'}}
                    />
                    <div style={{flex: 1, padding: '20px', width: '0', flexGrow: 1}}>
                        {renderContent()}
                    </div>
                </div>

            </Layout>
        </Space>
    )
}
