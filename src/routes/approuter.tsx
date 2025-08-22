import { lazy } from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
const Aboutus = lazy(() => import("../pages/aboutus"))
const Category = lazy(() => import("../pages/category"))
const Home = lazy(() => import("../pages/home"))
const Product = lazy(() => import("../pages/product"))
const Layout = lazy(() => import("../template/layout"))
const Login = lazy(() => import("../pages/login"))
const Chosen = lazy(() => import("../pages/chosen"))
const AboutItem = lazy(() => import("../pages/aboutItems"))
const SignIn = lazy(() => import("../pages/signup"))
const ResultSearch = lazy(() => import("../pages/resultsearch"))
const ResultFiltration = lazy(() => import("../pages/resultFiltrationPage"))
const CheckoutPage = lazy(() => import("../pages/checkout"))
const Favority = lazy(() => import("../pages/favority"))
const Purchases = lazy(() => import("../pages/purchases"))

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