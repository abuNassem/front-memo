import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosError } from "axios";
import { Tproduct } from "../../custom/tproduct";



function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true;
}


const actGetPtoducts = createAsyncThunk(
  "products/actGetProducts",
  async (prefix:string,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      if(prefix===''){
        const response= await axios.get<Tproduct[]>(`https://back-last.onrender.com/productapi`)
              return response.data;

      }else{
             const response = await axios.get<Tproduct[]>(`https://back-last.onrender.com/productapi?cat_prefix=${prefix}`);

      return response.data;

      }
    
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue("axios error"+ error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetPtoducts;
