import { configureStore } from '@reduxjs/toolkit'
import categories from './categories/categorySlice'
import getPrice from './cart/getprice'
import product from './products/productSlice'
import searchItem from './search&filter/search'
import cart from './cart/addtocart'
import filtered from './search&filter/filter'
import purchases from './checkout/getPurchases'
import favority from './favority/addtofavoslice'
import orders from './purchases/orders'
export const store = configureStore({
  reducer: {categories,product,cart,getPrice,searchItem,filtered,purchases,favority,orders}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store