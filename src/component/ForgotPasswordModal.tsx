'use client'

import React, { useState } from 'react'
import { Modal, Form, Input, Button, Row, Col, message } from 'antd'
import { resetPassword, confirmResetPassword } from 'aws-amplify/auth'
import { isUWinEmail, emailSuffix } from '@/lib/stringUtils'

type Props = {
  open: boolean
  onClose: () => void
  onSuccess?: (username: string) => void // e.g. cue user to sign in
}

export default function ForgotPasswordModal({ open, onClose, onSuccess }: Props) {
  const [step, setStep] = useState<'ENTER_USERNAME' | 'ENTER_CODE'>('ENTER_USERNAME')
  const [sending, setSending] = useState(false)
  const [resetUsername, setResetUsername] = useState('')
  const [form] = Form.useForm()
  const [msgApi, ctx] = message.useMessage()

  const handleRequestCode = async (values: { username: string }) => {
    const inputUsername = `${values.username}${emailSuffix}`
    if (!isUWinEmail(inputUsername)) {
      msgApi.error('请输入有效的温莎邮箱')
      return
    }
    setSending(true)
    try {
      const out = await resetPassword({ username: inputUsername })
      // Next step should be CONFIRM_RESET_PASSWORD_WITH_CODE
      setResetUsername(inputUsername)
      setStep('ENTER_CODE')
      msgApi.success('验证码已发送，请检查邮箱')
    } catch (err: any) {
      msgApi.error(`发送失败：${err.name} - ${err.message}`)
    } finally {
      setSending(false)
    }
  }

  const handleConfirm = async (values: { code: string; password: string; confirm: string }) => {
    if (values.password !== values.confirm) {
      message.error('两次输入的密码不一致')
      return
    }
    setSending(true)
    try {
      await confirmResetPassword({
        username: resetUsername,
        confirmationCode: values.code,
        newPassword: values.password,
      })
      msgApi.success('密码重置成功，请使用新密码登录')
      onSuccess?.(resetUsername)
      handleClose()
    } catch (err: any) {
      msgApi.error(`重置失败：${err.name} - ${err.message}`)
    } finally {
      setSending(false)
    }
  }

  const handleClose = () => {
    setStep('ENTER_USERNAME')
    setResetUsername('')
    form.resetFields()
    onClose()
  }

  return (
    <>
      {ctx}
      <Modal title="找回密码" open={open} onCancel={handleClose} footer={null} destroyOnClose>
        {step === 'ENTER_USERNAME' ? (
          <Form form={form} name="forgot-username" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={handleRequestCode} autoComplete="off">
            <Form.Item label="温莎邮箱" name="username" rules={[{ required: true, message: '请输入你的用户名（温莎邮箱）!' }]}>
              <Input placeholder="name123" addonAfter="@uwindsor.ca" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit" loading={sending}>发送验证码</Button>
            </Form.Item>
          </Form>
        ) : (
          <Form form={form} name="forgot-confirm" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={handleConfirm} autoComplete="off">
            <Form.Item label="账号">
              <Input value={resetUsername} disabled />
            </Form.Item>
            <Form.Item label="验证码" name="code" rules={[{ required: true, message: '请输入邮箱验证码' }]}>
              <Input placeholder="6位验证码" />
            </Form.Item>
            <Form.Item label="新密码" name="password" rules={[{ required: true, message: '请输入新密码' }]} hasFeedback>
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="确认新密码"
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: '请再次输入新密码' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) return Promise.resolve()
                    return Promise.reject(new Error('两次输入不一致'))
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Row gutter={12}>
                <Col>
                  <Button type="primary" htmlType="submit" loading={sending}>重置密码</Button>
                </Col>
                <Col>
                  <Button onClick={() => setStep('ENTER_USERNAME')} disabled={sending}>返回上一步</Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  )
}
