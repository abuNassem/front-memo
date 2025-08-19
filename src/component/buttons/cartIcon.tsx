import { Badge, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useAppSelector } from '../../store/categories/hooks';
import { useContext } from 'react';
import { api } from '../../template/layout';
const CartIcon = () => {
    const quantity=useAppSelector(state=>state.cart.productfullinfo)
    const [sum,setSum]=useState(0)
    useEffect(()=>{
         if(quantity){
  const arrySum=quantity.map(ele=>{return ele.quantity})
          const val=arrySum.reduce((total,curr)=>{return total+curr},0)
          setSum(val)

    }else{
        setSum(0)
    }
    },[quantity])
   

  
   const context=useContext(api)
    return (
        <div>
            <IconButton onClick={()=>context?.setOpenMenue(prev=>!prev)}>
                <Badge badgeContent={sum} color="success">
                    <FaCartShopping className='text-[18px] sm:text-[22px] text-zinc-700' />
                </Badge>
            </IconButton>
            
        </div>
    )
}

export default CartIcon