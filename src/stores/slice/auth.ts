import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: localStorage.getItem('@serial') || null,
    isAuthenticated: false,
    user: null,
  }

export const auth = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      setAuth: (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.access_token;
      },
      setUser: (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true;
      },
    },
  })

  
// Action creators are generated for each case reducer function
export const { setAuth, setUser } = auth.actions

export default auth.reducer