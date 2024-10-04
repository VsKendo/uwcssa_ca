export const BRIDGES_TYPES = {
    ROLE: 'role',
    ACHIEVEMENT: 'achievement',
} as const
export type BridgesType = (typeof BRIDGES_TYPES)[keyof typeof BRIDGES_TYPES];

export interface UserCard {
    avatar: string;
    username: string;
    role: string;
    level: number;
    badges: number[];
}

export interface BriefInfo {
    key: number;
    title: string;
    time: string;
    author: string;
    url: string;
    userCard: UserCard;
}
