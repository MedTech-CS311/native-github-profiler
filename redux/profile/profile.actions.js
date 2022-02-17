import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "profile/fetchUserData",
  async () => {
    try {
      const response = await axios.get(`https://api.github.com/user`, {
        headers: {
          Authorization: "token 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",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
