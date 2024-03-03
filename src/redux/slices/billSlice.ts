import { createSlice } from '@reduxjs/toolkit'

export const billSlice = createSlice({
  name: 'bill',
  initialState: {
    contact: '',
    addressInfo: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      country: 'United States',
    },
    paymentMethod: 'Credit Card',
    totalPrice: 0
  },
  reducers: {
    setContact: (state, action) => {
      state.contact = action.payload
    },
    setAddressInfo: (state, action) => {
      state.addressInfo = action.payload
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload
    }
  }
})

export const {setContact, setAddressInfo, setPaymentMethod, setTotalPrice } = billSlice.actions
export default billSlice.reducer