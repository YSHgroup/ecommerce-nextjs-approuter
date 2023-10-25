import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const shoppingCartSlice = createSlice({
  name: 'shopping_cart',
  initialState: {
    quantity: 1
  },
  reducers: {
    putProduct: (state, action) => {
      state.quantity = action.payload
    }
  }
})

export const {putProduct} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer