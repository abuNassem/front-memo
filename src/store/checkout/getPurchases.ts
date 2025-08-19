import { createSlice } from "@reduxjs/toolkit";
import { Tproduct } from "../custom/tproduct";

const initialState={
    name:<string>'',
    address:<string>'',
    phone:<number|null>null,
    cartItems:<Tproduct[]>[]
}

const getPurchases=createSlice({
    name:'Purchases',
    initialState,
    reducers:{
        setGetPurchases:(state,action)=>{
            if(action.payload){
                return action.payload
            }
        }
    }
})
export const {setGetPurchases}=getPurchases.actions
export default getPurchases.reducer