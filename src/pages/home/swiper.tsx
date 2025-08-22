import React, { useEffect, useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import 'swiper/css'
import { Card, CardContent, IconButton } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as typeSwiper } from 'swiper/types'
import actGetPtoducts from '../../store/products/act/actGetproducts'
import { useAppDispatch } from '../../store/categories/hooks'

const MySwiper = () => {
  const dispatch = useAppDispatch()
  const swiperRef = useRef<typeSwiper | null>(null)

  const slides = ['/groupClothes.webp','/photo-1589347528565-4ad0dcc12958.avif','/photo-1602810319428-019690571b5b.avif']

  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current?.slideNext()
    }, 7000)

    dispatch(actGetPtoducts(''))

    return () => clearInterval(interval)
  }, [dispatch])

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
        onSwiper={swiper => (swiperRef.current = swiper)}
      >
       
       {   slides.map((img, index) => (
            <SwiperSlide key={index}>
              <Card className="flex justify-center items-center">
                <CardContent>
                  <img
                    src={`${img}`}
                    className="w-[70%]  object-contain mx-auto"
                    alt={`slide-${index}`}
                  />
                </CardContent>
              </Card>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default MySwiper
