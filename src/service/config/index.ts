//区分开发环境和生产环境
//1、手动切换
//

let BASE_URL = ''
//2、依赖当前环境：devlopment还是production
if(process.env.NODE_ENV === 'development') {
    //开发环境
    BASE_URL = 'http://codercba.com:9002'
}else {
    BASE_URL = 'http://codercba.prod:9002'
}
export {BASE_URL}
export const TIME_OUT = 10000
//第三种方式
//在process.env中定义变量
//创建环境变量.env.development和.env.production
// declare namespace NodeJS {
//     interface ProcessEnv {
//         readonly REACT_APP_BASE_URL: string
//     }
// }