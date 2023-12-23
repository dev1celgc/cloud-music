import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
    count: number
    message: string
    direction: 'left' | 'right' | 'down'
    
}
//对initialState进行类型约束
const  initialState = {
    count: 100,
    message: 'redux',
    direction: 'sd'
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeMessage(state, { payload }: PayloadAction<string>) {
            state.message = payload
        }
    }
})
export const {changeMessage} = counterSlice.actions
export default counterSlice.reducer