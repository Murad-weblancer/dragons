import { configureStore } from '@reduxjs/toolkit'
import { dragonApi } from './rtk/spaceDragonApi'
import { dragonsApi } from './rtk/spaceDragons'

export default configureStore({
  reducer: {
    [dragonApi.reducerPath]: dragonApi.reducer,
    [dragonsApi.reducerPath]: dragonsApi.reducer,
  }
})