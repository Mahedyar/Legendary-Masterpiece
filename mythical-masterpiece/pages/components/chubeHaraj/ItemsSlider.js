import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import ItemCard from "./ItemCard";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// import "./styles.module.css";

export default function ItemsSlider(props) {
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
        {props.products.map((product) => (
          <SwiperSlide>
            <ItemCard product={product} />
          </SwiperSlide>
        ))}
        {/* <Box sx = {{display : "flex" , justifyContent : "space-between" , marginBottom : 6 , zIndex : "100"}}>
          <Box
            sx={{ width: 40, height: 40, backgroundColor: "red", zIndex: "10" , borderRadius : 10   }}
          ></Box>
          <Box
            sx={{ width: 40, height: 40, backgroundColor: "red", zIndex: "10"  , borderRadius : 10}}
          ></Box>
        </Box> */}
      </Swiper>
    </>
  );
}
