import React, { useState } from 'react';
import { Table, Button, Card } from 'antd';
import { CheckCircleOutlined, InfoCircleOutlined, WarningOutlined } from '@ant-design/icons';
import '../style.css'; // Custom styles

const TIPS = {
    EXAM: '1',
    SKIP_EXAM: '2',
    INSURANCE: '3',
};

const columns = [
    {
        title: 'Tips',
        dataIndex: 'name',
        key: 'name',
    },
];

const data = [
    {
        key: TIPS.EXAM,
        name: '考取驾照',
    },
    {
        key: TIPS.SKIP_EXAM,
        name: '跳考',
    },
    {
        key: TIPS.INSURANCE,
        name: '车险',
    },
];

export default function LicenceSkills() {
    const [isListVisible, setIsListVisible] = useState(true);
    const [selectedTip, setSelectedTip] = useState<string | null>(null);

    const handleRowClick = (record: {key: string}) => {
        setSelectedTip(record.key);
        setIsListVisible(false);
    };

    const handleBackClick = () => {
        setIsListVisible(true);
        setSelectedTip(null);
    };

    const renderContent = () => {
        switch (selectedTip) {
            case TIPS.EXAM:
                return (
                    <div className="fancy-card">
                        <Card
                            title={<h2><CheckCircleOutlined /> 考取驾照</h2>}
                            bordered={false}
                            style={{ width: '100%' }}
                        >
                            <p><strong>1.</strong> 安省驾照：G1 → G2 → G</p>
                            <p><strong>1.1</strong> 三个考试间隔期为1年</p>
                            <p><strong>2.</strong> 驾照就是你的ID：</p>
                            <ul>
                                <li>旅行(机票、火车票)</li>
                                <li>住宿(酒店)</li>
                                <li>购物(枪、酒)</li>
                            </ul>
                            <p><strong>3.</strong> 带护照、学签(大签)、翻译件（若有）</p>
                            <p><strong>4.</strong> G1 直接去现场考，在官网上预约 G2/G 考试</p>
                            <p>更多信息在 <a href="https://uwcssa.ca" target="_blank" rel="noopener noreferrer">uwcssa.ca</a></p>
                        </Card>
                    </div>
                );
            case TIPS.SKIP_EXAM:
                return (
                    <div className="fancy-card">
                        <Card
                            title={<h2><InfoCircleOutlined /> 跳考</h2>}
                            bordered={false}
                            style={{ width: '100%' }}
                        >
                            <p><strong>1.</strong> 在国内有驾照的，可以在这边办理 驾照翻译证明</p>
                            <p><strong>1.1</strong> 从拿到驾照开始算，如果满2年了就可以跳过 G1 → G2 的1年等待期</p>
                            <p><strong>2.</strong> 在国内驾龄满2年的，可以在国内办理证明后，在这边办理 驾龄证明</p>
                            <p><strong>2.1</strong> 车管所开纸质驾龄证明，必须带title+公章!!!</p>
                            <p><strong>2.2</strong> 拥有该证明可跳过G2直接考G(即 G1→G)</p>
                            <p><strong>3.</strong> 在这边的驾校拿"全科证书"</p>
                            <ul>
                                <li>完成 MTO-Approved Beginner Driver Education Course (BDE)</li>
                                <li>可以减少 G1 - G2 的 4个月等待期并减少保险费</li>
                            </ul>
                        </Card>
                    </div>
                );
            case TIPS.INSURANCE:
                return (
                    <div className="fancy-card">
                        <Card
                            title={<h2><WarningOutlined /> 车险</h2>}
                            bordered={false}
                            style={{ width: '100%' }}
                        >
                            <p><strong>1.</strong> 即使有了驾照，没买保险开车也是违法行为!</p>
                            <p><strong>2.</strong> 保险价格取决于很多因素：</p>
                            <ul>
                                <li>全险会比半险更贵</li>
                                <li>如果跳考G2(使用驾龄证明)，会让保险更贵</li>
                                <li>使用全科证书可降低保费</li>
                                <li>24岁及以下保险费用较高</li>
                                <li>住址也会影响保费</li>
                                <li>结婚后保费更低</li>
                                <li>鲜艳的颜色或车型也会增加保险费用</li>
                            </ul>
                            <p><strong>3.</strong> 根据需求，多问不同的保险公司，挑选合适的保险。</p>
                        </Card>
                    </div>
                );
            default:
                return <div>请选择一个项目查看详情</div>;
        }
    };

    return (
        <div className="container">
            {isListVisible ? (
                <Table
                    columns={columns}
                    dataSource={data}
                    onRow={(record) => {
                        return {
                            onClick: () => handleRowClick(record),
                        };
                    }}
                    className="table"
                />
            ) : (
                <div className="content-container">
                    <Button className="back-button" onClick={handleBackClick}>
                        后退
                    </Button>
                    <div className="content">{renderContent()}</div>
                </div>
            )}
        </div>
    );
}
