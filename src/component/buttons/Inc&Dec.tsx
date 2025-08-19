import { Badge, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { FaBagShopping, FaMinus, FaPlus } from 'react-icons/fa6';
import { useAppDispatch, useAppSelector } from '../../store/categories/hooks';
import actIncreaseChosen from '../../store/cart/act/actInreasechosen';
import getChoosen from '../../store/cart/act/actGetChosen';
import actDecreaseChosen from '../../store/cart/act/actDecreasechosen';
import { api } from '../../template/layout';
import actDeleteFromChosen from '../../store/cart/act/actDeletefromchosen';
import Loader from '../feedback/loading';
type incdec = {
    id: number,
    quantity:number
}  

const IncDec = ({id,quantity}:incdec) => {
    const value=useAppSelector(state=>state.product.record)
     const dispatch = useAppDispatch()
     const context = React.useContext(api)
     const [localLoading,setLocalLoading]=useState(false)
      
   
     // confirmation delete  items  if it quantity 1
     const lastOne=(id:number,index:number)=>{
         context?.setTarget({
         name: 'if you continue you will delete  the items from your chosen?',
         func: async() => {
          setLocalLoading(true)
                                   dispatch({type:'cart/deletefromcart',payload:value[index]})
     
              await dispatch(actDeleteFromChosen(id));
       
          await dispatch(getChoosen(''));
          setLocalLoading(false)
         }
       });;
                      context?.setIsSure(true);
                      //  axios.get(`http://localhost:3000/productapi/${id}`)
                      //         .then(res=>{
                      //           console.log(res.data)
                      //           if(localStorage.getItem('email')){
                      //                       axios.post(`http://localhost:3000/chosen/${localStorage.getItem('email')}/${id}`,res.data)
                      
                      //           }
                      //         })
                      //         .catch(error=>{
                      //           console.log(error)
                      //         })
     }
   
     const index=value.findIndex(ele=>ele.id==id)
  return (
   <div className='flex items-center gap-2'>
                    <IconButton onClick={async() => { setLocalLoading(true); await dispatch(actIncreaseChosen(id));await dispatch(getChoosen(''));setLocalLoading(false) }}><FaPlus className='text-lg hover:text-sky-600' /></IconButton>
                    {localLoading?<Loader/>:
                     <Badge badgeContent={quantity}
                      sx={{
                        '& .MuiBadge-badge': {
                          fontSize: '10px',     // حجم الرقم
                          minWidth: '15px',     // عرض الدائرة
                          height: '15px',       // ارتفاع الدائرة
                          padding: '0 4px',     // المسافة الداخلية
                        },
                      }}
                      color="secondary" >
                      <FaBagShopping className='text-zinc-600 text-[15px]' />
                    </Badge>
                    }
                   
                    <IconButton onClick={async() => { 
                      if(quantity<2){
                        lastOne(id,index)
                      }else{
                      setLocalLoading(true)
                         await dispatch(actDecreaseChosen(id));
                         await dispatch(getChoosen(''))
                                              setLocalLoading(false)

                      }
                      
                     }}><FaMinus className='text-lg hover:text-sky-600' /></IconButton>
        </div>
  )
}

export default IncDec