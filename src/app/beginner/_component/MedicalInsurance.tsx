import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse

export default function MedicalInsurance() {
    return (
        <Collapse defaultActiveKey={['1']}>
            <Panel header="国际学生健康保险计划（GSHIP）覆盖范围" key="1">
                <p>温莎大学为国际学生及其家属提供GSHIP医疗保险，在学期间享有必要的基本医疗保障。详细的服务和治疗内容请参阅《国际学生GSC手册》。主要覆盖范围包括：</p>
                <ul>
                    <li><strong>医生就诊：</strong> 在诊所、急诊或医生办公室的看诊服务。</li>
                    <li><strong>实验室检查：</strong> 如血液、尿液等常规检测。</li>
                    <li><strong>诊断测试：</strong> 包括X光、CT、MRI、超声波等医学影像检查。</li>
                    <li><strong>COVID-19相关治疗：</strong> 必要的检测和治疗（不含旅行和移民用途的检测）。</li>
                    <li><strong>住院治疗：</strong> 住院时间不限，从1天到数月均有保障。</li>
                    <li><strong>手术及必要医疗程序：</strong> 涵盖符合OHIP标准的必要手术及治疗。</li>
                    <li><strong>孕期医疗服务：</strong> 包括产前和产后护理。</li>
                    <li><strong>救护车服务：</strong> 您仅需支付$45，其余费用由保险承担。</li>
                </ul>
            </Panel>
        </Collapse>
    )
}