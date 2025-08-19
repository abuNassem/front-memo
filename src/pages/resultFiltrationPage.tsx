import React from 'react'
import { useAppSelector } from '../store/categories/hooks'
import CartSearch from '../component/cart/cartSearch'
import { IconButton, Typography } from '@mui/material'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const ResultFilteration = () => {
  const value = useAppSelector(state => state.filtered)
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex justify-between'>
        <IconButton onClick={() => navigate('/product')}><IoMdArrowRoundBack /></IconButton>
        <p className='text-2xl font-bold text-sky-800 my-5'>result({value.length})</p>

      </div>
      <div className='flex flex-col items-center  gap-5 w-full px-3'>
         {value.length ? value.map((ele, index) => (
        <CartSearch key={index} {...ele} />
      )) : <div className='w-full text-center'>
        <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'rgba(196, 0, 0, 1)', mx: 'auto' }}>no item found</Typography>
         </div>
        }
      </div>
     

     
     
    </div>
  )
}

export default ResultFilteration