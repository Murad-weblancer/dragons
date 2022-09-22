import { configureStore } from '@reduxjs/toolkit'
import { dragonApi } from './rtk/spaceDragonApi'
import { dragonsApi } from './rtk/spaceDragons'
import user from './slices/auth'
import fav from './slices/favSlice'

export default configureStore({
  reducer: {
    [dragonApi.reducerPath]: dragonApi.reducer,
    [dragonsApi.reducerPath]: dragonsApi.reducer,
    user,
    fav
  }
})