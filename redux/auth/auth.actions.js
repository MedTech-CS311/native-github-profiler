import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/login`,
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password, navigate }) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/signup`,
        {
          email,
          password,
        }
      );
      navigate("Login");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
