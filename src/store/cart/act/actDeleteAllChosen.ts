import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const deleteAll = createAsyncThunk(
  "cart/actDeleteAllChosen",
  async (_, { rejectWithValue }) => {
    try {
      const email = localStorage.getItem("email");
      if (!email) {
        return rejectWithValue("Email not found in localStorage");
      }

      const res = await axios.delete(
        `https://back-last.onrender.com/chosen/${email}`
      );

      return res.data.items;
    } catch (err) {
      const error = err as AxiosError;
      console.error("There is error:", error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default deleteAll;
