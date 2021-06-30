import { createSlice } from "@reduxjs/toolkit";
import API from "../../api";

const initialState = {
  email: "",
  password: "",
  token: "",
  isLoading: false,
  error: null,
  message: "",
  id: 0,
};

const registerSlice = createSlice({
  initialState,
  name: "register",
  reducers: {
    registerRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.id = action.payload.id;
    },
    registerFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { registerRequest, registerSuccess, registerFailure } =
  registerSlice.actions;

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const response = await API.register(email, password);

    const newUser = { ...response.data };
    newUser.email = email;
    newUser.password = password;

    dispatch(registerSuccess(newUser));
  } catch (error) {
    dispatch(registerFailure(error.response.data.error));
  }
};

export default registerSlice.reducer;
