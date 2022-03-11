import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./auth.actions";

const initialState = {
  isLoggedIn: false,
  token: null,
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.currentUser = {};
    },
  },
  extraReducers: (builder) => {
    // Handling the success case of the action
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.currentUser = action.payload.user;
      })

      .addCase(signup.fulfilled, (state, action) => {});
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
