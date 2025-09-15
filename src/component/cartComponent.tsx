import { Close } from '@mui/icons-material';
import { Divider, IconButton } from '@mui/material';
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import actDeleteFromChosen from '../store/cart/act/actDeletefromchosen';
import { useAppDispatch, useAppSelector } from '../store/categories/hooks';
import { api } from '../template/layout';
import getChoosen from '../store/cart/act/actGetChosen';
import deleteAll from '../store/cart/act/actDeleteAllChosen';

const CartComponent = () => {
    const { listPrice, products } = useAppSelector(
        (state) => state.getPrice.record
      );
      const location = useLocation();
      const context=useContext(api)
      const dispatch=useAppDispatch()
  return (
     <div
          className=" absolute end-2 top-[100px] z-[100] bg-white w-full sm:w-[50%] lg:w-[30%] h-auto border-2 p-3"
          style={{
            display:
              context?.openMenue && location.pathname != "/chosen" && products.length > 0
                ? "block"
                : "none",
          }}
        >
          <div>
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
          </div>
        
          <div
            id="chosen-products"
            className="my-4 max-h-[100px] overflow-y-auto p-3 bg-zinc-100 rounded-lg shadow-sm"
          >
            <ul className="flex flex-col gap-3">
              {products.map((ele, index) => (
                <li key={index} className="flex justify-between items-center">
                  <p className="text-sm font-bold text-sky-600">{ele.title}</p>

                  <p className="text-sm font-bold ">
                    {" "}
                    <sup className="mx-2 text-red-500"><del>{ele.price}</del></sup>
                    {Number(ele.price)-ele.discount}$
                    <span className="text-[10px] text-green-700">
                      ({ele.quantity})
                    </span>
                  </p>
                  <IconButton
                    onClick={async () => {
                     dispatch({
                        type: "cart/deletefromcart",
                        payload: context.current,
                      });
                      console.log(ele._id)
                      await dispatch(actDeleteFromChosen(ele._id));

                      await dispatch(getChoosen(""));
                    }}
                  >
                    <Close />
                  </IconButton>
                </li>
              ))}
            </ul>
          </div>
          <Divider sx={{ my: 2 }} />
          <div className="flex flex-col gap-3 my-3">
            <Link to={"/chosen"}>
              <button className="w-full h-[35px] text-zinc-100 bg-sky-700 duration-[0.5s] hover:bg-sky-900 text-[12px] font-bold rounded-[5px]">
                visit my chosen
              </button>
            </Link>

            <Link to={"/checkout"}>
              <button className="w-full h-[35px] text-zinc-100 bg-sky-700 duration-[0.5s] hover:bg-sky-900 text-[12px] font-bold rounded-[5px]">
                Go To Checkout
              </button>
            </Link>

            <button
              onClick={() => {
                context?.setTarget({
                  name: "that will delete  all items you chose are you sure?",
                  func: async () => {
                    dispatch({ type: "cart/deleteall" });
                    await dispatch(deleteAll());
                    await dispatch(getChoosen(""));
                  },
                });
                context.setIsSure(true);
              }}
              className="w-full h-[35px] text-zinc-100 bg-red-500 duration-[0.5s] hover:bg-red-700 text-[12px] font-bold rounded-[5px]"
            >
              Delete All Chosen
            </button>
          </div>
        </div>
  )
}

export default CartComponent
