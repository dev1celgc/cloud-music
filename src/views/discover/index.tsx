import React, {memo, Suspense} from "react";
import type {FC, ReactNode } from 'react'
import {Outlet } from 'react-router-dom'
import NavBar from './c-tops/index'
interface IProps {
    children?: ReactNode
}
const Discover: FC<IProps> = () => {
    return (
    <div>
        <NavBar />
        <Suspense fallback="loading...">
        <Outlet></Outlet>
        </Suspense>
       
    </div>
    )
}
export default memo(Discover) 