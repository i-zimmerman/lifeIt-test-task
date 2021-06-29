import { createSlice } from "@reduxjs/toolkit";
import API from "../api";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    usersRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    usersSuccess(state, action) {
      state.data = [...state.data, ...action.payload];
      state.isLoading = false;
      state.error = null;
    },
    usersFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    userDelete(state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
  },
});

export const { usersRequest, usersSuccess, usersFailure, userDelete } =
  usersSlice.actions;

export const getUsers = (page) => async (dispatch) => {
  try {
    dispatch(usersRequest());
    const usersResponse = await API.getUsers(page);
    dispatch(usersSuccess(usersResponse.data.data));
  } catch (error) {
    dispatch(usersFailure(error.response.data.error));
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    dispatch(usersRequest());
    const usersResponse = await API.deleteUser(userId);
    if (usersResponse.status === 204) {
      dispatch(userDelete(userId));
    } else {
      throw new Error("There was an error deleting user");
    }
  } catch (error) {
    dispatch(usersFailure(error.message));
  }
};

export default usersSlice.reducer;
