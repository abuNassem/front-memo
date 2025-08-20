import { useContext, useState } from "react";
import { useAppDispatch } from "../../store/categories/hooks";
import { Button } from "@mui/material";
import getChoosen from "../../store/cart/act/actGetChosen";
import { api } from "../../template/layout";
import { useNavigate } from "react-router-dom";
import Loader from "../feedback/loading";

// ✅ الأفضل تبدأ أسماء الـ types بحرف كبير
type AddButtonProps = {
  id: number;
};

const AddButton: React.FC<AddButtonProps> = ({ id }) => {
  const context = useContext(api);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [localLoading, setLocalLoading] = useState<boolean>(false);

  // ✅ دالة إضافة للعربة
  const addToCart = async () => {
    if (localStorage.getItem("userName")) {
      setLocalLoading(true);

      // dispatch للـ reducer
      dispatch({ type: "cart/addtocart", payload: context?.current });

      // استدعاء async action
      await dispatch(getChoosen(id));

      setLocalLoading(false);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      {localLoading ? (
        <Loader />
      ) : (
        <Button
          variant="contained"
          sx={{
            width: "auto",
            borderRadius: "30px",
            fontSize: "12px",
            backgroundColor: "rgb(9, 218, 207)",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgb(146, 146, 146)",
            },
          }}
          onClick={addToCart}
          disableRipple
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default AddButton;
