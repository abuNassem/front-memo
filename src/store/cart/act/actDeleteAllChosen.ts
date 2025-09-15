import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const deleteAll = createAsyncThunk(
  "cart/actDeleteAllChosen",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `/api/chosen/`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
      );

      return res.data.items;
    } catch (err) {
       if(err.response.status==401){
        window.location.href='/login'
      }
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default deleteAll;
