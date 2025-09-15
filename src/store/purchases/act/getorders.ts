import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getOrders=createAsyncThunk('/purchases/getorders',
   async ()=>{
    try{
         const res=await axios.get(`/api/orders`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        return res.data
    }catch(error){
        if(error.status==401){
            window.location.href='/login'
        }
    }
       
    }
)

export default getOrders