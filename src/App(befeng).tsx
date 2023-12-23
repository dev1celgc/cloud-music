import React, {Suspense} from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppSelector, useAppDispatch, appShallowEqual} from './store'
import { changeMessage } from './store/modules/counter'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
// import store from './store'
//用getState拿到函数类型
// type GetStateFnType = typeof store.getState
//返回值类型
// type IRootState = ReturnType<GetStateFnType>
// const IRootState = typeof state

function App() {
  const {count, message, } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message,
    direction: state.counter.direction
  }), 
  appShallowEqual
  )
  //事件处理函数
  const dispatch = useAppDispatch()
  const handleChangeMessage  = () => {
    dispatch(changeMessage('你好'))
  }
  //shallowEqual，浅层比较，没有变化，不会刷新
  return <div className="App">
    <AppHeader />
    <Suspense fallback="loading....">
      <div className="main"> {useRoutes(routes)}</div>
    </Suspense>
    <AppFooter />
    <h2>当前计数: {count}</h2>
    <h2>当前消息: {message}</h2>
    <button onClick={ handleChangeMessage }>信息修改</button>
    </div>
}
export default App
