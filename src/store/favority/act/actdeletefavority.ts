import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actDeleteFavority=createAsyncThunk('favority/actdeletefavority',async(id:number)=>{
    try{
      const res= await axios.delete(`https://back-last.onrender.com/favorit/${localStorage.getItem('email')}/${id}`)
     return res.data
        }catch(error){
        throw new Error('error in add to favo'+error)
    }
})


export default actDeleteFavority