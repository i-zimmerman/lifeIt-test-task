import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import registerSlice from "./slices/registerSlice";
import usersSlice from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    register: registerSlice,
    login: loginSlice,
  },
});
