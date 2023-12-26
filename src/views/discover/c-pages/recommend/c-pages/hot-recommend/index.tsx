import React, {memo} from "react";
import type {FC, ReactNode } from 'react'
import { HotWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { appShallowEqual, useAppSelector } from "@/store";
import  SongMenuItem from '@/components/song-item/index' ;

interface IProps {
    children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
    //获取推荐数据
    const { hotRecommends } = useAppSelector((state) => ({
        hotRecommends: state.recommend.hotRecommend
    }), appShallowEqual)
    return (
        <HotWrapper>
            <AreaHeaderV1 
            title="热门推荐"
             keywords={['华语', '流行', '摇滚', '民谣', '电子']}
             moreLink = '/discover/songs'
             >
               
            </AreaHeaderV1>
            <div className="hot-recommend">
                {
                    hotRecommends.map(item => {
                        return (
                            <SongMenuItem key={item.id} itemData = {item} >

                            </SongMenuItem>
                        )
                    })
                }
            </div>
        </HotWrapper>
    )
}

export default memo(HotRecommend)