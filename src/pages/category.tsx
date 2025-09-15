import { useAppDispatch,useAppSelector } from '../store/categories/hooks'
import actGetCategories from '../store/categories/act/actGetCategories'
import { Grid, ListItem, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../component/feedback/loading'
import { Tproduct } from '../store/custom/tproduct'
const Category = () => {
  const  dispatch=useAppDispatch()
    const {loading,error,record}=useAppSelector(state => state.categories)
  const localhost='https://backmemo.onrender.com/'

  useEffect(()=>{
    dispatch(actGetCategories())
  },[dispatch])
  
 useEffect(()=>{
     const hash=window.location.hash.substring(1)
     const ele=document.getElementById(hash)
     if(ele){
      ele.scrollIntoView({behavior:'smooth'})
     }
      },[])
  return (
    <div id='category'>
      <Grid container spacing={2}>
        {
          record.map((ele:Tproduct,index:number)=>(
 <Grid size={3} key={index}>
    <ListItem sx={{display:'flex',flexDirection:'column',gap:3}}>
      <Link className='flex flex-col items-center gap-2' to={`/product/${ele.title}`}>
 <img src={localhost+ele.img} className='rounded-full w-[100px] h-[100px]'  loading='lazy'  width={150} height={150} />
      <Typography variant='h5'>{ele.title}</Typography>
      </Link>
     
    </ListItem>
      </Grid>
          ))
        }
        {loading!='succeeded'?<Loader/>:null}
        {error?<h1 className='text-2xl'>{error}</h1>:null}
 
</Grid>
    </div>
  )
}

export default Category