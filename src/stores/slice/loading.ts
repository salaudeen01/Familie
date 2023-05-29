import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

export const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state) => {
        state.loading = true;
    },
    disableLoading: (state) => {
        state.loading = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, disableLoading } = loading.actions

export default loading.reducer