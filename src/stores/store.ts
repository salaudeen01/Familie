import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./slice/darkModeSlice";
import colorSchemeReducer from "./slice/colorSchemeSlice";
import sideMenuReducer from "./slice/sideMenuSlice";
import simpleMenuReducer from "./slice/./simpleMenuSlice";
import topMenuReducer from "./slice/./topMenuSlice";
import auth from './slice/auth'
import role from './slice/role'
import loading from "./slice/loading";
import permission from "./slice/permission";
import admin from "./slice/admin";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    simpleMenu: simpleMenuReducer,
    topMenu: topMenuReducer,
    auth,
    admin,
    role,
    permission,
    loading
    // allRoles: roleSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
