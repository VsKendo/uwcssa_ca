'use client'

import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, {useEffect, useState} from 'react'
import {Editor, Toolbar} from '@wangeditor/editor-for-react'
import {IDomEditor, IEditorConfig, IToolbarConfig} from '@wangeditor/editor'
import {Button, Modal} from 'antd'

export default function MyEditor() {
    // editor 实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)
    useEffect(() => () => {
        if (editor == null) return
        editor.destroy()
        setEditor(null)
    }, [editor])
    // 编辑器内容
    const [html, setHtml] = useState('')
    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {}
    toolbarConfig.excludeKeys = ['group-image', 'group-video', 'fullScreen', 'insertLink', 'insertTable', 'todo',
        'bulletedList', 'numberedList']
    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {
        placeholder: '请输入内容...',
    }
    editorConfig.customPaste = (e: IDomEditor, event: ClipboardEvent): boolean => {
        // 自定义粘贴事件，仅允许粘贴文本
        const {clipboardData} = event
        if (clipboardData)
            for (let i = 0; i < clipboardData.items.length; i += 1) {
                const item = clipboardData.items[i]
                // 粘贴文件时，阻止默认行为，仅允许文本和 slate-fragment （文档文字）类型
                if (!item.type.startsWith('text/') && item.type !== 'application/x-slate-fragment') {
                    Modal.error({
                        title: '仅支持粘贴文字',
                        content: '请勿粘贴文件（如图片、视频或二进制文件等）',
                    })
                    event.preventDefault()
                    return false
                }
            }
        return true
    }
    editorConfig.maxLength = 1000
    editorConfig.onMaxLength = () => {
        Modal.error({
            title: '超出最大长度',
            content: '最大长度为 1000 字符，请勿输入太多文字',
        })
    }
    if (editorConfig.MENU_CONF)
        editorConfig.MENU_CONF.codeSelectLang = {
            // 代码语言
            codeLangs: [
                {text: 'HTML', value: 'html'},
                {text: 'Javascript', value: 'javascript'},
                {text: 'Typescript', value: 'typescript'},
                {text: 'Python', value: 'python'},
                {text: 'Java', value: 'java'},
                {text: 'C', value: 'c'},
                {text: 'C++', value: 'cpp'},
                {text: 'C#', value: 'csharp'},
                {text: 'Markdown', value: 'markdown'},
            ]
        }

    const onFinished = () => {
        if (editor) {
            // console.log(editor.getAllMenuKeys())
            // if (editor.getText().trim())
            //     console.log(editor.getHtml())
            // else
            //     console.log('Empty content')
        }
    }
    return (
        <div>
            <div style={{border: '1px solid #ccc', zIndex: 100}}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{borderBottom: '1px solid #ccc'}}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={(newEditor: {
                        getHtml: () => React.SetStateAction<string>
                    }) => setHtml(newEditor.getHtml())}
                    mode="default"
                    style={{minHeight: '100%', height: '400px', overflowY: 'hidden'}}
                />
            </div>
            <Button type='primary' style={{marginTop: '0.5rem', marginRight: '1rem'}}
                    onClick={onFinished}>发表</Button>
            <Button type='text' style={{marginTop: '0.5rem'}} onClick={() => editor?.clear()}>清空</Button>
        </div>
    )
}
