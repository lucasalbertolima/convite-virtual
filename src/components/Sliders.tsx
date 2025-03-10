"use client"

import React from 'react';
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {

    const banners = [
        {id: '1', image: 'banner1.webp'},
        {id: '2', image: 'banner2.webp'},
    ]

    return (
        <div className="p-0 m-0"> {/* Adicionando margin-bottom */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id} className="p-0 m-0">
            <img src={item.image} alt="banner" width="100%" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
  };