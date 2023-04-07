import {  createSlice } from "@reduxjs/toolkit";
import * as httpClient from "../api";
import { decorateAsyncThunk, pendingReducer, rejectedReducer } from './helpers';

export const createGroup = decorateAsyncThunk({
  type: "groups/createGroup",
  thunk: httpClient.postGroup,
});



const groupsSlice = createSlice({
  name: "groups",
  initialState: {
    users: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    //3 створення
    builder.addCase(createGroup.pending, pendingReducer);
    builder.addCase(createGroup.fulfilled, (state, action) => {
      const {
        payload: {
          data: { data },
        },
      } = action;
      state.error = null;
      state.isFetching = false;
      state.groups.push(data);
    });
    builder.addCase(createGroup.rejected, rejectedReducer);
  },
});

// const { loadUsers } = usersSlice.actions;
export default groupsSlice.reducer;
