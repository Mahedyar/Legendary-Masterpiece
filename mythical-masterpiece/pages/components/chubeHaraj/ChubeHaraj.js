import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ItemCard from "./ItemCard";
import ItemImage from "./ItemImage";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Timer from "./Timer";
import ItemsSlider from "./ItemsSlider";
import background from "../../assest/Images/ChubeHaraj/sale_bg.png";
import chubeharaj from "../../assest/Images/ChubeHaraj/sale.png";


export default function ChubeHaraj(props) {
  return (
    <Box
      sx={{
        // width: 1500,
        display: "flex",
        height: 516,
        backgroundColor: "#0a3680",
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "repeat-x",
        zIndex: "1",
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
              zIndex: " 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              paddingRight: 2,
              zIndex: "1",
            }}
          >
            <ItemsSlider
              products={props.products}
              slidesPerView={props.slidesPerView}
              cardsPaddingTop={props.cardsPaddingTop}
            />
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
