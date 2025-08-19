import { createSlice } from "@reduxjs/toolkit";
import { Tsearch } from "../custom/tsearch";

const initialState:Tsearch={
    record:[]
}

const SearchItem=createSlice({
    name:'SearchItem',
    initialState,
    reducers:{
        finding:(state,action)=>{
            state.record=action.payload?action.payload:[]       
        }
    }
})
 export const {finding}=SearchItem.actions
export default SearchItem.reducer