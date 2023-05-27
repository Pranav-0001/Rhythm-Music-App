import { configureStore } from "@reduxjs/toolkit";
import songReducer from './SongSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, songReducer)

export const Store = configureStore({
    reducer: {
        song: persistedReducer,
        
    }
})

export const persistor = persistStore(Store)