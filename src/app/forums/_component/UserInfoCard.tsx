import React from 'react';
import { Avatar, Badge, Card } from 'antd';

interface UserInfoCardProps {
  avatar: string; // 头像的图片链接
  username: string; // 用户名
  role: string; // 身份
  level: number; // 等级
  badges: string[]; // 徽章的图片链接数组
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ avatar, username, role, level, badges }) => {
  return (
    <Card style={{ width: 300 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={avatar} size={64} />
        <div style={{ marginLeft: '1rem' }}>
          <h3>{username}</h3>
          <p>{role}</p>
          <p>Level: {level}</p>
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <h4>徽章:</h4>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
        {badges.map((badge, index) => {
  // console.log(badge); // 检查 badge 是否包含正确的 URL
  return (
    <Badge key={index} dot>
      <img src={badge} alt="badge" style={{ width: 30 }} />
    </Badge>
  );
})}

        </div>
      </div>
    </Card>
  );
};

export default UserInfoCard;
