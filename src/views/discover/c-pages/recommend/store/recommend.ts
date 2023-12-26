import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, {dispatch}) => {
   const res = await getBanners()
   dispatch(changeBannersAction(res.banners))
   }
)

export const fetchHotRecommendAction = createAsyncThunk(
    'hotRecommend',
    async (arg, { dispatch }) => {
        const res = await getHotRecommend(8)
        dispatch(changeHotRecommendAction(res.result))
    }
)

interface IRecommendState {
    banners: any[]
    hotRecommend: any[]
}
const initialState: IRecommendState = {
    banners: [],
    hotRecommend: []
}
const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, {payload}) {
            state.banners = payload
        },
        changeHotRecommendAction(state, { payload }) {
            state.hotRecommend = payload
        }
        
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchBannerDataAction.pending, () => {
    //         console.log('pending')
    //     }).addCase(fetchBannerDataAction.fulfilled, (state, {payload}) => {
    //         state.banners = payload
    //     }).addCase(fetchBannerDataAction.rejected, () => {
    //         console.log('rejected')
    //     })
    // }
})
export const { changeBannersAction, changeHotRecommendAction } = recommendSlice.actions
export default recommendSlice.reducer