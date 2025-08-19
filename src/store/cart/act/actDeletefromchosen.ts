import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const actDeleteFromChosen = createAsyncThunk('cart/actDeletefromchosen',
  (async (id: number) => {
    try {
      const res= await axios.delete(`https://back-last.onrender.com/chosen/${localStorage.getItem('email')}/${id}`);
      return res.data.items
    } catch (error) {
      console.log('there is  error:' + error)
    }
  }))

export default actDeleteFromChosen