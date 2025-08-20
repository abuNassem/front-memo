import { Tproduct } from "../../store/custom/tproduct";
import { Divider } from "@mui/material";

import AddButton from "../buttons/addButton";
import { FaStar } from "react-icons/fa";
import AddToFavorit from "../buttons/favorit";

const CartSearch = ({
  img,
  about,
  title,
  price,
  discount,
  size,
  brand,
  material,
  id,
  color,
  rating,
}: Tproduct) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center relative w-[90%]">
      <div className="flex flex-col md:flex-row gap-3 items-center w-full sm:w-[60%] lg:w-[50%]">
        <div id="image-product" className="w-[70%]">
          <img
            src={`https://back-last.onrender.com/${img}`}
            className="w-full"
            alt={title}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-start">
          <h1 className="text-1xl sm:text-2xl text-sky-700 relative">
            {title}
            <div className="absolute top-[-25%] start-[-10%] text-[22px]">
              <AddToFavorit id={id} />
            </div>
          </h1>
          <p className="flex gap-2 text-lg">
            <FaStar className="text-yellow-500" />
            {rating}
          </p>
        </div>

        <p id="aboutItem" className="ms-2 font-[600]">
          {about}
        </p>
        <Divider sx={{ my: 2, mx: 1 }} />

        <div className="flex justify-between w-[360px] sm:w-[500px] h-auto">
          <ul className="flex flex-col justify-end">
            <li className="flex gap-1">
              List Price:
              <p className="font-bold text-sky-700">{price}$</p>
            </li>
            <li className="flex gap-1">
              Discount:
              <p
                className="font-bold text-sky-700"
                style={{ textDecoration: "line-through" }}
              >
                {discount}$
              </p>
            </li>
            <li className="flex gap-1">
              Deal Price:
              <p className="font-bold text-sky-700">
                {Number(price) - Number(discount)}$
              </p>
            </li>
            <li className="flex gap-1">
              Material:
              <p className="font-bold text-zinc-700">{material}</p>
            </li>
            <li className="flex gap-1">
              Brand:
              <p className="font-bold text-zinc-700">{brand}</p>
            </li>
            <li className="flex gap-1">
              Color:
              <p className="font-bold text-zinc-700">{color}</p>
            </li>
            <li className="flex gap-1">
              Size:
              <p className="font-bold text-zinc-700">{size}</p>
            </li>
            <li className="flex gap-1">
              Order Date:
              <p className="font-bold">2025/8/15</p>
            </li>
            <li className="flex gap-1">
              Receiving Date:
              <p className="font-bold">2025/8/20</p>
            </li>
          </ul>

          <div className="flex items-end">
            <AddButton id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSearch;
