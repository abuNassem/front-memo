import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getOrders=createAsyncThunk('/purchases/getorders',
   async ()=>{
        const res=await axios.get(`https://back-last.onrender.com/orders/${localStorage.getItem('email')}`)
        return res.data
    }
)

export default getOrders