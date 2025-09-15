import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actDeleteFavority = createAsyncThunk(
  'favority/actdeletefavority',
  async (id:string) => {
    try {
      
      const res = await axios.delete(
        `/api/favorit/${id}`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
      );
      return res.data;
    } catch (error) {
      if(error.response && error.response.status===401){
        window.location.href='/login'
      }
    }
  }
);



export default actDeleteFavority