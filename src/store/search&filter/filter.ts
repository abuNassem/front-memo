import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tproduct } from "../custom/tproduct";

// الحالة الأولية: مصفوفة منتجات مفلترة
const initialState: Tproduct[] = [];

const Filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // الأكشن لتحديث المنتجات المفلترة
    setFilteredProducts: (state, action: PayloadAction<Tproduct[]>) => {
      return action.payload; // نستبدل المصفوفة بالكامل بالبيانات الجديدة
    },
  },
});

export const { setFilteredProducts } = Filter.actions;
export default Filter.reducer;
