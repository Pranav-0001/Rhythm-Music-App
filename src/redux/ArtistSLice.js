import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    artistId:'aa',
    artistName:'',
    artistImg:null,
    
}

export const artistSlice=createSlice({
    name:'artist',
    initialState:INITIAL_STATE,
    reducers:{
        updateArtist:(state,action)=>{
            state.artistId=action.payload.artistId
            state.artistName=action.payload.artistName
            state.artistImg=action.payload.artistImg
        }
    }
})

export const {updateArtist} = artistSlice.actions
export default artistSlice.reducer