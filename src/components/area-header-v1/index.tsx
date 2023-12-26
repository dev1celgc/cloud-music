import React, {memo} from "react";
import type {FC, ReactNode } from 'react'
import { Link  } from "react-router-dom";
import { HeaderV1Wrapper } from "./style";
//接收参数
interface IProps {
    children?: ReactNode
    title?: string
    moreText?: string
    keywords?: string[]
    moreLink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
    const {
        title =  '默认标题',
        keywords = [],
        moreText = '更多',
        moreLink = '/' 
    } = props

    return (
        <HeaderV1Wrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keywords">
                    {
                        keywords.map((item, index) => {
                            return (
                                <div className="item" key={item}>
                                    <span className="link">{item}</span>
                                    {
               index < (keywords.length - 1) && <span className="divider">|</span> 
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <Link to={moreLink} className="more">{moreText}</Link>
                <i className="sprite_02 icon"></i>
            </div>
        </HeaderV1Wrapper>
    )
}

export default memo(AreaHeaderV1)