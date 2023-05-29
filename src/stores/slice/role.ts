import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    roles: [],
    user: null,
  }

export const role = createSlice({
    name: 'role',
    initialState,
    reducers: {
      setRoles: (state, action) => {   
        state.roles = action.payload;
      },
      setRole: (state, action) => {
        state.roles = action.payload;
      },
    },
  })

  
// Action creators are generated for each case reducer function
export const { setRoles, setRole} = role.actions

export default role.reducer