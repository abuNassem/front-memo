import { useContext, useState } from "react";
import { useAppDispatch } from "../../store/categories/hooks";
import { Button } from "@mui/material";
import getChoosen from "../../store/cart/act/actGetChosen";
import { api } from "../../template/layout";
import Loader from "../feedback/loading";
import { useNavigate } from "react-router-dom";

// ✅ الأفضل تبدأ أسماء الـ types بحرف كبير
type AddButtonProps = {
  _id:string
};

const AddButton: React.FC<AddButtonProps> = ({_id }) => {
  const context = useContext(api);
  const dispatch = useAppDispatch();
  const [localLoading, setLocalLoading] = useState<boolean>(false);
  const navigate=useNavigate()
  // ✅ دالة إضافة للعربة
  const addToCart = async () => {
    if(localStorage.getItem('email')){
      setLocalLoading(true);
      // dispatch للـ reducer
      dispatch({ type: "cart/addtocart", payload: context?.current });
      // استدعاء async action
      await dispatch(getChoosen(_id));

      setLocalLoading(false);
   
    }else{
      navigate('/login')
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
