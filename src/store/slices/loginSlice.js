import { createSlice } from "@reduxjs/toolkit";
import API from "../../api";
import {
  storeUserLocally,
  isUserStoredLocally,
  removeLocalUserData,
} from "../../localStorage";

const initialState = {
  email: "",
  password: "",
  token: "",
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutRequest(state) {
      state.email = "";
      state.password = "";
      state.token = "";
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logoutRequest } =
  loginSlice.actions;

export const login = (email, password, storeLocally) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await API.login(email, password);

    const user = { ...response.data };
    user.email = email;
    user.password = password;

    if (storeLocally) {
      storeUserLocally(user.email, user.password, user.token);
    }

    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.response.data.error));
  }
};

export const logout = () => async (dispatch) => {
  try {
    if (isUserStoredLocally()) {
      removeLocalUserData();
    }
    dispatch(logoutRequest());
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export default loginSlice.reducer;
