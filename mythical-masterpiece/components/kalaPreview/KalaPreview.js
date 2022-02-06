import ItemsSlider from "../chubeHaraj/ItemsSlider";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import KalaPreviewTitle from "./KalaPreviewTitle";

const KalaPreview = (props) => {
  return (
    <>
      <Container>
        <Box sx={props.imagedKalaPreview ? { display: "flex" } : {}}>
          {!props.imagedKalaPreview && (
            <KalaPreviewTitle previewTitle={props.previewTitle} />
          )}

          <ItemsSlider
            products={props.products}
            slidesPerView={props.slidesPerView}
            cardsPaddingTop={props.cardsPaddingTop}
          />
          {props.imagedKalaPreview && (
            <Box>
              <Box sx={{ display: "flex", position: "absolute" , width : "300px"}}>
                {/* <KalaPreviewTitle previewTitle={props.ImageTitle} /> */}
              </Box>
              {<img className="previewImage" src={props.previewImage} />}
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default KalaPreview;
