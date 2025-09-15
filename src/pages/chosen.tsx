import { useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/categories/hooks";
import {  Divider, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {  FaStar } from "react-icons/fa6";
import actGetPtoducts from "../store/products/act/actGetproducts";
import getChoosen from "../store/cart/act/actGetChosen";
import actDeleteFromChosen from "../store/cart/act/actDeletefromchosen";
import deleteAll from "../store/cart/act/actDeleteAllChosen";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { api } from "../template/layout";
import IncDec from "../component/buttons/Inc&Dec";

import AddToFavorit from "../component/buttons/favorit";

const Chosen = () => {
  const value = useAppSelector((state) => state.cart.productfullinfo);
  const { listPrice, products } = useAppSelector(
    (state) => state.getPrice.record
  );
  const dispatch = useAppDispatch();
  const deal = true;
  const location = useLocation();
  const navigate = useNavigate();

  const context = useContext(api);

  const localhost = "https://back-last.onrender.com/";


  // if there not chosen
  useEffect(() => {
    if (value.length < 1 && location.pathname == "/chosen") {
      navigate(-1);
    } else if (location.pathname == "/chosen") {
      context?.setOpenMenue(false);
    }
  }, [value]);
  return (
    <div className="flex gap-5 flex-wrap-reverse mt-5 ">
      <div className="flex flex-col  justify-between items-center md:items-start gap-[100px] w-[100%]">
        {value.map((ele, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-3 items-center  relative w-full "
          >
            <div className="flex flex-col md:flex-row gap-3 items-center w-full sm:w-[60%] lg:w-[50%] ">
              <div
                id="list-image"
                className="w-[100px] flex items-center justify-center  md:flex-col gap-4"
              >
                <img
                  src="/back/public/"
                  loading='lazy'
                  className="w-[50px] h-[50px] rounded-full"
                />
                <img
                  src="../../prod.jpeg"
                  loading='lazy'
                  className="w-[50px] h-[50px] rounded-full"
                />
                <img
                  src="../../prod.jpeg"
                  loading='lazy'
                  className="w-[50px] h-[50px] rounded-full"
                />
                <img
                  src="../../prod.jpeg"
                  loading='lazy'
                  className="w-[50px] h-[50px] rounded-full"
                />
              </div>
              <div id="image-product" className="w-[70%]">
                <img src={localhost + ele.img}  loading='lazy' className="w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between relative">
                <h1 className="text-1xl sm:text-2xl text-sky-700 ">
                  {ele.title}
                  <div className="absolute top-[-25%] start-[-10%] text-[22px]">
                  <AddToFavorit _id={ele._id} title={ele.title} img={ele.img} />
                                           </div>
                </h1>
                <p className="flex gap-2 text-lg">
                  <FaStar className="text-yellow-500" />
                  {ele.rating}
                </p>
              </div>
              <p id="aboutItem" className="ms-2 font-[600]">
                {ele.about}
              </p>
              <Divider sx={{ my: 2, mx: 1 }} />
              <div className="flex justify-between h-[auto]">
                <ul className="flex flex-col justify-end">
                  <li className="flex gap-1">
                    List Price:
                    <p
                      className="font-bold text-sky-700"
                      style={{ textDecoration: deal ? "line-through" : "" }}
                    >
                      {ele.price}$
                    </p>
                  </li>
                  <li className="flex gap-1">
                    DisCount:
                    <p
                      className="font-bold text-sky-700"
                      style={{ textDecoration: deal ? "line-through" : "" }}
                    >
                      {ele.discount}$
                    </p>
                  </li>
                  {deal ? (
                    <li className="flex gap-1">
                      Deal Price :
                      <p className="font-bold text-sky-700">
                        {Number(ele.price) - ele.discount}$
                      </p>
                    </li>
                  ) : null}
                  <li className="flex gap-1">
                    Matrial:
                    <p className="font-bold text-zinc-700">{ele.material}</p>
                  </li>
                  <li className="flex gap-1">
                    Brand :
                    <p className="font-bold text-zinc-700">{ele.brand}</p>
                  </li>
                  <li className="flex gap-1">
                    Color:<p className="font-bold text-zinc-700">{ele.color}</p>
                  </li>
                  <li className="flex gap-1">
                    Size :<p className="font-bold text-zinc-700"> {ele.size}</p>
                  </li>
                  <li className="flex gap-1">
                    Order Date :<p className="font-bold">2025/8/15</p>
                  </li>

                  <li className="flex gap-1">
                    Receiving Date :<p className="font-bold">2025/8/20</p>
                  </li>
                </ul>
                <div className="flex flex-col justify-between ">
                  <div className="flex justify-center">
                    <IconButton
                      aria-label="delete"
                      onClick={async () => {
                        dispatch({
                          type: "cart/deletefromcart",
                          payload: value[index],
                        });
                        await dispatch(actDeleteFromChosen(ele._id));
                        await dispatch(getChoosen(""));
                      }}
                    >
                      <DeleteIcon
                        fontSize="inherit"
                        sx={{ fontSize: "20px", color: "red" }}
                      />
                    </IconButton>
                  </div>
                  <div className="flex items-center gap-2">
                    <IncDec _id={ele._id} quantity={ele.quantity} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full h-[400px] relative flex flex-col  sm:flex-row">
        <div className="h-[200px]">
          <h1 className="text-2xl text-sky-700">Chosen Page</h1>
          <p className="font-bold text-[16px] my-3 ms-2">
            deals with yout chosen
          </p>
        </div>

        <div className=" absolute end-2 bottom-0 w-full sm:w-[50%] lg:w-[30%] h-auto border-2 p-3">
          <h3 className="text-lg font-[600] ">Order Summary</h3>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between">
              <p className="font-bold text-sm text-zinc-400">
                Price of Product
              </p>{" "}
              <strong className="font-bold text-sm text-green-700">
                {listPrice}$
              </strong>{" "}
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-sm text-zinc-400">Delivery Fee</p>{" "}
              <strong className="font-bold text-sm text-green-700">20$</strong>{" "}
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-sm text-zinc-400">Total</p>{" "}
              <strong className="font-bold text-sm text-green-700">
                {listPrice + 20}$
              </strong>{" "}
            </div>
          </div>
          <div
            id="chosen-products"
            className="my-2 max-h-[100px] overflow-y-auto p-2 bg-white rounded-lg shadow-sm"
          >
            <ul className="flex flex-col gap-3">
              {products.map((ele) => (
                <li className="flex justify-between items-center">
                  <p className="text-sm font-bold text-sky-600">{ele.title}</p>{" "}
                  <p className="text-sm font-bold ">
                    {ele.price}$
                    <span className="text-[10px] text-red-700">
                      ({ele.quantity})
                    </span>{" "}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <Divider sx={{ my: 2 }} />



          {/* menue */}
          <div className="flex flex-col gap-3 my-3">
            <button
              onClick={() => {
                context?.setTarget({
                  name: "that will delete  all items you chose are you sure?",
                  func: async () => {
                    dispatch({ type: "cart/deleteall" });
                    await dispatch(deleteAll());
                    await dispatch(getChoosen(""));
                    await dispatch(actGetPtoducts(""));
                  },
                });
                context?.setIsSure(true);
              }}
              className="w-full h-[35px] text-zinc-100 bg-red-500 duration-[0.5s] hover:bg-red-700 text-[12px] font-bold rounded-[5px]"
            >
              Delete All Chosen
            </button>
            <Link to={"/checkout"}>
              <button className="w-full h-[35px] text-zinc-100 bg-sky-700 duration-[0.5s] hover:bg-sky-900 text-[12px] font-bold rounded-[5px]">
                Go to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* col-2 */}
    </div>
  );
};

export default Chosen;
