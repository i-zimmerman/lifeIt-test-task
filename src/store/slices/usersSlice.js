import { createSlice } from "@reduxjs/toolkit";
import API from "../../api";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  total: 0,
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
      state.data = [...state.data, ...action.payload.data];
      state.isLoading = false;
      state.error = null;
      state.total = action.payload.total_pages;
    },
    userSuccess(state, action) {
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
    userUpdate(state, action) {
      state.isLoading = false;
      state.error = null;
      const newState = [...state.data];
      const currentUserIdx = newState.findIndex(
        (user) => user.id === action.payload.id
      );
      const currentUser = newState[currentUserIdx];

      newState[currentUserIdx] = {
        ...currentUser,
        ...action.payload,
      };

      state.data = newState;
    },
  },
});

export const {
  usersRequest,
  userSuccess,
  usersSuccess,
  usersFailure,
  userDelete,
  userUpdate,
} = usersSlice.actions;

export const getUsers = (page) => async (dispatch) => {
  try {
    dispatch(usersRequest());
    const usersResponse = await API.getUsers(page);
    dispatch(usersSuccess(usersResponse.data));
  } catch (error) {
    dispatch(usersFailure(error.message));
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

export const updateUser = (userId, userData) => async (dispatch) => {
  try {
    dispatch(usersRequest());
    const usersResponse = await API.updateUser(userId, userData);

    const updatedUser = usersResponse.data;
    updatedUser.first_name = updatedUser.name;
    updatedUser.id = userId;

    dispatch(userUpdate(updatedUser));
  } catch (error) {
    dispatch(usersFailure(error.message));
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    dispatch(usersRequest());
    const usersResponse = await API.createUser(userData);

    const newUser = usersResponse.data;
    newUser.first_name = newUser.name;

    dispatch(userSuccess([newUser]));
  } catch (error) {
    dispatch(usersFailure(error.message));
  }
};

export default usersSlice.reducer;
