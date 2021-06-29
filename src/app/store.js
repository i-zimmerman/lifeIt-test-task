import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "./services/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
