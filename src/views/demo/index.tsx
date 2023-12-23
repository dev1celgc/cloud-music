
//导入memo防止组件重复渲染
import React, {memo} from "react";
//引入类型最好不要合在一起写，需要加type分开写
import type { ReactNode } from 'react'


//对props进行类型约束
interface IProps {
    children?: ReactNode
    name: string
    age: number
    height?: number
}


// const Download = (props: IProps) => {
//     return (
//     <div>
//         <div>name: {props.name}</div>
//         <div>age: {props.age}</div>
//         <div>height: {props.height}</div>
//     </div>
//     )
// }

// export default Download

const Download: React.FC<IProps> = (props) => {
    return (
    <div>
        <div>name: {props.name}</div>
        <div>age: {props.age}</div>
        <div>height: {props.height}</div>
        {props.children}
    </div>
    )
}

Download.defaultProps = {
    name: 'sds',
    age: 22,
    height: 1.88 
}

Download.displayName = 'Download'
export default memo(Download) 