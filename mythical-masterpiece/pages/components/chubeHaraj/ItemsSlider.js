import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import ItemCard from "./ItemCard";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



// import "./styles.module.css";

export default function ItemsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={2}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Pagination, Navigation]}
        modules={[Navigation]}
        className="mySwiper"
      >
          {/* <ArrowBackIosNewIcon/> */}
        <SwiperSlide>
          <ItemCard>Slide10</ItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard>Slide11</ItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard>Slide10</ItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard>Slide10</ItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard>Slide10</ItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard>Slide10</ItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard>Slide10</ItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard>Slide10</ItemCard>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard>Slide10</ItemCard>
        </SwiperSlide>
      </Swiper>
      {/* <ArrowForwardIosIcon/> */}
    </>
  );
}
