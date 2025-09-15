import { createSlice } from "@reduxjs/toolkit";
import { TGetPrice } from "../custom/tgetprice";
import actIncreaseChosen from "./act/actInreasechosen";
import getChoosen from "./act/actGetChosen";
import actDecreaseChosen from "./act/actDecreasechosen";
import actDeleteFromChosen from "./act/actDeletefromchosen";
import deleteAll from "./act/actDeleteAllChosen";

// تعريف نوع المنتج المستعمل هنا
export type TProductCart = {
  _id: string;
  owner:string;
  quantity: number;
  title: string;
  price: string;
  discount?: number;
};

const initialState: TGetPrice = {
  record: { listPrice: 0, products: [] },
  error: "",
};

const getPriceSlice = createSlice({
  name: "getPrice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const calculate = (data: TProductCart[]) => {
      return data.map(ele => ({
        _id: ele._id,
        quantity: ele.quantity,
        title: ele.title,
        price: ele.price,
        discount: ele.discount ?? 0,
      }));
    };

    const calcPrice = (data: TProductCart[]) => {
      const prices = data.map(ele => ele.quantity * (Number(ele.price) - (ele.discount ?? 0)));
      return prices.reduce((total, current) => total + current, 0);
    };

    // نفس المنطق يتكرر → دمجناه
    builder
      .addCase(getChoosen.fulfilled, (state, action) => {
        const data = action.payload as TProductCart[] | undefined;
        if (data) {
          state.record.products = calculate(data);
          state.record.listPrice = calcPrice(data);
        }
      })
      .addCase(actIncreaseChosen.fulfilled, (state, action) => {
        const data = action.payload as TProductCart[] | undefined;
        if (data) {
          state.record.products = calculate(data);
          state.record.listPrice = calcPrice(data);
        }
      })
      .addCase(actDecreaseChosen.fulfilled, (state, action) => {
        const data = action.payload as TProductCart[] | undefined;
        if (data) {
          state.record.products = calculate(data);
          state.record.listPrice = calcPrice(data);
        }
      })
      .addCase(actDeleteFromChosen.fulfilled, (state, action) => {
        const data = action.payload as TProductCart[] | undefined;
        if (data) {
          state.record.products = calculate(data);
          state.record.listPrice = calcPrice(data);
        }
      })
      .addCase(deleteAll.fulfilled, (state, action) => {
        const data = action.payload as TProductCart[] | undefined;
        if (data) {
          state.record.products = calculate(data);
          state.record.listPrice = calcPrice(data);
        }
      });
  },
});

export default getPriceSlice.reducer;
