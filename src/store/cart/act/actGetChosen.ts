import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Tproduct } from "../../custom/tproduct";



const getChoosen = createAsyncThunk(
  "cart/actGetChosen",
  async (id:string |'',thunkAPI) => {
    const {rejectWithValue}=thunkAPI
    try {

      if (id) {
        const neededToAdd = await axios.get<Tproduct>(
          `/api/productapi/${id}`
        );

        const res = await axios.post<Tproduct[]>(
          `/api/chosen/${id}`,
          neededToAdd.data,
          {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        );

        return res.data;
      } else {
        const res = await axios.get<Tproduct[]>(
          `/api/chosen`,
          {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        );

        return res.data
      }
    } catch (err) {
      
      const error = err as AxiosError;
     
      return rejectWithValue(error.response?.data as string || error.message);
    }
  }
);

export default getChoosen;
