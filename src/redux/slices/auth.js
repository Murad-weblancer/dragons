import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email:null,
    token:null,
    id:null,
    user:{}
  },
  reducers:{
    setUser(state,action){
        state.email = action.payload.email
        state.token = action.payload.token
        state.id = action.payload.id
    },
    removeUser(state){
      state.email = null
      state.token = null
      state.id = null
    },
    getUser(state,action){
      state.user = action.payload
    }
  }

})

export const { setUser,removeUser,getUser } = userSlice.actions

export default userSlice.reducer