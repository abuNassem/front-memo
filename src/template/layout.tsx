import React, { createContext, Suspense, useEffect, useRef, useState } from "react";
import Header from "../component/common/header";
import Footer from "../component/common/footer";
import { Outlet} from "react-router-dom";
import { Tcontext, TlightProduct, Ttarget } from "../store/custom/context";
import { useAppDispatch} from "../store/categories/hooks";
import getChoosen from "../store/cart/act/actGetChosen";
import actGetPtoducts from "../store/products/act/actGetproducts";

import Sure from "../component/feedback/isSure";
import { motion } from "framer-motion";
import FilterComponenet from "../component/filterComponent";
import MyAlert from "../component/feedback/alert";
import getAllFavo from "../store/favority/act/getallfavo";
import getOrders from "../store/purchases/act/getorders";
import CartComponent from "../component/cartComponent";
import ToTop from "../component/buttons/toTop";
export const api = createContext<Tcontext | null>(null);
const Layout = () => {
  const dispatch = useAppDispatch();
  
  const [openMenue, setOpenMenue] = useState(false);
  const [isSure, setIsSure] = useState(false);
  const [target, setTarget] = useState<Ttarget | null>(null);
  const [current, setCurrent] = useState<TlightProduct | null>(null);
  const [filterMode, setFilterMode] = useState<boolean>(false);
  const [isSearch, setIsSearch] = React.useState<boolean>(false);
  const [ordersApi,setOrdersApi]=useState([])
  const [isPurchases, setIsPurchases] = useState<boolean>(false);
  const refTop=useRef<HTMLDivElement>(null)
  const [alert, setAlert] = useState<{
    isOpen: boolean;
    func: "warning" | "info" | "success";
    textAlert: string;
  }>({ isOpen: false, func: "success", textAlert: "" });

  useEffect(() => {
    dispatch(actGetPtoducts(""));
    dispatch(getChoosen(""));
    dispatch(getAllFavo(null));
    dispatch(getOrders())
  }, []);

  const MyValue = {
    openMenue,
    setOpenMenue,
    isSure,
    setIsSure,
    target,
    setTarget,
    current,
    setCurrent,
    filterMode,
    setFilterMode,
    alert,
    setAlert,
    isSearch,
    setIsSearch,
    isPurchases,
    setIsPurchases,
    setOrdersApi,
    ordersApi,
    refTop
  };
  return (
    <api.Provider value={MyValue}>
      <div  ref={refTop}>
        <MyAlert />
        <Sure />
        <div>
          <motion.div
            initial={{ y: "-100vh" }}
            transition={{ duration: 0.5 }}
            animate={{ y: filterMode ? 0 : "-100vh" }}
          >
            <FilterComponenet />
          </motion.div>
        </div>
        <Header />
        <CartComponent/>
                          <ToTop/>

              <div
          id="warrper"
         
          className="min-h-[100vh] h-[auto] container mx-auto mt-4 px-5 py-5"
        >

          <Suspense fallback={<h1>...loading</h1>}>
             <Outlet />
          </Suspense>
         
        </div>

        <Footer />
      </div>
    </api.Provider>
  );
};

export default Layout;




