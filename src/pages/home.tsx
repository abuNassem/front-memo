import React, { lazy, useEffect } from 'react'
import MySwiper from './home/swiper'
import MyImageList from './home/imglist'
const Feature=lazy(()=>import('./home/feature'))
const Contact=lazy(()=>import('./home/contact'))

const Home = () => {

   
 useEffect(()=>{
     const hash=window.location.hash.substring(1)
     console.log(hash)
     const ele=document.getElementById(hash)
     if(ele){
      ele.scrollIntoView({behavior:'smooth'})
     }
      },[])

  return (
    <div id='home'>
      <MySwiper/>
      <MyImageList/>
      <Feature/>
      <Contact/>
          </div>
  )
}

export default Home