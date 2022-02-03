import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import ItemCard from "./ItemCard";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ItemsSlider(props) {
  return (
    <>
      <Swiper
        slidesPerView={4.7}
        spaceBetween={2}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {props.products.map((product) => (
          <SwiperSlide>
            <ItemCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
