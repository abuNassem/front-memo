import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import actDeleteFavority from "./act/actdeletefavority"
import getAllFavo from "./act/actgetallfavo";
import actPostFavority from "./act/actPostfavority";

type TFavoItem = {
  _id: string;
  title: string;
  img: string;
  owner:string
}

type TFavoState = {
  favorities: TFavoItem[];
}

const initialState: TFavoState = {
  favorities: []
}

const addFavoSlice = createSlice({
  name: 'addtofavo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actPostFavority.fulfilled, (state, action: PayloadAction<TFavoItem[]>) => {
      state.favorities =  action.payload ??[]
    })
    builder.addCase(actDeleteFavority.fulfilled, (state, action: PayloadAction<TFavoItem[]>) => {
      state.favorities =  action.payload ??[]
    })
    builder.addCase(getAllFavo.fulfilled, (state, action: PayloadAction<TFavoItem[]>) => {
      state.favorities = action.payload ??[]
    })
  }
})

export default addFavoSlice.reducer
