import React from 'react';
import { Button, Col, Divider, Row, Popover } from 'antd';
import UserInfoCard from './UserInfoCard'; // 引入 UserInfoCard 组件

interface UserCard {
    avatar: string;
    username: string;
    role: string;
    level: number;
    badges: string[];
}

interface BriefInfo {
    key: number;
    title: string;
    time: string;
    author: string;
    url: string;
    userCard: UserCard;
}

interface BriefInfoThreadProps {
    infoList: BriefInfo[];
}

export default function BriefInfoThread(props: React.PropsWithChildren<BriefInfoThreadProps>) {
    const { infoList } = props;

    const styleList: React.CSSProperties[] = [{
        marginLeft: '2.5%',
        marginRight: '2.5%',
        backgroundColor: 'rgba(255,204,204,0.31)'
    }, {
        marginLeft: '2.5%',
        marginRight: '2.5%',
        backgroundColor: 'rgba(255,0,51,0.15)'
    }];

    for (let i = 1; i <= infoList.length; i += 1) {
        infoList[i - 1].key = i;
    }

    return (
        <div style={{ marginBottom: 10 }}>
            {infoList.map((item: BriefInfo) => (
                    <Row key={item.key} style={styleList[item.key % 2]}>
                        <Col span={2} style={{
                            marginRight: '2%',
                            marginTop: '0.7rem',
                            marginBottom: '0.7rem'
                        }}>
                            <Button style={{
                                fontSize: '1rem',
                                marginLeft: '50%',
                                textAlign: 'center'
                            }} type="text">
                                {item.key}
                            </Button>
                        </Col>
                        <Divider style={{ marginTop: '1.4rem' }} type="vertical" />
                        <Col span={12} style={{
                            marginLeft: '2%',
                            marginTop: '0.7rem',
                            marginBottom: '0.7rem',
                        }}>
                            <Button type="text" href={item.url}>
                                {item.title}
                            </Button>
                        </Col>
                        <Divider style={{ marginTop: '1.4rem' }} type="vertical" />
                        <Col style={{ marginLeft: '20%' }}>
                            <div style={{ marginTop: '2%' }}>
                                {item.time} <br />
                                <Popover
                                    content={<UserInfoCard
                                        avatar={item.userCard.avatar}
                                        username={item.userCard.username}
                                        role={item.userCard.role}
                                        level={item.userCard.level}
                                        badges={item.userCard.badges}
                                    />}
                                    title="用户信息"
                                    trigger="hover"
                                    placement="leftBottom"
                                >
                                    <Button type="text">
                                        {item.author}
                                    </Button>
                                </Popover>
                            </div>
                        </Col>
                    </Row>
                )
            )}
        </div>
    );
}
