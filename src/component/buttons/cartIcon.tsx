import { Badge, IconButton } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useAppSelector } from "../../store/categories/hooks";
import { api } from "../../template/layout";

const CartIcon = () => {
  const quantity = useAppSelector((state) => state.cart.productfullinfo);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (quantity && quantity.length > 0) {
      const val = quantity.reduce((total, curr) => total + curr.quantity, 0);
      setSum(val);
    } else {
      setSum(0);
    }
  }, [quantity]);

  const context = useContext(api);

  return (
    <div>
      <IconButton onClick={() => context?.setOpenMenue((prev) => !prev)}>
        <Badge badgeContent={sum} color="success">
          <FaCartShopping className="text-[18px] sm:text-[22px] text-zinc-700" />
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartIcon;
