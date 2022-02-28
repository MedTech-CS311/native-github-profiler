import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_API_URL, GITHUB_TOKEN } from "@env";

export const fetchUserRepos = createAsyncThunk(
  "repos/fetchUserRepos",
  async () => {
    try {
      const response = await axios.get(`https://api.github.com/user/repos`, {
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
