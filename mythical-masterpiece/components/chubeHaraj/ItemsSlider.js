import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ItemCard from "./ItemCard";

export default function ItemsSlider(props) {
  return (
    <>
      <Swiper
        slidesPerView={props.slidesPerView}
        spaceBetween={20}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
      >
        {props.products.map((product) => (
          <SwiperSlide>
            <ItemCard
              product={product}
              fullSize={props.fullSize}
              tabletSize={props.tabletSize}
              mobileSize={props.mobileSize}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>

    // </div>
  );
}
