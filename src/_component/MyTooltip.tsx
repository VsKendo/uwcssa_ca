import React from "react";
import {Tooltip} from "antd";

export default function MyToolTip(props: React.PropsWithChildren<Record<string, any>>) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...props.style,
        }}>
            <Tooltip {...props}>{props.children}</Tooltip>
        </div>
    );
}