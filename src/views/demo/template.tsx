import React, {memo} from "react";
import type {FC, ReactNode } from 'react'
interface IProps {
    children?: ReactNode
}
const Download: FC<IProps> = () => {
    return (
    <div>
        Template
    </div>
    )
}
Download.displayName = 'Download'
export default memo(Download) 