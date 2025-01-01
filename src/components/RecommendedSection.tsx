import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import ProductCard from './ProductCard'
import "../app/globals.css";

export default function RecommendedSection() {
  const watches = Array(18).fill({
    name: "",
    price: "",
    image: "",
  });

  return (
    <>
    <div className="md:flex w-full flex-row justify-between items-center mb-6 mt-8">
        <p className="text-base lg:text-2xl font-semibold">Recommended For You</p>
      </div>
    <div className="md:flex">
    <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} 
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }, 
          1280: { slidesPerView: 6 }, 
        }}
      >
        {watches.map((watch, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  )
}
