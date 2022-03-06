import ItemsSlider from "../chubeHaraj/ItemsSlider";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import KalaPreviewTitle from "./KalaPreviewTitle";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";

const KalaPreview = (props) => {
  const mobileSize = useMediaQuery("(max-width:425px)");
  const fullSize = useMediaQuery("(min-width:1024px)");
  const [slidesNumber, setSlidesNumber] = useState(0);
  const [tabletSize, setTabletSize] = useState(false);
  const [chubWidth, setChubWidth] = useState();

  useEffect(() => {
    if (fullSize) {
      if(props.imagedKalaPreview){
        setSlidesNumber(4)
      }else{
        setSlidesNumber(5)
      }
      ;
      setChubWidth(1082);
    }

    if (mobileSize) {
      setSlidesNumber(1);
      setChubWidth(290);
    }

    if (!mobileSize && !fullSize) {
      setTabletSize(true);
      setChubWidth(690);
      setSlidesNumber(3);
    }
  }, [mobileSize, fullSize]);

  return (
    <div className="chubeHaraj">
      <Container>
        <Box
          sx={ {marginTop:"30px" , display: props.imagedKalaPreview && fullSize ? "flex" :"" }}
        >
          {(!props.imagedKalaPreview || !fullSize) && (
            <KalaPreviewTitle previewTitle={props.previewTitle} />
          )}

          <ItemsSlider
            products={props.products}
            slidesPerView={slidesNumber}
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
