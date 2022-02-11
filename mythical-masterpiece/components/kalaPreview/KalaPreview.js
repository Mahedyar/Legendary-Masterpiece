import ItemsSlider from "../chubeHaraj/ItemsSlider";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import KalaPreviewTitle from "./KalaPreviewTitle";
import useWindowSize from "../../utils/useWindowSize";

const KalaPreview = (props) => {

  const windowSize = useWindowSize();
  return (
    <div className="chubeHaraj" >
      <Container>
        <Box sx={(props.imagedKalaPreview && windowSize.width > 768 ) ? { display: "flex" } : {}}>
          {(!props.imagedKalaPreview || (windowSize.width < 768)) &&(
            <KalaPreviewTitle previewTitle={props.previewTitle} />
          )}
          

          <ItemsSlider
            products={props.products}
            slidesPerView={windowSize.width > 425 ?  4 :  2 }
            cardsPaddingTop={props.cardsPaddingTop}
          />
          {props.imagedKalaPreview &&  (windowSize.width > 768) && (
            <Box>
              <Box sx={{ display: "flex", position: "absolute" , width : "300px"}}>
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
