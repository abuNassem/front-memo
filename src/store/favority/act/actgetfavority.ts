import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetFavority = createAsyncThunk(
  'favority/actgetfavority',
  async (id: number | '') => {
    try {
      // لو عايز كل المفضلة
      

        // لو عايز تضيف عنصر جديد
        const productRes = await axios.get(
          `https://back-last.onrender.com/productapi/${id}`
        );
        const user = productRes.data;

        const favoRes = await axios.post(
          `https://back-last.onrender.com/favorit/${localStorage.getItem('email')}`,
          { id: user.id, title: user.title, img: user.img }
        );

        return favoRes.data.favorit; // << لازم تعمل return
      
    } catch (error) {
      throw new Error('error in add/get favority ' + error);
    }
  }
);

export default actGetFavority;
