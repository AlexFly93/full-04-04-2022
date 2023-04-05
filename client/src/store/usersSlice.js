import {  createSlice } from "@reduxjs/toolkit";
import * as httpClient from "../api";
import { decorateAsyncThunk, pendingReducer, rejectedReducer } from './helpers';

export const getAllUsers = decorateAsyncThunk({
  type: "users/getAllUsers",
  thunk: httpClient.getUsers,
});
export const getAllUsersMore = decorateAsyncThunk({
  type: "users/getAllUsersMore",
  thunk: httpClient.getUsers,
});

export const createUser = decorateAsyncThunk({
  type: "users/createUser",
  thunk: httpClient.postUser,
});



const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, pendingReducer);
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      const {payload:{data:{data}}}=action
      state.error = null;
      state.isFetching = false;
      state.users = data
    });
    builder.addCase(getAllUsers.rejected, rejectedReducer);

    builder.addCase(getAllUsersMore.pending, pendingReducer);
    builder.addCase(getAllUsersMore.fulfilled, (state, action) => {
      const {payload:{data:{data}}}=action
      state.error = null;
      state.isFetching = false;
      state.users.push(...data);
    });
    builder.addCase(getAllUsersMore.rejected, rejectedReducer);

    //3 створення
    builder.addCase(createUser.pending, pendingReducer);
    builder.addCase(createUser.fulfilled, (state, action) => {
      const {payload:{data:{data}}}=action
      state.error = null;
      state.isFetching = false;
      state.users.push(data);
    });
    builder.addCase(createUser.rejected, rejectedReducer);
  },
});

// const { loadUsers } = usersSlice.actions;
export default usersSlice.reducer;
