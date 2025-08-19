import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getAllFavo = createAsyncThunk('/favority/getallfavo',
    async (email: string | null) => {
        try {
            if (email) {
                const favo = await axios.get(`https://back-last.onrender.com/favorit/${email}`)
                return favo.data
            } else {
                const favo = await axios.get(`https://back-last.onrender.com/favorit/${localStorage.getItem('email')}`)
                return favo.data

            }
        }
        catch (error) {
            console.log(error)
        }
    }
)

export default getAllFavo