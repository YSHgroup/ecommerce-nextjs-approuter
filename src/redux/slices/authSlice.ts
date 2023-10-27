import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/functions/useLocalStorage";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    authInfo: getLocalStorage('authToken') || '',
    isAuth: !!getLocalStorage('authToken')
  },
  reducers: {
    setAuth: (state, action) => {
      setLocalStorage('authToken', action.payload)
    },
    delAuth: (state) => {
      removeLocalStorage('authToken')
    }
  }
})

export const {setAuth, delAuth} = authSlice.actions
export default authSlice.reducer