"use client";
import Link from 'next/link';
import {
    Form,
    Image,
    Select,
    Input,
    Button,
    Rate,
    Typography,
    Space,
    Divider,
} from 'antd';
import MyToolTip from '@/_component/MyTooltip';
import withTheme from '../../../theme';

const {Option} = Select;
const {Title} = Typography;

const Home = function Home() {
    return (
        <>
            <section style={{textAlign: 'center', marginTop: 48, marginBottom: 40}}>
                <Space align='start'>
                    <Image
                        style={{width: 40, height: 40}}
                        src={'uwcssa_logo.svg'}
                        alt='Ant Design'
                    />
                    <Title level={2} style={{marginBottom: 0}}>
                        填写UWCSSA论坛开放测试资格申请
                    </Title>
                </Space>
            </section>
            <Divider style={{marginBottom: 30}}>请填写表单以方便我们审核</Divider>
            <Form labelCol={{span: 11}} wrapperCol={{span: 8}} name="basic">
                <Form.Item label='姓名' name="username"
                           rules={[{required: true, message: '请输入姓名!'}]}
                >
                    <Input style={{width: 200}} placeholder='请输入姓名'/>
                </Form.Item>
                <Form.Item label='邮箱' name="email"
                           rules={[{required: true, message: '请输入温莎大学邮箱!'}]}
                >
                    <Input style={{width: 200}} placeholder='请输入@uwindsor.ca邮箱'/>
                </Form.Item>
                <Form.Item label='微信号' name="wechat"
                           rules={[{required: true, message: '请输入微信号!'}]}
                >
                    <Input style={{width: 200}} placeholder='请输入微信号'/>
                </Form.Item>
                <Form.Item label='专业' name="major"
                           rules={[{required: true, message: '请输入您的专业!'}]}
                >
                    <Input style={{width: 200}} placeholder='请输入您的专业'/>
                </Form.Item>
                <Form.Item label='内测参与意愿' style={{marginLeft: 30, paddingLeft: 30}}>
                    <Rate defaultValue={5}/>
                </Form.Item>
                <Form.Item wrapperCol={{span: 8, offset: 11}}>
                    <Space style={{marginBottom: 40}}>
                        <MyToolTip title={'暂未开放申请'} placement="bottom">
                            <Button type='primary' htmlType='submit' disabled>提交</Button>
                        </MyToolTip>
                        {/*<div*/}
                        {/*    style={{*/}
                        {/*        display: 'flex',*/}
                        {/*        alignItems: 'center',*/}
                        {/*        justifyContent: 'center',*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <Tooltip title={'暂未开放申请'} placement="bottom">*/}
                        {/*        <Button type='primary' htmlType='submit' disabled>提交</Button>*/}
                        {/*    </Tooltip>*/}
                        {/*</div>*/}
                        <Button><Link href='/'> 取消</Link> </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    );
}

const HomePage = () => {
    return withTheme(<Home/>);
}

export default HomePage;
