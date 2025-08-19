import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const actDecreaseChosen = createAsyncThunk('cart/actDecreasechosen',
    async (id: number) => {
         try {

           const res= await axios.patch(`https://back-last.onrender.com/chosen/${localStorage.getItem('email')}/${id}`,{mode:'dec'})
           
           console.log(res.data.items)
           return res.data.items
        } catch(error){
            console.log('there is error:' +error)
        }
    }
)

export default actDecreaseChosen