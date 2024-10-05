import React from 'react'
import {Avatar, Card} from 'antd'
import Bridges from '@/component/bridges'
import {BRIDGES_TYPES} from '@/lib/types'

interface UserInfoCardProps {
    avatar: string; // 头像的图片链接
    username: string; // 用户名
    role: string; // 身份
    level: number; // 等级
    badges: number[]; // 徽章的图片链接数组
}

export default function UserInfoCard(props: React.PropsWithChildren<UserInfoCardProps>) {
    const {
        avatar,
        username,
        role,
        level,
        badges
    } = props
    return (
        <div>
            <Card style={{width: 300}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Avatar src={avatar} size={64}/>
                    <div style={{marginLeft: '1rem'}}>
                        <h3>{username}</h3>
                        <p>{role}</p>
                        <p>Level: {level}</p>
                    </div>
                </div>
                <div style={{marginTop: '1rem'}}>
                    <h4>徽章:</h4>
                    <div style={{
                        display: 'flex',
                        gap: '0.3rem'
                    }}>
                        {badges.map((badge, index) =>
                            (
                                <div key={badge}>
                                    <Bridges badgeNumber={badge}
                                             bridgesType={index === 0 ? BRIDGES_TYPES.ROLE : BRIDGES_TYPES.ACHIEVEMENT}/>
                                </div>
                            )
                        )}

                    </div>
                </div>
            </Card>
        </div>
    )
}
