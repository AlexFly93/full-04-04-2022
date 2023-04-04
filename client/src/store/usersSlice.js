import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (params = {}, thunkAPI) => {
    try {
      // const { dispatch } = thunkAPI;
      const data = await fetch("https://randomuser.me/api/?results=3")
        .then((res) => res.json());
      return data.results
      // dispatch(loadUsers(data.results));
    } catch (error) {
      const { rejectWithValue } = thunkAPI
      return rejectWithValue(error)
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers:(builder) =>{
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.isFetching = true
    })
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isFetching = false
      state.users = action.payload
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload
    });
  }
});
// const { loadUsers } = usersSlice.actions;

export default usersSlice.reducer;
