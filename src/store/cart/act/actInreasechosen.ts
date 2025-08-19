import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const actIncreaseChosen = createAsyncThunk('cart/actIncreasechosen',
    async (id: number) => {
        try {

           const res= await axios.patch(`https://back-last.onrender.com/chosen/${localStorage.getItem('email')}/${id}`,{mode:'inc'})
           
           console.log(res.data.items)
           return res.data.items
        } catch(error){
            console.log('there is error:' +error)
        }
    })

    export default actIncreaseChosen