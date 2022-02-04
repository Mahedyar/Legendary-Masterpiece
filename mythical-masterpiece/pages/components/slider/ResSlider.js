import {Box, Grid,Paper} from "@mui/material";
import {Autoplay, Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import DataSlider from "./DataSlider";

export default function ResSlider(){
    return(
        <>
            <Box >
            <Grid sx={12}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {DataSlider.map((slide)=><SwiperSlide key={slide.id}><Paper sx={{borderRadius:10}}><img className={"img-slider"} src={slide.img.src}/></Paper></SwiperSlide>)}
                </Swiper>
            </Grid>
            </Box>
        </>
    )
}