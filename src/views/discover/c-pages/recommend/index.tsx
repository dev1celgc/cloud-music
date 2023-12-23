import React, {memo, useState, useEffect} from "react";
import type {FC, ReactNode } from 'react'
// import hyRequest from "@/service";
import { useAppDispatch } from "@/store";
import { fetchBannerDataAction } from "./store/recommend";
import Slider from "./c-pages/slider";
interface IProps {
    children?: ReactNode
}
  
  export interface IBannerData {
    imageUrl: string
    targetId: number
    adid: any
    targetType: number
    titleColor: string
    typeTitle: string
    url?: string
    exclusive: boolean
    scm: string
    bannerBizType: string
  }
const Recommend: FC<IProps> = () => {
    //发起action获取数据
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchBannerDataAction())
    }, [])
    // const [banners, setBanners] = useState<IBannerData[]>([])

    //测试网络请求
    // useEffect(() => {
    //     hyRequest
    //     .get({
    //         url: '/banner'
    //     })
    //     .then((res) => {
    //         setBanners(res.banners)
    //     })
    // }, [])

    return (
    <div>
        <Slider />
    </div>
    )
}
export default memo(Recommend) 