import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ItemCard from "./ItemCard";
import ItemImage from "./ItemImage";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Timer from "./Timer";
import ItemsSlider from "./ItemsSlider";
import background from "../../assets/Images/ChubeHaraj/sale_bg.png";
import chubeharaj from "../../assets/Images/ChubeHaraj/sale.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

export default function ChubeHaraj(props) {
  // const [slidesNumber, setSlidesNumber] = useState(4);


  let tabletSize = false;
  let slidesPerView 
  const mobileSize = useMediaQuery("(max-width:425px)");
  const fullSize = useMediaQuery("(min-width:1024px)");
  if (!mobileSize && !fullSize) {
    tabletSize = true;
  }

  const slideNumberHandler = () =>{
    if(fullSize) {
      slidesPerView = 4.7
    }
    if (tabletSize) {
     slidesPerView = 2;
    }
    if (mobileSize) {
      slidesPerView = 1;
    }
   

    return slidesPerView

  }
  


  console.log(
    ` fullSize : ${fullSize} , tabletSize : ${tabletSize}, mobileSize : ${mobileSize}`
  );

  const windowSize = "500px";

  return (
    <div className="chubeHaraj">
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
                minWidth: "138px",
                zIndex: " 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "right",

                zIndex: "1",
                backgroundColor: "transparent",
              }}
            >
              <ItemsSlider
                products={props.products}
                slidesPerView={slideNumberHandler()}
                cardsPaddingTop={props.cardsPaddingTop}
              />
            </Paper>
            <Box
              sx={{
                width: `${windowSize > 425 ? "240px" : "120px"}`,
                margin: "0 16px",
              }}
            >
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

              <img
                style={{ width: `${windowSize > 425 ? "240px" : "120px"}` }}
                src={chubeharaj.src}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
