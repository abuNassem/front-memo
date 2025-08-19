import { Divider } from "@mui/material";

import React, { useContext, useEffect } from "react";
import { FaStar } from "react-icons/fa6";

import { api } from "../template/layout";

import { useNavigate } from "react-router-dom";
import AddButton from "../component/buttons/addButton";
import { useAppSelector } from "../store/categories/hooks";
import AddToFavorit from "../component/buttons/favorit";
const AboutItem = () => {
  const deal = true;
    const context = useContext(api);


const chosen = useAppSelector(state => state.cart.productfullinfo);

// قيمة ابتدائية (false أو حسب الحالة الأولية للكارت)
const [isAdded, setIsAdded] = React.useState(() =>
  chosen?
  chosen.some(ele => ele.id == context?.current?.id):false
);

React.useEffect(() => {
  if(chosen){
  const newVal = chosen.some(ele => ele.id == context?.current?.id);
  setIsAdded(newVal);
  }

}, [chosen]);


  const navigate = useNavigate();
  useEffect(() => {
    const item = context?.current;
    if (!item) {
      navigate(-1);
    }
  }, [context?.current]);

  return (
    <div>
      {context?.current ? (
        <div className="flex flex-col lg:flex-row gap-3 items-center  relative w-full ">
          <div className="flex flex-col md:flex-row gap-3 items-center w-full sm:w-[60%] lg:w-[50%] ">
            <div
              id="list-image"
              className="w-[100px] flex items-center justify-center  md:flex-col gap-4"
            >
              <img
                src="../../prod.jpeg"
                className="w-[50px] h-[50px] rounded-full"
              />
              <img
                src="../../prod.jpeg"
                className="w-[50px] h-[50px] rounded-full"
              />
              <img
                src="../../prod.jpeg"
                className="w-[50px] h-[50px] rounded-full"
              />
              <img
                src="../../prod.jpeg"
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>
            <div id="image-product" className="w-[70%]">
              <img
                src={"https://back-last.onrender.com/" + context?.current.img}
                className="w-full"
              />
            </div>
          </div>

          <div>
           
            <div className="flex justify-between">
              <h1 className="text-1xl sm:text-2xl text-sky-700 relative">
                {context?.current.title}
                 <div className="absolute top-[-20%] start-[-10%] text-[22px]">
    
             <AddToFavorit id={context.current.id}/>
          
                 </div>
              
              </h1>
              <p className="flex gap-2 text-lg">
                <FaStar className="text-yellow-500" />
                {context.current.rating}
              </p>
            </div>

            <p id="aboutItem" className="ms-2 font-[600]">
              {context?.current.about}
            </p>
            <Divider sx={{ my: 2, mx: 1 }} />
            <div className="flex gap-3 justify-between h-[auto]">
              <ul className="flex flex-col justify-end">
                <li className="flex gap-1">
                  List Price:
                  <p className="font-bold text-sky-700">
                    {" "}
                    {context?.current.price}$
                  </p>
                </li>
                <li className="flex gap-1">
                  DisCount:
                  <p
                    className="font-bold text-sky-700"
                    style={{ textDecoration: deal ? "line-through" : "" }}
                  >
                    {context?.current.discount}$
                  </p>
                </li>
                <li className="flex gap-1">
                  Deal Price :
                  <p className="font-bold text-sky-700">
                    {Number(context?.current.price) - context?.current.discount}
                    $
                  </p>
                </li>

                <li className="flex gap-1">
                  Matrial:
                  <p className="font-bold text-zinc-700">
                    {context?.current.material}
                  </p>
                </li>
                <li className="flex gap-1">
                  Brand :
                  <p className="font-bold text-zinc-700">
                    {context?.current.brand}
                  </p>
                </li>
                <li className="flex gap-1">
                  Color:
                  <p className="font-bold text-zinc-700">
                    {context.current.color}
                  </p>
                </li>
                <li className="flex gap-1">
                  Size :
                  <p className="font-bold text-zinc-700">
                    {" "}
                    {context.current.size}
                  </p>
                </li>

                <li className="flex gap-1">
                  Order Date :
                  <p className="font-bold text-zinc-700">2025/8/15</p>
                </li>

                <li className="flex gap-1">
                  Receiving Date :
                  <p className="font-bold text-zinc-700">2025/8/20</p>
                </li>
              </ul>
              <div className=" flex items-end">
                {isAdded ? (
                  <div className=" px-1 text-[12px] w-[100px] font-bold h-[35px] flex items-center justify-center text-sm text-zinc-100 bg-green-800 rounded-[30px]">
                    allready added
                  </div>
                ) : (
                  <AddButton id={context.current.id} />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "...wait"
      )}
    </div>
  );
};

export default AboutItem;
