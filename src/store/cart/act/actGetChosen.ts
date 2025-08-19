import { createAsyncThunk } from "@reduxjs/toolkit"
import { Tproduct } from "../../custom/tproduct"
import axios from "axios"


const getChoosen=createAsyncThunk('cart/actGetChosen',
   async(id:number |'',thunkAPI)=>{
    const {rejectWithValue}=thunkAPI

    try{
      if(id){
         
        const neededToAdd= await axios.get<Tproduct>(`https://back-last.onrender.com/productapi/${id}`)
         if(localStorage.getItem('email')){
             const res=await axios.post(`https://back-last.onrender.com/chosen/${localStorage.getItem('email')}`,neededToAdd.data)
             return res.data.items

         }else{
            window.location.pathname='/login'
         }
     
      }else if(id===''){        

      const res=await axios.get(`https://back-last.onrender.com/chosen/${localStorage.getItem('email')}`)

      return res.data.items
      }
       
    }
    catch(error){
        rejectWithValue(error)}
   }
)

export default getChoosen