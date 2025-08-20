import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tcartslice } from "../custom/tcartslice";
import { Tproduct } from "../custom/tproduct";
import getChoosen from "./act/actGetChosen";


const initialState: Tcartslice = {
  productfullinfo: [],
  loading: "pending",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action: PayloadAction<Tproduct>) => {
      const item = action.payload;

      if (item && state.productfullinfo) {
        const index = state.productfullinfo.findIndex(
          (ele) => ele.id === item.id
        );

        if (index !== -1) {
          state.productfullinfo[index].isInCart = true;
          state.productfullinfo[index].quantity = 1;
        }
      } else {
        console.log("this item not found");
      }
    },

    deletefromcart: (state, action: PayloadAction<Tproduct>) => {
      const item = action.payload;

      if (item) {
        const index = state.productfullinfo.findIndex(
          (ele) => ele.id === item.id
        );

        if (index !== -1) {
          state.productfullinfo[index].isInCart = false;
          state.productfullinfo[index].quantity = 0;
        }
      } else {
        console.log("this item not found");
      }
    },

    deleteall: (state) => {
      state.productfullinfo.forEach((obj) => {
        obj.isInCart = false;
        obj.quantity = 0;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getChoosen.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(getChoosen.fulfilled, (state, action) => {
      if (action.payload) {
        state.productfullinfo = action.payload;
        state.loading = "succeeded";
      }
    });

   
  },
});

export default cartSlice.reducer;
