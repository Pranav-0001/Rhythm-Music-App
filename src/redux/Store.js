import { configureStore } from "@reduxjs/toolkit";
import songReducer from './SongSlice'
import artistReducer from './ArtistSLice'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, songReducer)
// const persistedArtistReducer = persistReducer(persistConfig, artistReducer)

export const Store = configureStore({
    reducer: {
        song: persistedReducer,
        artist:artistReducer
        
    }
})

export const persistor = persistStore(Store)