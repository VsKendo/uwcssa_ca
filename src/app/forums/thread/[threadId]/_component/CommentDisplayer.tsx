// src\app\forums\thread\_component\CommentDisplayer.tsx
'use client'

import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, {useEffect, useState} from 'react'
import {Editor} from '@wangeditor/editor-for-react'
import {IDomEditor, IEditorConfig} from '@wangeditor/editor'

export default function MyEditor(props: React.PropsWithChildren<{ value: string, }>) {
    const {value} = props
    // editor 实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)
    useEffect(() => () => {
        if (editor == null) return
        editor.destroy()
        setEditor(null)
    }, [editor])
    // 编辑器内容
    const [html, setHtml] = useState('')
    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {
        readOnly: true
    }
    return (
        <div>
            <div>
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={() => {
                        setEditor(editor)
                        setHtml(value || '')
                    }}
                    onChange={(newEditor: {
                        getHtml: () => React.SetStateAction<string>
                    }) => setHtml(newEditor.getHtml())}
                    mode="simple"
                    style={{height: value.length > 500 ? 500 : 300, minHeight: '300px'}}
                />
            </div>
        </div>
    )
}
