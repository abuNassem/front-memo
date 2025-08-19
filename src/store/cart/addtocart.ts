import { createSlice } from "@reduxjs/toolkit";
import { Tcartslice } from "../custom/tcartslice";
import getChoosen from "./act/actGetChosen";

const intialState:Tcartslice={
    productfullinfo:[],
    loading:'succeeded'
}
const cartSlice=createSlice({
    name:'cart',
    initialState:intialState,
    reducers:{
        addtocart:(state,action)=>{
            const items=action.payload

            if(items && state.productfullinfo){
                const index=state.productfullinfo.findIndex(ele=>ele.id==items.id)

                if(index!=-1){
                    state.productfullinfo[index].isInCart=true
                                        state.productfullinfo[index].quantity=1
                }
            }else{
                console.log('this item not found')
            }
        },
        
        deletefromcart:(state,action)=>{
            const items=action.payload

            if(items){
                const index=state.productfullinfo.findIndex(ele=>ele.id==items.id)

                if(index!=-1){
                    state.productfullinfo[index].isInCart=false
                                        state.productfullinfo[index].quantity=0
                }
            }else{
                console.log('this item not found')
            }
        },
         deleteall:(state,action)=>{

           state.productfullinfo.forEach(obj => {
  obj.isInCart = false;
  obj.quantity = 0;
});

        }
    },

    extraReducers:(builder)=>{
        builder.addCase(getChoosen.fulfilled,(state,action)=>{
                        console.log(action.payload)

            state.productfullinfo=action.payload
            state.loading='succeeded' 
        })
        builder.addCase(getChoosen.pending,(state )=>{
            state.loading='pending' 
        })
       
        
    }
})
export default cartSlice.reducer