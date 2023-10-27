import {configureStore} from '@reduxjs/toolkit'
import shoppingCartSlice from './slices/shoppingCartSlice'
import authSlice from './slices/authSlice'

export const store = configureStore({reducer: {
    shop: shoppingCartSlice,
    auth: authSlice
}})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
