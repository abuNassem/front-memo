import { createSlice} from "@reduxjs/toolkit";
import { Tcartslice } from "../custom/tcartslice";
import getChoosen from "./act/actGetChosen";


const initialState: Tcartslice = {
  productfullinfo: [],
  loading: "pending",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
reducers:{},

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
