import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ItemCard from "./ItemCard";
import ItemImage from "./ItemImage";
import Paper from "@mui/material/Paper";

import { Typography } from "@mui/material";
import Timer from "./Timer";
import ItemsSlider from "./ItemsSlider";
import livan from "../../assest/Images/ChubeHaraj/img_1.png";
import drill from "../../assest/Images/ChubeHaraj/img_2.png";
import kafsh from "../../assest/Images/ChubeHaraj/img_3.png";
import sandis from "../../assest/Images/ChubeHaraj/img_4.png";
import headphone from "../../assest/Images/ChubeHaraj/img_5.png";
import cream from "../../assest/Images/ChubeHaraj/img.png";
import background from "../../assest/Images/ChubeHaraj/sale_bg.png";
import chubeharaj from "../../assest/Images/ChubeHaraj/sale.png";

export default function ChubeHaraj() {
  const products = [
    {
      id: 1,
      image: livan.src,
      name: "لیوان پلاستیکی",
      offPercent: 14,
      price: 15000,
    },
    {
      id: 2,
      image: drill.src,
      name: "دریل",
      offPercent: 22,
      price: 800000,
    },
    {
      id: 3,
      image: kafsh.src,
      name: "کفش ورزشی",
      offPercent: 31,
      price: 320000,
    },
    {
      id: 4,
      image: sandis.src,
      name: "ساندیس",
      offPercent: 8,
      price: 8000,
    },
    {
      id: 5,
      image: headphone.src,
      name: "هدفون مدل یونیوو",
      offPercent: 48,
      price: 450000,
    },
    {
      id: 6,
      image: cream.src,
      name: "کرم مخصوص صورت",
      offPercent: 17,
      price: 85000,
    },
  ];

  return (
    <Box
      sx={{
        // width: 1500,
        display: "flex",
        height: 516,
        backgroundColor: "#0a3680",
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "repeat-x",
        zIndex : "1"
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
              zIndex : " 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              paddingRight: 2,
            }}
          >
            <ItemsSlider products={products} />
          </Paper>
          <Box sx={{ paddingLeft: "16px" }}>
            <Typography
              sx={{
                color: "yellow",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "32px",
                zIndex: 1,
              }}
            >
              چوب حراج
              <Box
                sx={{
                  height: "25px",
                  backgroundColor: "#0082fd",
                  marginTop: "-20px",
                }}
              ></Box>
              <Timer />
            </Typography>

            <img src={chubeharaj.src} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
