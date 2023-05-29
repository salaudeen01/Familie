import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  role: any
}

const initialState: CounterState = {
  role: [],
}

export const roleSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {    
    setGetRole: (state, action) => {   
        state.role = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { setGetRole } = roleSlice.actions

export default roleSlice.reducer