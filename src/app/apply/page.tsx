'use client'

import React from 'react'
import Link from 'next/link'
import {
    Form,
    Image,
    Input,
    Button,
    Rate,
    Typography,
    Space,
    Divider,
    Modal
} from 'antd'
import {isUWinEmail, lengthValid} from '@/lib/stringUtils'
import axios from 'axios'

const {Title} = Typography

type FieldType = {
    name?: string;
    email?: string;
    wechat?: string;
    major?: string;
    willing?: number;
};
export default function ApplyIndex() {
    const [modal, contextHolder] = Modal.useModal()
    const handleFinish = (values: any) => {
        if (lengthValid(values.name, 1, 32) && isUWinEmail(values.email)) {
            const instance = modal.info({
                title: '申请已提交，正在等待结果',
                content: '请稍后，我们正在记录您的申请',
            })
            // XHR js.fetch('xxx.xx/apply')=>(res)
            axios.post('https://7bceojyhmgp5qcw6wb343agv740bhull.lambda-url.us-east-2.on.aws/ApplyBetaTest', values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    instance.destroy()
                    modal.success({
                        title: `申请成功！注册邮件将被发送至${values.email}`,
                        content: `${response.data}`,
                    })
                })
                .catch(error => {
                    instance.destroy()
                    modal.error({
                        title: '申请失败！',
                        content: `失败原因：${error.response.data}`,
                    })
                })
        } else {
            modal.error({
                title: '申请失败！',
                content: `请检查输入的邮箱 ${values.email} 是否为温莎大学邮箱`,
            })
        }
    }
    return (
        <>
            <section style={{
                textAlign: 'center',
                marginTop: 48,
                marginBottom: 40
            }}>
                <Space align="start">
                    <Image
                        style={{
                            width: 40,
                            height: 40
                        }}
                        src="uwcssa_logo.svg"
                        alt="Ant Design"
                        preview={false}
                    />
                    <Title level={2} style={{marginBottom: 0}}>
                        UWCSSA论坛“一叶枫声”开放测试资格申请
                    </Title>
                </Space>
            </section>
            <Divider style={{marginBottom: 30}}>请填写表单以方便我们发放测试资格</Divider>
            <Form labelCol={{span: 11}} wrapperCol={{span: 8}} name="basic" onFinish={handleFinish}>
                <Form.Item<FieldType> label="姓名" name="name"
                                      rules={[{
                                          required: true,
                                          message: '请输入姓名!'
                                      }]}
                >
                    <Input style={{width: 200}} placeholder="请输入姓名"/>
                </Form.Item>
                <Form.Item<FieldType> label="温莎大学邮箱" name="email"
                                      rules={[{
                                          required: true,
                                          message: '请输入温莎大学邮箱!'
                                      }]}
                >
                    <Input style={{width: 200}} placeholder="请输入@uwindsor.ca邮箱"/>
                </Form.Item>
                <Form.Item<FieldType> label="微信号" name="wechat"
                                      rules={[{
                                          required: true,
                                          message: '请输入微信号!'
                                      }]}
                >
                    <Input style={{width: 200}} placeholder="请输入微信号"/>
                </Form.Item>
                <Form.Item<FieldType> label="专业" name="major"
                                      rules={[{
                                          required: true,
                                          message: '请输入您的专业!'
                                      }]}
                >
                    <Input style={{width: 200}} placeholder="请输入您的专业"/>
                </Form.Item>
                <Form.Item<FieldType> label="内测参与意愿" name="willing" initialValue={5} style={{
                    marginLeft: 30,
                    paddingLeft: 30
                }}>
                    <Rate/>
                </Form.Item>
                <Form.Item wrapperCol={{
                    span: 8,
                    offset: 11
                }}>
                    <Space style={{marginBottom: 40}}>
                        <Button type="primary" htmlType="submit">提交</Button>
                        <Button><Link href="/"> 取消</Link> </Button>
                    </Space>
                </Form.Item>
            </Form>
            {contextHolder}
        </>
    )
}
