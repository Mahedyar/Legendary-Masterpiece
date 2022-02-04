import ItemsSlider from "../chubeHaraj/ItemsSlider";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";

const KalaPreview = (props) => {
  console.log(props.cardsPaddingTop);
  return (
    <>
      <Container>
         <Box sx={props.imagedKalaPreview ? {display : "flex"} : {}}>
          {!props.imagedKalaPreview && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "15px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <ArrowBackIcon />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginLeft: "5px",
                  }}
                >
                  مشاهده بیشتر
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
                {props.previewTitle}
              </Typography>
            </Box>
          )}
          
          <ItemsSlider
            products={props.products}
            slidesPerView={props.slidesPerView}
            cardsPaddingTop={props.cardsPaddingTop}
          />
          {props.imagedKalaPreview && (
            <img className="previewImage" src={props.previewImage} />
          )}
        </Box>
      </Container>
    </>
  );
};

export default KalaPreview;
