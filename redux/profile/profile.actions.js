import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_API_URL, GITHUB_TOKEN } from "@env";

export const fetchUserData = createAsyncThunk(
  "profile/fetchUserData",
  async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/user`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
