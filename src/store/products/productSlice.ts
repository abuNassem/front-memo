import { createSlice } from "@reduxjs/toolkit";
import actGetPtoducts from "./act/actGetproducts";
import { Tlaoding } from "../custom/loading_categ";

const initialState:Tlaoding={
    record:[],
    loading:'idle',
    error:null
}
const productSlice= createSlice({
    name:"products",
    initialState,
    reducers:{
       cleanUp:(state)=>{
        state.record=[]
      }
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetPtoducts.pending,(state)=>{
            state.loading="pending"
            state.error=null
        })
         builder.addCase(actGetPtoducts.fulfilled,(state,action)=>{
            state.loading="succeeded"
            state.record=action.payload
        })
        builder.addCase(actGetPtoducts.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    }
})
export const {cleanUp}=productSlice.actions
export default productSlice.reducer
