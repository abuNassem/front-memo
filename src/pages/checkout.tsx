import React, { useContext, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/categories/hooks';
import { api } from '../template/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { IoMdArrowRoundBack } from 'react-icons/io';
import axios from 'axios';
import getOrders from '../store/purchases/act/getorders';
import deleteAll from '../store/cart/act/actDeleteAllChosen';
import getChoosen from '../store/cart/act/actGetChosen';

const CheckoutPage = () => {

  const context = useContext(api);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.productfullinfo);
  const totalPrice = useAppSelector(state => state.getPrice.record.listPrice);
  const location = useLocation();
  const navigate = useNavigate();
  const localhost = 'https://back-last.onrender.com/';
  const [form, setForm] = useState({ name: '', phone: '', address: '',items:[...cartItems]});

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
          axios.post(`https://back-last.onrender.com/orders/${localStorage.getItem('email')}`,form)
          .then(async()=>{
              context?.setAlert(prev => ({
      ...prev,
      isOpen: true,
      func: 'success',
      textAlert: 'Your order has been submitted successfully!'}));

    await dispatch(getOrders())
    await dispatch(deleteAll())
    await dispatch(getChoosen(''))
    navigate('/')
    setForm(prev=>({...prev,phone:'',name:'',address:''}))  })
          .catch(error=>{
            if(error.response){
              context?.setAlert({
                isOpen:true,
                func:'warning',
                textAlert:error.response.data.message
              })
            }else{
                context?.setAlert({
                isOpen:true,
                func:'warning',
                textAlert:error.message
              })
            }
          })

    


  };

  context.isSure()
  useEffect(() => {
    const isReady = cartItems && Array.isArray(cartItems);
    if (isReady && cartItems.length < 1 && location.pathname === '/checkout') {
      navigate(-1);
    }
  }, [cartItems, location.pathname, navigate]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <IconButton onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack />
      </IconButton>

      <h2 className="text-2xl font-bold mb-4">Checkout Page</h2>

      {/* 🛒 Products */}
      <div className="space-y-4 mb-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between border p-2 rounded">
            <div className="flex items-center gap-4">
              <img src={localhost + item.img} alt={item.title} loading='lazy' className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <p className='text-red-500 text-end'><del>{Number(item.price)*item.quantity}$</del></p>
               <p className="text-right font-bold text-green-700">
              {(Number(item.price) * item.quantity)-(item.discount*item.quantity)} $
         </p>
            </div>
           
          </div>
        ))}
      </div>

      {/* 💳 Summary */}
      <div className="border-t pt-4 mb-6">
        <p className="text-lg font-bold">Total: {totalPrice} $</p>
        <p className="text-lg font-bold">Delivery: 20 $</p>
        <p className="text-lg font-bold">Deal total: {totalPrice + 20} $</p>
      </div>

      {/* 📮 Shipping Details */}
      <div className="space-y-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleInput}
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleInput}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="address"
          placeholder="Full Address"
          value={form.address}
          onChange={handleInput}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* ✅ Submit Button */}
      <button
        onClick={handleOrder}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
      >
        Submit Order
      </button>

    </div>
  );
};

export default CheckoutPage;
