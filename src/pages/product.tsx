import React, { useEffect } from 'react'
import Cart from '../component/cart/cart'
import { useAppDispatch, useAppSelector} from '../store/categories/hooks'
import actGetPtoducts from '../store/products/act/actGetproducts'
import { cleanUp } from '../store/products/productSlice'
import { useParams } from 'react-router-dom'
import Loader from '../component/feedback/loading'

const Product = () => {
  const dispatch=useAppDispatch()
  const {error,loading,record}=useAppSelector(state=>state.product)
  const params=useParams()
 useEffect(() => {
  if (params.prefix) {
    dispatch(actGetPtoducts(params.prefix));
  }else{
      dispatch(actGetPtoducts(''));

  }
  return ()=>{
  dispatch(cleanUp())
  }
}, [params.prefix]);

useEffect(() => {
    console.log('useeffact work')
  const scrollToHash = () => {
    console.log('scrollToHash')
    const hash = window.location.hash.substring(1)

    if (hash) {
      const element = document.getElementById(hash)
      console.log(element)
      if (element) {
        
        element.scrollIntoView({ behavior: 'smooth' });
      } 
    }else{
      console.log('hash not found')
    }
  };

  scrollToHash();

  window.addEventListener('hashchange', scrollToHash);

  return () => {
    window.removeEventListener('hashchange', scrollToHash);
  };
}, []);

  return (
    <div className='mt-5 px-[30px] sm:px-[70px] grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3  gap-[30px] md:gap-[50px]'>
           
            {
            record.map((item,index)=>(
               <Cart  key={index} {...item}  />
            ))
            }
            {loading!='succeeded'?<Loader/>:null}
                    {error?<h1 className='text-2xl'>{error}</h1>:null}
     
    </div>
  )
}

export default Product