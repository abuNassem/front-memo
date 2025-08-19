import { createSlice } from "@reduxjs/toolkit";
import { TGetPrice } from "../custom/tgetprice";
import actIncreaseChosen from "./act/actInreasechosen";
import getChoosen from "./act/actGetChosen";
import actDecreaseChosen from "./act/actDecreasechosen";
import actDeleteFromChosen from "./act/actDeletefromchosen";
import deleteAll from "./act/actDeleteAllChosen";
import { Tproduct } from "../custom/tproduct";

const initialState: TGetPrice = {
    record: { listPrice: 0, products: [] },
    error: '',
}

const getPriceSlice = createSlice({
    name: 'getPrice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // when add  product
        builder.addCase(getChoosen.fulfilled, (state, action) => {
            const data = action.payload

            if (data) {
                // save the info products
                state.record.products = data.map(ele => {
                    return { id:ele.id,quantity: ele.quantity, title: ele.title, price: ele.price,discount:ele.discount }
                })

                // the list price
                const arryOfprices = data.map(ele => {
                     return ele.quantity * Number(ele.price-ele.discount)
                })
                state.record.listPrice = arryOfprices.reduce((total, current) => total + current, 0);

            } 
        })


        // when increase quantity
        builder.addCase(actIncreaseChosen.fulfilled, (state, action) => {
            const data = action.payload

            if (data) {
                // save the info products
                state.record.products = data.map(ele => {
                    return { id:ele.id,quantity: ele.quantity, title: ele.title, price: ele.price }
                })
                // the list price

                const arryOfprices = data.map(ele => {
                    return ele.quantity * Number(ele.price-ele.discount)
                })

                state.record.listPrice = arryOfprices.reduce((total, current) => total + current, 0);

            } else {
                console.log('the  pay load undifine')
            }
        })

         // when decrease quantity
        builder.addCase(actDecreaseChosen.fulfilled, (state, action) => {
            const data = action.payload

            if (data) {
                // save the info products
                state.record.products = data.map(ele => {
                    return { id:ele.id,quantity: ele.quantity, title: ele.title, price: ele.price }
                })
                // the list price

                const arryOfprices = data.map(ele => {
                    return ele.quantity * Number(ele.price-ele.discount)
                })

                state.record.listPrice = arryOfprices.reduce((total, current) => total + current, 0);

            } else {
                console.log('the  pay load undifine')
            }
        })

           // when delete product
        builder.addCase(actDeleteFromChosen.fulfilled, (state, action) => {
            const data = action.payload

            if (data) {
                // save the info products
                state.record.products = data.map(ele => {
                    return { id:ele.id,quantity: ele.quantity, title: ele.title, price: ele.price }
                })
                // the list price

                const arryOfprices = data.map(ele => {
                    return ele.quantity * Number(ele.price-ele.discount)
                })

                state.record.listPrice = arryOfprices.reduce((total, current) => total + current, 0);

            } else {
                console.log('the  pay load undifine')
            }
        })
        
         // when delete All products 
        builder.addCase(deleteAll.fulfilled, (state, action) => {
            const data = action.payload

            if (data) {
                // save the info products
                state.record.products = data.map(ele => {
                    return { id:ele.id,quantity: ele.quantity, title: ele.title, price: ele.price }
                })
                // the list price

                const arryOfprices = data.map(ele => {
                    return ele.quantity * Number(ele.price-ele.discount)
                })

                state.record.listPrice = arryOfprices.reduce((total, current) => total + current, 0);

            } else {
                console.log('the  pay load undifine')
            }
        })
        

    }
})
export default getPriceSlice.reducer