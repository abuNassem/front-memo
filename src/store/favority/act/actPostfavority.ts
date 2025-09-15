import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actPostFavority = createAsyncThunk(
  'favority/actgetfavority',
  async ({title,img,owner}:{title:string,img:string,owner:string}) => {
    try {       
        const favoRes = await axios.post(
          `/api/favorit`,
          {title,img,owner}
          ,
          {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        );

        return favoRes.data.favorit; 
    
    } catch (error) {
      if(error.response && error.response.status===401){
        window.location.href='/login'
      }
    }
  }
);

export default actPostFavority;
