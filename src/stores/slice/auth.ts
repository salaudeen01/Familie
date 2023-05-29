import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: localStorage.getItem('accessToken') || null,
    isAuthenticated: false,
    user: null,
    loading: false,
  }

export const auth = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      setAuth: (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
      },
      setUser: (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true;
      },
      setLoading: (state) => {
          state.loading = true;
      },
      disableLoading: (state) => {
          state.loading = false;
      }
    },
  })

  
// Action creators are generated for each case reducer function
export const { setAuth, setUser, setLoading, disableLoading } = auth.actions

export default auth.reducer