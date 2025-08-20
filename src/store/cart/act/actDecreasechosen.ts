import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const actDecreaseChosen = createAsyncThunk(
  "cart/actDecreasechosen",
  async (id: number, { rejectWithValue }) => {
    try {
      const email = localStorage.getItem("email");
      if (!email) {
        return rejectWithValue("Email not found in localStorage");
      }

      const res = await axios.patch(
        `https://back-last.onrender.com/chosen/${email}/${id}`,
        { mode: "dec" }
      );

      console.log(res.data.items);
      return res.data.items;
    } catch (err) {
      const error = err as AxiosError;
      console.error("There is error:", error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default actDecreaseChosen;
