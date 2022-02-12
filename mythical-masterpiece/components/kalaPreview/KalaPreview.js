import ItemsSlider from "../chubeHaraj/ItemsSlider";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import KalaPreviewTitle from "./KalaPreviewTitle";

import useMediaQuery from "@mui/material/useMediaQuery";

const KalaPreview = (props) => {
  let tabletSize = false;
  let slidesPerView;
  const mobileSize = useMediaQuery("(max-width:425px)");
  const fullSize = useMediaQuery("(min-width:1024px)");
  if (!mobileSize && !fullSize) {
    tabletSize = true;
  }

  const slideNumberHandler = () => {
    if (fullSize) {
      if (props.imagedKalaPreview) {
        slidesPerView = 4;
      } else {
        slidesPerView = 5;
      }
    }
    if (tabletSize) {
      slidesPerView = 2;
    }
    if (mobileSize) {
      slidesPerView = 1;
    }
    

    return slidesPerView;
  };

  
  return (
    <div className="chubeHaraj">
      <Container>
        <Box
          sx={props.imagedKalaPreview && fullSize ? { display: "flex" } : {}}
        >
          {(!props.imagedKalaPreview || !fullSize) && (
            <KalaPreviewTitle previewTitle={props.previewTitle} />
          )}

          <ItemsSlider
            products={props.products}
            slidesPerView={slideNumberHandler()}
            cardsPaddingTop={props.cardsPaddingTop}
          />
          {props.imagedKalaPreview && fullSize && (
            <Box>
              <Box
                sx={{ display: "flex", position: "absolute", width: "300px" }}
              >
                {/* <KalaPreviewTitle previewTitle={props.ImageTitle} /> */}
              </Box>
              {<img className="previewImage" src={props.previewImage} />}
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default KalaPreview;
