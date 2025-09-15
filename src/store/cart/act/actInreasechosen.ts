import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Tproduct } from "../../custom/tproduct";

type ChosenResponse = {
  items: Tproduct[];
};

const actIncreaseChosen = createAsyncThunk<
  Tproduct[],        // return type لما ينجح
  string,            // الباراميتر id
  { rejectValue: string } // نوع الخطأ
>(
  "cart/actIncreasechosen",
  async (id, { rejectWithValue }) => {
    try {
      
      const res = await axios.patch<ChosenResponse>(
        `/api/chosen/${id}`,
        { mode: "inc" },
                        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}

      );

      return res.data.items;
    } catch (err) {
       if(err.response.status==401){
        window.location.href='/login'
      }
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data as string || error.message);
    }
  }
);

export default actIncreaseChosen;
