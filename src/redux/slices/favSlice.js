import { createSlice } from '@reduxjs/toolkit'

export const favSlice = createSlice({
  name: 'fav',
  initialState: {
    dragons:[]
  },
 reducers:{
    getDragons(state,action){
        const findIndex = state.dragons.find(dragon=>dragon.id === action.payload.id)
        if(findIndex){
          findIndex.count++
        }else{
          state.dragons.push({
            ...action.payload,
            count:1
          })
        }
    },
    removeDragons(state,action){
        state.dragons = state.dragons.filter(obj=>obj.id !== action.payload)
    }
 }

})

export const { getDragons,removeDragons } = favSlice.actions

export default favSlice.reducer