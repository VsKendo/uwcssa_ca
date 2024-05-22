import {Button, Col, Form, FormProps, Input, message, Modal, Row} from 'antd'
import React, {useState} from 'react'
import {isUWinEmail, lengthValid, emailSuffix} from '@/lib/stringUtils'
import {Authenticator} from '@aws-amplify/ui-react'
import {Amplify} from 'aws-amplify'
import {getCurrentUser, signIn, signOut} from 'aws-amplify/auth'
import awsconfig from '../aws-exports'

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
Amplify.configure(awsconfig)

function LoginPage() {
    const [nickname, setNickname] = useState('')
    const [form] = Form.useForm()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showLoginModal = () => {
        setIsModalOpen(true)
    }

    const GlobalSignOut = async () => {
        const {userId, signInDetails} = await getCurrentUser()
        console.log(userId, signInDetails)
        await signOut({global: true}).then(() => {
            message.success('成功登出')
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
                    setNickname(`${values.username}`)
                    if (r.isSignedIn) {
                        message.success(`'欢迎您!'${inputUsername}`)
                        setIsModalOpen(false)
                    } else {
                        message.error('登录失败！账号状态异常！请联系管理员')
                    }
                }
            ).catch(() => {
                message.error('登录失败！用户名或密码错误!')
            })
        } else {
            message.error('请输入用户名和密码!')
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
                <span>欢迎您 {nickname}!&nbsp;<Button type="primary" onClick={GlobalSignOut}> 注销 </Button></span> :
                <Button type="primary" onClick={showLoginModal}>登录</Button>}

            <Modal title="登录你的 UWCSSA 账号" open={isModalOpen} onCancel={handleCancel}
                   footer={[
                       // <Button key="back" onClick={handleCancel}>
                       //     Cancel
                       // </Button>,
                   ]}
            >
                {/* <Authenticator> */}
                {/*     {({ */}
                {/*         signOut, */}
                {/*         user */}
                {/*     }) => ( */}
                {/*         <main> */}
                {/*             <h1>Hello {user ? user.username : '未登录'}</h1> */}
                {/*             <Button onClick={signOut}>Sign out</Button> */}
                {/*         </main> */}
                {/*     )} */}
                {/* </Authenticator> */}
                <Form
                    name="login"
                    form={form}
                    labelCol={{span: 5}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
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

                    {/* <Form.Item<FieldType> */}
                    {/*     name="remember" */}
                    {/*     valuePropName="checked" */}
                    {/*     wrapperCol={{ */}
                    {/*         offset: 8, */}
                    {/*         span: 16 */}
                    {/*     }} */}
                    {/* > */}
                    {/*     <Checkbox>记住我</Checkbox> */}
                    {/* </Form.Item> */}

                    <Form.Item wrapperCol={{
                        offset: 5,
                        span: 16
                    }}>
                        <Row>
                            <Col span={5}>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                            </Col>
                            <Col offset={5} span={5}>
                                <Button htmlType="button" onClick={onReset}>
                                    清空
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Modal>
        </span>
    )
}

export default LoginPage
