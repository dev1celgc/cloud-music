import { appShallowEqual, useAppSelector } from "@/store";
import React, {memo, useRef, useState} from "react";
import { Carousel  } from 'antd'
import classNames from "classnames";

import type {FC, ReactNode, ElementRef } from 'react'
import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from "./style";
interface IProps {
    children?: ReactNode
}

interface IBannerRef {
    current: number
}

const Slider: FC<IProps> = () => {
    const { banners } = useAppSelector((state) => ({
        banners: state.recommend.banners
    }), appShallowEqual)
    
    //useRef获取轮播图组件实例对象
    //用ElementRef定义组件实例的类型
    //固定写法
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    //轮播图事件处理函数
    //向前移动的函数
    const handlePrevClick = () => {
        bannerRef.current?.prev()
    }
    //向右移动的函数
    const handleNextClick = () => {
        bannerRef.current?.next()
    }
    //在图片改变之前的处理函数
    // const handleBeforeChange = () => {
    //     setCurrentIndex(-1)
    // }
    //获取当前图片的函数
    const handleAfterChange = (current: number) => {
        setCurrentIndex(current)
    }
    //获取背景图片
    let background
    if(currentIndex >= 0 && banners.length > 0) {
        background = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'
    }


    return (
        <BannerWrapper style={{background: `url('${background}') center center / 6000px`}}>
            <div className="banner wrap-v2">
            <BannerLeft>
              <Carousel ref={ bannerRef } dots={false} afterChange={handleAfterChange} autoplay autoplaySpeed={1000} effect="fade" >
                {
                    banners.map(item => {
                        return (
                            <div className="banner-item" key={item.targetId}>
                                <img
                                 className="image"
                                src={item.imageUrl} 
                                alt={item.typeTitle} />
                            </div>
                        )
                    })
                }
              </Carousel>
              <ul className="dots">
                {
                    banners.map((item, index) => {
                        return (
                            <li key={item.imageUrl}>
                                <span className={
                                    classNames('item', {
                                        active: index === currentIndex
                                    })
                                }></span>
                            </li>
                        )
                    })
                }
              </ul>
            </BannerLeft>
            <BannerRight>
            </BannerRight>
            <BannerControl>
                <button className="btn left" onClick={handlePrevClick}></button>
                <button className="btn right" onClick={handleNextClick}></button>
            </BannerControl>
            </div>
        </BannerWrapper>
    )
}
export default memo(Slider) 