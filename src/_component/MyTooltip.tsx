'use client'
import React from "react";
import {Tooltip} from "antd";

export default function MyToolTip({children}: { children: React.ReactNode },...restProps: any) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Tooltip {...restProps}>{children}</Tooltip>
        </div>
    );
}