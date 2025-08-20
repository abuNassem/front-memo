import React, { useEffect, useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import 'swiper/css'
import { Card, CardContent, IconButton } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as typeSwiper } from 'swiper/types'
import actGetPtoducts from '../../store/products/act/actGetproducts'
import { useAppDispatch, useAppSelector } from '../../store/categories/hooks'

const MySwiper = () => {
  const dispatch = useAppDispatch()
  const { loading, record } = useAppSelector(state => state.product)
  const swiperRef = useRef<typeSwiper | null>(null)

  const slides = record.map(item => item.img)

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
        {slides.length > 0 ? (
          slides.map((img, index) => (
            <SwiperSlide key={index}>
              <Card className="flex justify-center items-center">
                <CardContent>
                  <img
                    src={`https://back-last.onrender.com/${img}`}
                    className="w-[70%] h-[300px] object-contain mx-auto"
                    alt={`slide-${index}`}
                  />
                </CardContent>
              </Card>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center py-10">{loading ? 'Loading...' : 'No products found'}</p>
        )}
      </Swiper>
    </div>
  )
}

export default MySwiper
