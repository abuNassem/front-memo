import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Tproduct } from "../../custom/tproduct";

type ChosenResponse = {
  items: Tproduct[];
};

const getChoosen = createAsyncThunk< // Return type
  Tproduct[],                         // عند النجاح يرجّع array من المنتجات
  number | "",                        // الباراميتر اللي بياخده
  { rejectValue: string }             // نوع الخطأ
>(
  "cart/actGetChosen",
  async (id, { rejectWithValue }) => {
    try {
      const email = localStorage.getItem("email");
      if (!email) {
        return rejectWithValue("login first");
      }

      if (id) {
        // لو في id → جب المنتج وأضفه
        const neededToAdd = await axios.get<Tproduct>(
          `https://back-last.onrender.com/productapi/${id}`
        );

        const res = await axios.post<ChosenResponse>(
          `https://back-last.onrender.com/chosen/${email}`,
          neededToAdd.data
        );

        return res.data.items;
      } else {
        // لو id === '' → رجّع كل العناصر المختارة
        const res = await axios.get<ChosenResponse>(
          `https://back-last.onrender.com/chosen/${email}`
        );

        return res.data.items;
      }
    } catch (err) {
      const error = err as AxiosError;
      console.error("Error in getChoosen:", error.message);
      return rejectWithValue(error.response?.data as string || error.message);
    }
  }
);

export default getChoosen;
