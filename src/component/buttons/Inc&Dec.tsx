import { Badge, IconButton } from '@mui/material';
import { useState, useContext } from 'react';
import { FaBagShopping, FaMinus, FaPlus } from 'react-icons/fa6';
import { useAppDispatch, useAppSelector } from '../../store/categories/hooks';
import actIncreaseChosen from '../../store/cart/act/actInreasechosen';
import getChoosen from '../../store/cart/act/actGetChosen';
import actDecreaseChosen from '../../store/cart/act/actDecreasechosen';
import { api } from '../../template/layout';
import actDeleteFromChosen from '../../store/cart/act/actDeletefromchosen';
import Loader from '../feedback/loading';
import { Tproduct } from '../../store/custom/tproduct';

type IncDecProps = {
  _id:string;
  quantity: number;
};

// 👇 عرف نوع المنتج


const IncDec: React.FC<IncDecProps> = ({ _id, quantity }) => {
  const value = useAppSelector((state) => state.product.record as Tproduct[]); // ✅ تأكيد النوع
  const dispatch = useAppDispatch();
  const context = useContext(api);
  const [localLoading, setLocalLoading] = useState(false);

  // confirmation delete items if quantity = 1
  const lastOne = (id:string, index: number) => {
    context?.setTarget({
      name: 'If you continue you will delete the item from your chosen?',
      func: async () => {
        setLocalLoading(true);
        dispatch({ type: 'cart/deletefromcart', payload: value[index] });
        await dispatch(actDeleteFromChosen(_id));
        await dispatch(getChoosen(''));
        setLocalLoading(false);
      },
    });
    context?.setIsSure(true);
  };

  const index = value.findIndex((ele) => ele._id === _id);

  return (
    <div className="flex items-center gap-2">
      <IconButton
        onClick={async () => {
          setLocalLoading(true);
          await dispatch(actIncreaseChosen(_id));
          await dispatch(getChoosen('')); 
          setLocalLoading(false);
        }}
      >
        <FaPlus className="text-lg hover:text-sky-600" />
      </IconButton>

      {localLoading ? (
        <Loader />
      ) : (
        <Badge
          badgeContent={quantity}
          sx={{
            '& .MuiBadge-badge': {
              fontSize: '10px',
              minWidth: '15px',
              height: '15px',
              padding: '0 4px',
            },
          }}
          color="secondary"
        >
          <FaBagShopping className="text-zinc-600 text-[15px]" />
        </Badge>
      )}

      <IconButton
        onClick={async () => {
          if (quantity < 2) {
            lastOne(_id, index);
          } else {
            setLocalLoading(true);
            await dispatch(actDecreaseChosen(_id));
            await dispatch(getChoosen('')); 
            setLocalLoading(false);
          }
        }}
      >
        <FaMinus className="text-lg hover:text-sky-600" />
      </IconButton>
    </div>
  );
};

export default IncDec;
