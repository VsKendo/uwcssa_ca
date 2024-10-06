import React from 'react'
import PostDetail from '@/app/forums/thread/_component/PostDetail'

export default function ThreadIndex() {

    const briefInfoList = [
        {
            'title': '统计一下大家晚上几点睡',
            'author': 'before_sunset',
            'context': '统计一下大家晚上几点睡。建议大家早点睡。“早睡早起”对人体到底有什么好处呢？1、改变精神，改善失眠俗话说一日之计在于晨，无论是年轻人还是老年人，早起者的情绪更积极，自我健康感更好。另外，早起和早睡是相联系着的，要起得早就必须睡得早，以保证人体有足够的休息和睡眠时间。有研究表明，规律睡眠既可预防失眠的发生，又可保证睡眠的质量，所以养成早起早睡的习惯，可以有效改善睡眠质量。2、头脑清醒，精力充沛大脑经过一夜的休息调整后重新恢复了旺盛的能力，骨骼、肌肉经过休息后活动更加协调，背诵一些需要牢记的知识，都会使你感到轻松，同时也可以进行一定量的晨练。经常利用早晨时间记忆，会使你聪明博识。图片3、皮肤变好，不易长胖早睡早起及充足的睡眠，有利于新陈代谢顺畅，体内的代谢废物及时排出体外，皮肤会变得更好，人不易浮肿、发胖。4、身体健康，不易生病高血压、糖尿病、高尿酸血症、高脂血症等慢性代谢性疾病，与长期人体新陈代谢紊乱有着重要的联系。长期熬夜，人体新陈代谢紊乱，影响人体的代谢，发生这些慢性代谢性疾病，所以早睡早起有利于身体的健康，不易发生疾病。',
            'time': '2023-10-31 00:51:04',
            'url': '/1'
        },
        {
            'title': '回复: before_sunset#1',
            'author': 'vskendo',
            'context': '通常写代码写到2点',
            'time': '2023-10-31 03:23:12',
            'url': '/2'
        },
        {
            'title': '回复: before_sunset#1',
            'author': 'Corleone',
            'context': '每天睡的都比前一天晚，生物钟差不多一个月转一圈',
            'time': '2023-11-01 01:24:14',
            'url': '/4'
        },
        {
            'title': '回复: vskendo#2',
            'author': '匿名用户',
            'context':  '<h2>aefa</h2><h2><u><em>aefjalef</em></u></h2><table style="width: auto;"><tbody><tr><th colSpan="1" rowSpan="1" width="auto">123123</th><th colspan="1" rowspan="1" width="auto" style="text-align: right;">999</th><th colSpan="1" rowSpan="1" width="auto"></th><th colSpan="1" rowSpan="1" width="auto"></th><th colSpan="1" rowSpan="1" width="auto"></th><th colSpan="1" rowSpan="1" width="auto"></th></tr><tr><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto">afefafafagag</td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td></tr></tbody></table><p><br></p>',
            'time': '2023-11-01 01:24:14',
            'url': '/5'
        }

    ]


    return (
        <div style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <PostDetail infoList={briefInfoList}/>
        </div>
    )
}
