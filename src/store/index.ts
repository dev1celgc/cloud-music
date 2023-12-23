import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './modules/counter'
import recommendReducer from '../views/discover/c-pages/recommend/store/recommend'
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from "react-redux"
const store = configureStore({
    reducer: {
        counter: counterReducer,
        recommend: recommendReducer
    }
})

// const state = store.getState()
// type StateType = typeof state

//用getState拿到函数类型
type GetStateFnType = typeof store.getState
//返回值类型
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch
//函数签名,useSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const appShallowEqual = shallowEqual
export default store