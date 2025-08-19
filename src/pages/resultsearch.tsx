import React from 'react'

import { useAppDispatch, useAppSelector } from '../store/categories/hooks'
import { IconButton, Typography } from '@mui/material'


import CartSearch from '../component/cart/cartSearch';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
const ResultSearch = () => {
  const value = useAppSelector(state => state.searchItem.record)
  const navigate=useNavigate()
  return (
    <div>
              <IconButton onClick={() => navigate(-1)}><IoMdArrowRoundBack /></IconButton>
      <p className='text-2xl font-bold text-sky-800 my-5'>result({value.length})</p>
      <div className='flex flex-col gap-5'>
 {value.length?value.map((ele,index)=>(
        <CartSearch key={index} {...ele}/>
      )):<Typography>no item found</Typography>}
      </div>
     
     
    </div>

  )
}

export default ResultSearch