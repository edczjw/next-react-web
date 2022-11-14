import React from 'react'
import styles from './style.module.scss'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
// 引入基础样式
import "swiper/css";
// 进入分页器相关样式
import "swiper/css/pagination";
import Image from 'next/image'

const Swipers = () => {
  return (
    <div className={styles.c_swiper_wrapper}>
      <Swiper
        // 使用分页器模块
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide style={{ background: "lightblue", height: "120.773rpx" }}>
          <Image src="https://img0.baidu.com/it/u=1170503378,2397283689&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" width={100} height={100} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ background: "lightblue", height: "120.773rpx" }}>
          Slide 2
        </SwiperSlide>
        <SwiperSlide style={{ background: "lightblue", height: "120.773rpx" }}>
          Slide 3
        </SwiperSlide>
        <SwiperSlide style={{ background: "lightblue", height: "120.773rpx" }}>
          Slide 4
        </SwiperSlide>
      </Swiper>
      <style jsx global>
        {`
          .swiper-pagination {
            text-align: right;
            padding-right: 6.039rpx;
          }
          .swiper-pagination-bullet {
            border-radius: 0;
          }
          .swiper-pagination-bullet-active {
            background: green;
          }
        `}
      </style>
    </div>
  )
}

export default Swipers