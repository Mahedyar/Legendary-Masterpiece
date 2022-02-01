import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ItemCard from "./ItemCard";
import ItemImage from "./ItemImage";
import Paper from "@mui/material/Paper";
import background from "../../assest/Images/ChubeHaraj/sale_bg.png";
import chubeharaj from "../../assest/Images/ChubeHaraj/sale.png";
import { Typography } from "@mui/material";
import Timer from "./Timer";


// import React from "react";
// import {
//   Page,
//   Navbar,
//   BlockTitle,
//   Swiper,
//   SwiperSlide,
//   Block,
// } from "framework7-react";
// import "./swiper.css";

export default function BoxSx() {
  return (
    <Box
      sx={{
        // width: 1500,
        display: "flex",
        height: 516,
        backgroundColor: "#0a3680",
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "repeat-x",
      }}
    >
      <Container id="Container">
        <Box
          sx={{
            display: "flex",
            height: 516,
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <Paper
            sx={{
              width: "calc(100% - 222px)",
              // marginTop: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              paddingRight: 2,
            }}
          >
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </Paper>
          <Box sx={{ paddingLeft: "16px" }}>
            <Typography
              sx={{
                color: "yellow",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "32px",
                zIndex : 1 
              }}
            >
              چوب حراج
              <Box sx={{ height: "25px", backgroundColor: "#0082fd" , marginTop : "-20px" }}></Box>
              <Timer/>
              
            </Typography>
            
            <img src={chubeharaj.src} />
          </Box>
        </Box>
      </Container>
      
    </Box>
    
  );
}
