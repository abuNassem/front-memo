import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getAllFavo = createAsyncThunk('/favority/getallfavo',
    async () => {
        try {
                const favo = await axios.get(`/api/favorit`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
                return favo.data

            }
      
        catch (error) {
           if(error.response && error.response.status===401){
        window.location.href='/login'
      }
        }
    }
)

export default getAllFavo