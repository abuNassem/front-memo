import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import actGetFavority from "./act/actgetfavority"
import actDeleteFavority from "./act/actdeletefavority"
import getAllFavo from "./act/getallfavo";

type TFavoItem = {
  id: number;
  title: string;
  img: string;
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
    builder.addCase(actGetFavority.fulfilled, (state, action: PayloadAction<TFavoItem[]>) => {
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
