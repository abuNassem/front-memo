import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const actDeleteFromChosen = createAsyncThunk(
  "cart/actDeletefromchosen",
  async (id:string, { rejectWithValue }) => {
    try {
      const email = localStorage.getItem("email");
      if (!email) {
        return rejectWithValue("Email not found in localStorage");
      }

      const res = await axios.delete(
        `/api/chosen/${id}`,
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

export default actDeleteFromChosen;
