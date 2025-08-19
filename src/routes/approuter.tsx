import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Aboutus from "../pages/aboutus"
import Category from "../pages/category"
import Home from "../pages/home"
import Product from "../pages/product"
import Layout from "../template/layout"
import Login from "../pages/login"
import Chosen from "../pages/chosen"
import AboutItem from "../pages/aboutItems"
import SignIn from "../pages/signup"
import ResultSearch from "../pages/resultsearch"
import ResultFiltration from "../pages/resultFiltrationPage"
import CheckoutPage from "../pages/checkout"
import Favority from "../pages/favority"
import Purchases from "../pages/purchases"

const Approuter = () => {
const router =createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    index:true,
    element:<Home/>
  },
  {
    path:'category',
    element:<Category/>
  },
   {
    path:'product',
    element:<Product/>
  },
  {
    path:'product/:prefix',
    element:<Product/>
  },
   {
    path:'about_us',
    element:<Aboutus/>
  },
  {
    path:'login',
    element:<Login/>
  },
   {
    path:'signin',
    element:<SignIn/>
  },
  {
    path:'chosen',
    element:<Chosen/>
  },
   {
    path:'aboutitem',
    element:<AboutItem/>
  },
   {
    path:'resultsearch',
    element:<ResultSearch/>
  },
  {
    path:'filtration',
    element:<ResultFiltration/>
  },
   {
    path:'checkout',
    element:<CheckoutPage/>
  },
   {
    path:'favority',
    element:<Favority/>
  },
   {
    path:'purchases',
    element:<Purchases/>
  }
]
}])
  return (
     <RouterProvider router={router}/>
  )
}

export default Approuter