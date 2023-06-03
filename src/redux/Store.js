import { configureStore } from "@reduxjs/toolkit";
import songReducer from './SongSlice'
import artistReducer from './ArtistSLice'
import userReducer from './userSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, songReducer)
const persistedUserReducer = persistReducer(persistConfig, userReducer)

export const Store = configureStore({
    reducer: {
        song: persistedReducer,
        artist:artistReducer,
        user:persistedUserReducer
        
    }
})

export const persistor = persistStore(Store)