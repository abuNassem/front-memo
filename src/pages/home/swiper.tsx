
import React, { useEffect, useRef } from 'react'
import { Navigation } from 'swiper/modules';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import 'swiper/css';
import { Card, CardContent, Typography, IconButton, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper as typeSwiper} from 'swiper/types';
import { useDispatch } from 'react-redux';
import actGetPtoducts from '../../store/products/act/actGetproducts';
import actGetCategories from '../../store/categories/act/actGetCategories';
import { useAppDispatch, useAppSelector } from '../../store/categories/hooks';
const MySwiper = () => {
  const dispatch=useAppDispatch()
  const {loading,record,error}=useAppSelector(state=>state.product)
  const swiperRef = useRef<typeSwiper|null>(null);
    const slides = [record[0]?.img, record[1]?.img,record[2]?.img,record[3]?.img,record[4]?.img];
   useEffect(()=>{
     setInterval(() => {
      swiperRef.current?.slideNext()
    }, 7000)
    dispatch(actGetPtoducts(''))
  },[])
  return (
     <div className="w-[90%] h-[300px] mx-auto relative">
            {/* أزرار التنقل المخصصة */}
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              className="!absolute top-[45%] left-0 z-50 bg-white/80 hover:bg-white"
            >
              <ArrowBackIos />
            </IconButton>
    
            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              className="!absolute top-[45%] right-0 z-50 bg-white/80 hover:bg-white"
            >
              <ArrowForwardIos />
            </IconButton>
    
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {slides.map((item,index) => (
                <SwiperSlide key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">
                        {record? <img src={`https://back-last.onrender.com/${item}`} className='w-[70%] h-[300px] mx-auto'/>:loading}
                       
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
  )
}

export default MySwiper