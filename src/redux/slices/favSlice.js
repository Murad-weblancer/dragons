import { createSlice } from '@reduxjs/toolkit'

export const favSlice = createSlice({
  name: 'fav',
  initialState: {
    dragons:[]
  },
 reducers:{
    getDragons(state,action){
        state.dragons.push(action.payload)
    },
    removeDragons(state,action){
        state.dragons = state.dragons.filter(obj=>obj.id !== action.payload)
    }
 }

})

export const { getDragons,removeDragons } = favSlice.actions

export default favSlice.reducer