import {configureStore} from '@reduxjs/toolkit'
import shoppingCartSlice from './slices/shoppingCartSlice'

export const store = configureStore({reducer: {
    shop: shoppingCartSlice
}})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
