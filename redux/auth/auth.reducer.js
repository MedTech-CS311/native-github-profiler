import { createSlice } from "@reduxjs/toolkit";
import { login } from "./auth.actions";

const initialState = {
  isLoggedIn: false,
  token: null,
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handling the success case of the action
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.currentUser = action.payload.user;
    });
  },
});

export default authSlice.reducer;
