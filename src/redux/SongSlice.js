import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    cover:null,
    songTitle:'',
    album:'',
    songUrl:'',
    songIndex:null,
    AllSongs:[]
}

export const songSlice=createSlice({
    name:'song',
    initialState:INITIAL_STATE,
    reducers:{
        updateSong:(state,action)=>{
            state.album=action.payload.album
            state.cover=action.payload.cover
            state.songTitle=action.payload.songTitle
            state.songUrl=action.payload.songUrl
            state.songIndex=action.payload.songIndex
            state.AllSongs=action.payload.songs

        }
    }
})

export const {updateSong} = songSlice.actions
export default songSlice.reducer