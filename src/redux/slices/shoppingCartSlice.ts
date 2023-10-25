import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const shoppingCartSlice = createSlice({
  name: 'shopping_cart',
  initialState: {
    productInCart: [{ id: '', quantity: 1 }]
  },
  reducers: {
    putProduct: (state, action) => {
      state.productInCart.push(action.payload)
    }
  }
})

export const {putProduct} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer