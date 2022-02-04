import { Container } from "@mui/material";
import Box from '@mui/material/Box';

import ProductBigDescription from "../components/productBigDescription/ProductBigDescription";

export default function Home() {
  return (
    <>
      {/* <TitleBar/> */}
      <Container>
        <Box sx={{marginTop : "40px" , border : "2px solid #d9d9d9" , borderRadius : "15px"}}>
          <ProductBigDescription />
        </Box>
      </Container>
    </>
  );
}
