import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import DataCard from "../../DataCard";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SwiperPhone() {
  const matches = useMediaQuery("(min-width:769px)");

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: 5,
          margin: "auto",
          mixBlendMode: " multiply",
        }}
      >
        <Box>
          {DataCard.map((item) => (
            <Swiper
              key={item.product}
              spaceBetween={1}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={
                matches ? {
                      clickable: true,} : {}
              }
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {item.images.map((img) => (
                <SwiperSlide key={item.product}>
                  <Container maxWidth="sm">
                    <img className={'Img-product'} src={img} />
                  </Container>
                </SwiperSlide>
              ))}
            </Swiper>
          ))}
        </Box>
      </Box>
    </>
  );
}
