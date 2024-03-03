import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


export const shoppingCartSlice = createSlice({
  name: 'shopping_cart',
  initialState: {
    productsInCart: [{
      id: NaN, quantity: 1, info: {
        'id': NaN,
        'title': '',
        'description': '',
        'price': 0,
        'discountPercentage': 0,
        'rating': 0,
        'stock': 0,
        'brand': '',
        'category': '',
        'thumbnail': '',
        'images': ['']
      }
    }],
  },
  reducers: {
    putProduct: (state, action) => {
      const updatedProduct = state.productsInCart.find(({ id }, i) => id === action.payload.id);
      if (updatedProduct) {
        updatedProduct.quantity = action.payload.quantity;
      } else {
        state.productsInCart.push(action.payload);
      }
    },
    delProductInCart: (state, action) => {
      state.productsInCart.splice(state.productsInCart.indexOf(action.payload), 1)
    }
  }
})

export const { putProduct, delProductInCart } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer