import { Divider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { api } from "../template/layout";
import { useNavigate } from "react-router-dom";
import AddButton from "../component/buttons/addButton";
import { useAppSelector } from "../store/categories/hooks";
import AddToFavorit from "../component/buttons/favorit";

const AboutItem = () => {
  const deal = true;
  const context = useContext(api);
  const navigate = useNavigate();

  const chosen = useAppSelector((state) => state.cart.productfullinfo);

  const [isAdded, setIsAdded] = useState(false);

  // ✅ تحديث حالة isAdded عند تغير chosen أو current
  useEffect(() => {
    if (chosen && context?.current) {
      const newVal = chosen.some((ele) => ele.id === context.current?.id);
      setIsAdded(newVal);
    }
  }, [chosen, context?.current]);

  // ✅ تأكد أنه في current item وإلا رجع لورا
  useEffect(() => {
    if (!context?.current) {
      navigate(-1);
    }
  }, [context?.current, navigate]);

  if (!context?.current) return <div>...wait</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center relative w-full">
      {/* صور المنتج */}
      <div className="flex flex-col md:flex-row gap-3 items-center w-full sm:w-[60%] lg:w-[50%]">
        <div
          id="list-image"
          className="w-[100px] flex items-center justify-center md:flex-col gap-4"
        >
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src="../../prod.jpeg"
              className="w-[50px] h-[50px] rounded-full"
              alt={`preview-${i}`}
            />
          ))}
        </div>
        <div id="image-product" className="w-[70%]">
          <img
            src={`https://back-last.onrender.com/${context.current.img}`}
            className="w-full"
            alt={context.current.title}
          />
        </div>
      </div>

      {/* تفاصيل المنتج */}
      <div>
        <div className="flex justify-between">
          <h1 className="text-1xl sm:text-2xl text-sky-700 relative">
            {context.current.title}
            <div className="absolute top-[-20%] start-[-10%] text-[22px]">
              <AddToFavorit id={context.current.id} />
            </div>
          </h1>
          <p className="flex gap-2 text-lg">
            <FaStar className="text-yellow-500" />
            {context.current.rating}
          </p>
        </div>

        <p id="aboutItem" className="ms-2 font-[600]">
          {context.current.about}
        </p>

        <Divider sx={{ my: 2, mx: 1 }} />

        <div className="flex gap-3 justify-between h-auto">
          {/* الخصائص */}
          <ul className="flex flex-col justify-end">
            <li className="flex gap-1">
              List Price:
              <p className="font-bold text-sky-700">
                {context.current.price}$
              </p>
            </li>
            <li className="flex gap-1">
              Discount:
              <p
                className="font-bold text-sky-700"
                style={{ textDecoration: deal ? "line-through" : "none" }}
              >
                {context.current.discount}$
              </p>
            </li>
            <li className="flex gap-1">
              Deal Price:
              <p className="font-bold text-sky-700">
                {Number(context.current.price) - Number(context.current.discount)}$
              </p>
            </li>
            <li className="flex gap-1">
              Material:
              <p className="font-bold text-zinc-700">
                {context.current.material}
              </p>
            </li>
            <li className="flex gap-1">
              Brand:
              <p className="font-bold text-zinc-700">
                {context.current.brand}
              </p>
            </li>
            <li className="flex gap-1">
              Color:
              <p className="font-bold text-zinc-700">
                {context.current.color}
              </p>
            </li>
            <li className="flex gap-1">
              Size:
              <p className="font-bold text-zinc-700">
                {context.current.size}
              </p>
            </li>
            <li className="flex gap-1">
              Order Date:
              <p className="font-bold text-zinc-700">2025/8/15</p>
            </li>
            <li className="flex gap-1">
              Receiving Date:
              <p className="font-bold text-zinc-700">2025/8/20</p>
            </li>
          </ul>

          {/* زر الإضافة للسلة */}
          <div className="flex items-end">
            {isAdded ? (
              <div className="px-1 text-[12px] w-[120px] font-bold h-[35px] flex items-center justify-center text-zinc-100 bg-green-800 rounded-[30px]">
                Already Added
              </div>
            ) : (
              <AddButton id={context.current.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
