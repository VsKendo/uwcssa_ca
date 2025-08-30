import {Button, Col, ConfigProvider, Form, FormProps, Input, message, Modal, Row} from 'antd'
import React, {useEffect, useState} from 'react'
import {isUWinEmail, lengthValid, emailSuffix} from '@/lib/stringUtils'
import {Amplify} from 'aws-amplify'
import {getCurrentUser, signIn, signOut} from 'aws-amplify/auth'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {USERNAME} from '@/lib/storeConstant'
import awsconfig from '../aws-exports'
import ForgotPasswordModal from './ForgotPasswordModal'


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
Amplify.configure(awsconfig)

function LoginPage() {
    const [forgotOpen, setForgotOpen] = useState(false)

    const [nickname, setNickname] = useState('')
    const router = useRouter()
    const [messageApi, contextHolder] = message.useMessage()
    useEffect(() => {
        const fetch = async () => {
            const {signInDetails} = await getCurrentUser()
            return signInDetails ? signInDetails.loginId : ''
        }
        fetch().then(r => {
            if (r) setNickname(r)
        }).catch(() => {
        })
    }, [])
    useEffect(() => {
        localStorage.setItem(USERNAME, nickname)
    }, [nickname])
    const [form] = Form.useForm()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showLoginModal = () => {
        setIsModalOpen(true)
    }

    const GlobalSignOut = async () => {
        router.replace('/')
        await signOut({global: true}).then(() => {
            messageApi.success('成功登出')
            setNickname('')
        })
    }
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        const inputUsername = `${values.username}${emailSuffix}`
        if (isUWinEmail(inputUsername) && lengthValid(values.password, 1, 20)) {
            signIn({
                username: inputUsername,
                password: values.password
            }).then(r => {
                    setNickname(`${inputUsername}`)
                    if (r.isSignedIn) {
                        messageApi.success(`'欢迎您!'${inputUsername}`)
                        setIsModalOpen(false)
                    } else {
                        messageApi.error('登录失败！账号状态异常！请联系管理员')
                        setNickname('')
                    }
                }
            ).catch((error) => {
                console.log('登录失败，错误详情:', error)
                if (error.name === 'UserNotConfirmedException') {
                    Modal.error({
                        title: '账号未确认',
                        content: '您的账户尚未确认，请检查您的邮箱并完成验证。',
                        okText: '确定',
                    });
                } else if (error.name === 'NotAuthorizedException') {
                    Modal.error({
                        title: '登录失败',
                        content: '您的账户已被禁止登录，请联系管理员。',
                        okText: '确定',
                    });
                } else if (error.name === 'UserNotFoundException') {
                    Modal.error({
                        title: '用户不存在',
                        content: '该用户名未注册，请检查后重新输入或注册一个新账号。',
                        okText: '确定',
                    });
                } else {
                    messageApi.error(`登录失败！错误类型: ${error.name}, 错误信息: ${error.message}`);
                }
            })
        } else {
            messageApi.error('请输入正确的用户名和密码!')
        }
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const onReset = () => {
        form.resetFields()
    }
    return (
        <span>
            {nickname ?
                <span>
                    欢迎您 <Link href="/biography">{nickname}</Link>!&nbsp;&nbsp;
                    <Button type="primary" onClick={GlobalSignOut}> 注销 </Button>
                </span> :
                <Button type="primary" onClick={showLoginModal}>登录</Button>}

            <Modal title="登录你的 UWCSSA 账号" open={isModalOpen} onCancel={handleCancel}
                   footer={[]}
            >
                <Form
                    name="login"
                    form={form}
                    labelCol={{span: 5}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="温莎邮箱"
                        name="username"
                        rules={[{
                            required: true,
                            message: '请输入你的用户名（温莎邮箱）!'
                        }]}
                    >
                        <Input placeholder="name123" addonAfter="@uwindsor.ca"/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="密码"
                        name="password"
                        rules={[{
                            required: true,
                            message: '请输入你的密码!'
                        }]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item wrapperCol={{
                        offset: 5,
                        span: 16
                    }}>
                        <Row  gutter={1} align="middle">
                            <Col span={3}>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                            </Col>
                            <Col offset={3} span={3}>
                                <Button htmlType="button" onClick={onReset}>
                                    清空
                                </Button>
                            </Col>
                            
                            <Col offset={5} span={5}>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                defaultBg: '#40e495',
                                                colorPrimaryHover: '#f6e8e8',
                                                colorPrimaryActive: '#808181',
                                                lineWidth: 0,
                                            },
                                        },
                                    }}
                                >
                                  <Button onClick={() => {
                                      setIsModalOpen(false)
                                      router.push('/register')
                                  }}>注册账号</Button>
                                </ConfigProvider>
                                
                            </Col>
                            
                            <Col>
                                <Button onClick={() => setForgotOpen(true)}>找回密码</Button>
                            </Col>

                        </Row>
                    </Form.Item>
                </Form>
            </Modal>
            <ForgotPasswordModal
            open={forgotOpen}
            onClose={() => setForgotOpen(false)}
            onSuccess={(username) => {
                // Optional: open login modal & prefill nickname so users can sign in immediately
                setNickname(username)
                setIsModalOpen(true)
            }}
            />

            {contextHolder}
        </span>
    )
}

export default LoginPage
