
import React , {lazy} from "react"
//引入路由对象类型
import { RouteObject, Navigate} from "react-router-dom"

//分包处理，路由懒加载
const Focus = lazy(() => import('@/views/focus'))
const Discover = lazy(() => import('@/views/discover'))
const Recommend = lazy(() => import('@/views/discover/c-pages/recommend'))
const Ranking = lazy(() => import('@/views/discover/c-pages/ranking'))
const Songs = lazy(() => import('@/views/discover/c-pages/songs'))
const Djradio = lazy(() => import('@/views/discover/c-pages/djradio'))
const Artist = lazy(() => import('@/views/discover/c-pages/artist'))
const Album = lazy(() => import('@/views/discover/c-pages/album'))
const Download = lazy(() => import('@/views/download'))
const Music = lazy(() => import('@/views/mymusic'))


const routes:RouteObject[] = [
    {
        path: '/',
        //路由重定向
        element: <Navigate to="/discover" />
    },
    {
        path: '/discover',
        element: <Discover />,
        children: [
            {
                path: '/discover',
                //路由重定向
                element: <Navigate to="/discover/recommend" />
            },
            {
                path: '/discover/recommend',
                //路由重定向
                element: <Recommend/>
            },
            {
                path: '/discover/ranking',
                //路由重定向
                element: <Ranking />
            },
            {
                path: '/discover/songs',
                //路由重定向
                element: <Songs />
            },
            {
                path: '/discover/djradio',
                //路由重定向
                element: <Djradio />
            },
            {
                path: '/discover/artist',
                //路由重定向
                element: <Artist />
            },
            {
                path: '/discover/album',
                //路由重定向
                element: <Album />
            },
        ]
    },
    {
        path: '/focus',
        element: <Focus />
    },
    {
        path: '/music',
        element: <Music />
    },
    {
        path: '/Download',
        element: <Download />
    }
]
export default routes



