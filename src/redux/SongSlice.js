import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    cover:null,
    songTitle:'',
    album:'',
    songUrl:'',
    songId:'',
    songIndex:null,
    AllSongs:[],
    FavUsers:[],
    isPlay:false
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
            state.isPlay=action.payload.isPlay
            state.songId=action.payload.songId
            state.FavUsers=action.payload.FavUsers

        }
    }
})

export const {updateSong} = songSlice.actions
export default songSlice.reducer