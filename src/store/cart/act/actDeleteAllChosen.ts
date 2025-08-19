import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const deleteAll = createAsyncThunk('cart/actDeleteAllChosen', async () => {
  try {
  const res= await axios.delete(`https://back-last.onrender.com/chosen/${localStorage.getItem('email')}`)
   
   return res.data.items
  } catch (error) {
    console.log('there is error:' + error)
  }
})
export default deleteAll