import React, {memo} from "react";
import type {FC, ReactNode } from 'react'
import { SongItemWrapper } from "./style";
import { formatCount, getImageBySize } from "@/utiles/format";

interface IProps {
    children?: ReactNode
    itemData: any
}
const SongMenuItem: FC<IProps> = (props) => {
    const { itemData } = props
    return (
        <SongItemWrapper>
            <div className="top">
                <img src={ getImageBySize(itemData.picUrl, 140) } alt="" />
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon headset"></i>
                            <span className="count">{ formatCount(itemData.playCount) }</span>
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="bottom">
                { itemData.name }
            </div>
        </SongItemWrapper>
    )
}
export default memo(SongMenuItem) 