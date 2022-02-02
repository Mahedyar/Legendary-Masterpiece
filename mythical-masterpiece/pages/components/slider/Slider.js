import DataSlider from "./DataSlider";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Container,Grid,Paper} from "@mui/material";
import { Autoplay, Pagination, Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider(){

    return(
        <>

            <Container maxWidth={'lg'}>
                <h1>Slider</h1>
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
            </Container>



        </>
    )
}