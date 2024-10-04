import React from 'react'
import {BRIDGES_TYPES, BridgesType} from '@/lib/types'
import {BACKGROUND_SIZE_X, BACKGROUND_SIZE_Y} from '@/lib/storeConstant'

export default function Bridges(props: React.PropsWithChildren<{
    style?: React.CSSProperties,
    bridgesType: BridgesType,
    badgeNumber: number
}>) {
    const {
        style,
        badgeNumber,
        bridgesType,
        ...rest
    } = props
    const scale = 0.7
    const valueCalc = () => {
        const values = ['', '', '']
        if (bridgesType === BRIDGES_TYPES.ACHIEVEMENT) {
            let badgeNumberVal = badgeNumber - 1
            if (badgeNumberVal < 0) {
                badgeNumberVal = 0
            }
            values[0] = `-${(70 * (badgeNumberVal % 10)) * scale}px -${70 * scale * Math.floor(badgeNumberVal / 10)}px`
            values[1] = 'achievement_bridges.png'
        } else {
            values[0] = `-${(70 * (badgeNumber % 10)) * scale}px -${70 * scale * Math.floor(badgeNumber / 10)}px`
            // values[0] = `-${32.5 * (badgeNumber % 10) - 12.25}px -${32.5 * Math.floor(badgeNumber / 10)}px`
            values[1] = 'role_bridges.png'
        }
        return values
    }
    const values = valueCalc()
    // const backgroundSizeValue = `${BACKGROUND_SIZE_X * scale}px ${BACKGROUND_SIZE_Y * scale}px`
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...style
        }}>
            <div
                style={{
                    width: `${scale * 65}px`,  // 设定显示区域的宽度
                    height: `${scale * 65}px`,  // 设定显示区域的高度
                    backgroundImage: `url(${values[1]})`,  // 背景图片
                    backgroundPosition: `${values[0]}`,  // 控制图片在容器中的位置
                    backgroundSize: `${BACKGROUND_SIZE_X * scale}px ${BACKGROUND_SIZE_Y * scale}px`,  // 确保背景图完全覆盖容器
                    backgroundRepeat: 'no-repeat',  // 防止背景重复
                    overflow: 'hidden'  // 确保容器之外的部分不显示
                }}
                {...rest}
            />
        </div>
    )
}
Bridges.defaultProps = {
    style: {},
}
