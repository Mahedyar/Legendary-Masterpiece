import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResHeaderPrice from '../../components/productVizhegiPrice/ResproductPrice/ResHeaderPrice'
import ResProductPrice from "./ResproductPrice/ResProductPrice";
import ResProductFeatures from "./ResproductPrice/ResProductFratures";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ResMainProductPrice(props) {
    const matches = useMediaQuery("(min-width:769px)");

    return (
        <>

            <Container>
                <Box sx={{height: '100vh'}}>
                    <ResHeaderPrice product={props.product}/>
                    <ResProductPrice product={props.product}/>
                    <ResProductFeatures/>
                </Box>
            </Container>
        </>
    )
}