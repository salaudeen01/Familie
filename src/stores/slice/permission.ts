import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    permissions: [],
    user: null,
  }

export const permission = createSlice({
    name: 'permission',
    initialState,
    reducers: {
      setPermissions: (state, action) => {   
        state.permissions = action.payload;
      },
      setPermission: (state, action) => {
        state.permissions = action.payload;
      },
    },
  })

  
// Action creators are generated for each case reducer function
export const { setPermissions, setPermission} = permission.actions

export default permission.reducer