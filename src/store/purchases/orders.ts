import { createSlice } from "@reduxjs/toolkit";
import getOrders from "./act/getorders";

const initialState={
    orders:[]
}

const orders=createSlice({
    name:'orders',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getOrders.fulfilled,(state,action)=>{
            state.orders=action.payload
        })
    }
})

export default orders.reducer