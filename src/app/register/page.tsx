'use client'

import React from 'react'
import {
    Form,
    Image,
    Input,
    Button,
    Typography,
    Space,
    Divider,
    Modal,
    Tooltip, message
} from 'antd'
import {emailSuffix, isUWinEmail, lengthValid} from '@/lib/stringUtils'
import {confirmSignUp, signUp} from 'aws-amplify/auth'
import {useRouter} from 'next/navigation'


const {Title} = Typography

type FieldType = {
    name?: string;
    email?: string;
    major?: string;
    password?: string;
    confirmedPassword?: string;
    code?: string;
    year?: number;
};

export default function RegisterIndex() {
    const [modal, contextHolder] = Modal.useModal()
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [username, setUsername] = React.useState('')
    const [validCodeSent, isValidCodeSent] = React.useState(false)
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const [confirmedPasswordVisible, setConfirmedPasswordVisible] = React.useState(false)
    const [messageApi, messageContextHolder] = message.useMessage()
    const majorPattern = /^[A-Za-z]*$/
    const [form] = Form.useForm()
    const [codeForm] = Form.useForm()
    const router = useRouter()
    const handleFinish = async (values: any) => {
        const emailAddress = values.email.toLowerCase() + emailSuffix
        let continued = true
        if (values.password && values.password === values.confirmedPassword &&
            lengthValid(values.name, 1, 32) &&
            lengthValid(values.major, 1, 10) &&
            isUWinEmail(emailAddress)) {
            const instance = modal.info({
                title: '注册申请已提交，正在等待结果',
                content: '请稍后，我们正在检查您的申请',
            })
            signUp({
                username: emailAddress,
                password: values.password,
                options: {
                    userAttributes: {
                        'custom:loginName': values.email.toLowerCase(),
                        'custom:nickname': values.name,
                        'email': emailAddress,
                        'custom:major': values.major,
                    }
                }
            }).catch(e => {
                const errMsg = e.message.split('error ')
                instance.destroy()
                const reason = e?.name ? `${e.name}: ${e.message ?? ''}` : (e?.message ?? '未知错误');
                modal.error({
                    title: '申请失败！',
                    content: `请联系管理员！失败原因：${reason}`,
                })
                continued = false
            })
            if (continued) {
                setUsername(emailAddress)
                instance.destroy()
                if (validCodeSent) {
                    setIsModalOpen(true)
                } else {
                    isValidCodeSent(true)
                    setIsModalOpen(true)
                }
            }
        } else {
            setPasswordVisible(true)
            setConfirmedPasswordVisible(true)
            modal.error({
                title: '注册失败！',
                content: '请检查您的输入是否正确',
            })
        }
    }
    const handleSignUpConfirmation = async (values: any) => {
        try {
            const {isSignUpComplete} = await confirmSignUp({
                username: username,
                confirmationCode: values.code
            })
            if (isSignUpComplete) {
                messageApi.success('注册成功！3秒后为您转跳到登录界面')
                setTimeout(() => {
                    router.push('/')
                }, 3000)
            }
        } catch (error) {
            messageApi.error('注册失败：请联系管理员')
        }
        codeForm.resetFields()
        setIsModalOpen(false)
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
                        欢迎注册UWCSSA账号
                    </Title>
                </Space>
            </section>
            <Modal
                title="验证邮件已发送"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={[]}
            >
                <Title level={5}>请输入验证码：</Title>
                <Form
                    name="basic"
                    form={codeForm}
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={handleSignUpConfirmation}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        name="code"
                        rules={[{required: true, message: '请输入您的验证码!'}]}
                    >
                        <Input.OTP length={6}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{
                        span: 8,
                        offset: 11
                    }}>
                        <Space style={{marginBottom: 0}}>
                            <Button type="primary" htmlType="submit">立刻注册</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
            <Divider style={{marginBottom: 30}}>仅限使用温莎大学邮箱注册账号</Divider>
            <Form labelCol={{span: 11}} wrapperCol={{span: 8}} name="from" onFinish={handleFinish} form={form}>
                <Tooltip placement="top" title="其他用户可看到您的昵称">
                    <Form.Item<FieldType> label="昵称" name="name"
                                          rules={[{
                                              required: true,
                                              message: '请输入昵称!'
                                          }]}
                    >
                        <Input style={{width: 300}} placeholder="请输入昵称"/>
                    </Form.Item>
                </Tooltip>
                <Tooltip placement="top" title="请输入邮箱前缀，如 abc123@uwindsor.ca 只须输入 abc123 即可">
                    <Form.Item<FieldType> label="温莎大学邮箱（用户名）" name="email"
                                          rules={[{
                                              required: true,
                                              message: '请输入邮箱前缀，如 abc123@uwindsor.ca 只须输入 abc123 即可'
                                          }]}
                    >

                        <Input style={{width: 300}} placeholder="请输入温莎大学邮箱前缀" suffix="@uwindsor.ca"/>
                    </Form.Item>
                </Tooltip>
                <Tooltip placement="top" title="请输入密码（8-32个字符）">
                    <Form.Item<FieldType> label="密码" name="password"
                                          rules={[{
                                              required: true,
                                              message: '密码'
                                          }]}
                    >

                        <Input.Password
                            visibilityToggle={{visible: passwordVisible, onVisibleChange: setPasswordVisible}}
                            minLength={8} maxLength={32} style={{width: 300}} placeholder="请输入密码"/>

                    </Form.Item>
                </Tooltip>
                <Tooltip placement="top" title="请再次输入密码（8-32个字符）">
                    <Form.Item<FieldType> label="确认" name="confirmedPassword"
                                          rules={[{
                                              required: true,
                                              message: '请再次输入密码，和上方密码一样'
                                          }]}
                    >

                        <Input.Password
                            visibilityToggle={{visible: confirmedPasswordVisible, onVisibleChange: setConfirmedPasswordVisible}}
                            style={{width: 300}} placeholder="请再次输入密码"/>
                    </Form.Item>
                </Tooltip>
                <Tooltip placement="top" title="请输入字母缩写方便我们匹配校友">
                    <Form.Item<FieldType> label="专业代码（字母缩写）" name="major"
                                          rules={[{
                                              required: true,
                                              message: '仅允许输入字母缩写!'
                                          }]}
                    >
                        <Input style={{width: 300}} placeholder="请输入您的专业代码（仅字母）" maxLength={10}
                               onInput={(e) => {
                                   const element = e.target as HTMLInputElement
                                   const input = element.value
                                   if (input && !majorPattern.test(input)) {
                                       element.value = element.value.replace(/[^a-zA-Z]/g, '')
                                   }
                                   element.value = element.value.toUpperCase()
                               }}/>
                    </Form.Item>
                </Tooltip>
                <Form.Item wrapperCol={{
                    span: 8,
                    offset: 11
                }}>
                    <Space style={{marginBottom: 40}}>
                        <Button type="primary" htmlType="submit">注册</Button>
                        <Button onClick={() => {
                            form.resetFields()
                        }}>清空 </Button>
                        <Button href="/" type="dashed" style={{marginLeft: '70%'}}>返回主页</Button>
                    </Space>
                </Form.Item>
            </Form>
            {contextHolder}
            {messageContextHolder}
        </>
    )
}
