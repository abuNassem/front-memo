import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Tproduct } from "../../custom/tproduct";

type ChosenResponse = {
  items: Tproduct[];
};

const actIncreaseChosen = createAsyncThunk<
  Tproduct[],        // return type لما ينجح
  number,            // الباراميتر id
  { rejectValue: string } // نوع الخطأ
>(
  "cart/actIncreasechosen",
  async (id, { rejectWithValue }) => {
    try {
      const email = localStorage.getItem("email");
      if (!email) {
        return rejectWithValue("Email not found in localStorage");
      }

      const res = await axios.patch<ChosenResponse>(
        `https://back-last.onrender.com/chosen/${email}/${id}`,
        { mode: "inc" }
      );

      return res.data.items;
    } catch (err) {
      const error = err as AxiosError;
      console.error("Error in actIncreaseChosen:", error.message);
      return rejectWithValue(error.response?.data as string || error.message);
    }
  }
);

export default actIncreaseChosen;
