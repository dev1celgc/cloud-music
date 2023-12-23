import React, {memo} from "react";
import type {FC, ReactNode } from 'react'
import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import headerTitles from '@/assets/data/header_titles.json'
import { Input } from 'antd'
import { SearchOutlined } from "@ant-design/icons";
interface IProps {
    children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
    //定义组件内部状态,用路径去匹配索引

    //返回超链接或者路由的函数
    function showItem(item: any) {
        if(item.type === 'path') {
            //navlink可以自动保存
            return <NavLink to={item.link} className={({isActive}) => {
                return isActive ? 'active' : undefined
            }}>{item.title}
            <i className="icon sprite_01"></i>
            </NavLink>
        } else {
            return <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
        }
    }

    return (
    <HeaderWrapper>
        <div className="content wrap-v1">
        <HeaderLeft>
            <a href="/" className="logo sprite_01">
                网易云音乐
            </a>
            <div className="title-list">
                {
                   (headerTitles).map(item => {
                    return (
                        <div className="item" key={item.link}>
                           {showItem(item)}
                        </div>
                    )
                }) 
                }
            </div>
        </HeaderLeft>
        {/* <Link to="/discover">发现音乐</Link>
        <Link to="/music">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link> */}
        <HeaderRight>
            <span className="input">
                <Input className="search" placeholder="音乐/视频/电台/用户" prefix={ <SearchOutlined />   } />
            </span>
            <span className="center">创作者中心</span>
            <span className="login">登录</span>
        </HeaderRight>
    </div>
    <div className="divider"></div>
    </HeaderWrapper>
    )
}
export default memo(AppHeader) 