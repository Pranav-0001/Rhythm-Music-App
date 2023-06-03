import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    userId:'' 
}

export const userSlice=createSlice({
    name:'user',
    initialState:INITIAL_STATE,
    reducers:{
        updateUser:(state,action)=>{
            state.userId=action.payload.userId
        }
    }
})

export const {updateUser} = userSlice.actions
export default userSlice.reducer