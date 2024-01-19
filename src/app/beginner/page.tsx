'use client'

import {Space, Layout, Breadcrumb,Menu,} from 'antd'
import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import CampusMap from '@/app/beginner/_component/CampusMap'
import SchoolContact from '@/app/beginner/_component/SchoolContact'
import BuildingCode from '@/app/beginner/_component/BuildingCode'

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
  getItem('校园信息', 'sub1', <MailOutlined />, [
    getItem('校园地图', '1'), getItem('学校联系方式', '2'), getItem('教学楼代码（Building code）', '3'),
  ]),

  getItem('温莎生活', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

  { type: 'divider' },

  getItem('交通', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem('Tips', 'grp', null, [getItem('申请SIN', '13'), getItem('退税', '14'),getItem('医疗保险', '15')], 'group'),
]

export default function BeginnerIndex() {
    const [selectedKey, setSelectedKey] = useState('1')
    const onClick: MenuProps['onClick'] = (e) => {
        setSelectedKey(e.key)
      }

      const renderContent = () => {
        switch (selectedKey) {
            case '1': 
                return <CampusMap />
            case '2':
              return <SchoolContact/>
              case '3':
                return <BuildingCode/>
            default:
                return null
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
                    <Breadcrumb style={{
                        fontSize: '14px',
                        margin: '16px 0'
                    }}
                                items={[
                                    {title: '首页',},
                                    {title: '新生手册',},
                                    // {
                                    //     title: <a rel="noopener noreferrer" href="/">
                                    //         {items.map(item => {
                                    //             if (item.key === itemKey) {
                                    //                 return item.label
                                    //             }
                                    //             return null
                                    //         })}</a>,
                                    //     menu: {items},
                                    // },
                                ]}
                    />
                </div>
            </Layout>
            <Layout>
              <div style={{ display: 'flex', minHeight: '100vh' }}>
                <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
                />
                <div style={{ flex: 1, padding: '20px', width: '0', flexGrow: 1 }}>
                    {renderContent()}
                </div>
              </div>
                
            </Layout>
        </Space>
    )
}