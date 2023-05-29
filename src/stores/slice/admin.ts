import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    admins: [],
    user: null,
  }

export const admin = createSlice({
    name: 'admin',
    initialState,
    reducers: {
      setAdmins: (state, action) => {   
        state.admins = action.payload;
      },
      setAdmin: (state, action) => {
        state.admins = action.payload;
      },
    },
  })

  
// Action creators are generated for each case reducer function
export const { setAdmins, setAdmin} = admin.actions

export default admin.reducer