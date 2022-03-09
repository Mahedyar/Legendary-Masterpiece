import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResHeaderPrice from '../../components/productVizhegiPrice/ResproductPrice/ResHeaderPrice'
import ResProductPrice from "./ResproductPrice/ResProductPrice";
import ResProductFeatures from "./ResproductPrice/ResProductFratures";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Grid} from "@mui/material";


export default function ResMainProductPrice(props) {
    const matches = useMediaQuery("(min-width:1025px)");
    return (
        <>
            <Grid container justifyContent={"center"}>
                <Container>
                    <Grid item xs="12">
                        <ResHeaderPrice product={props.product}/>
                        <ResProductPrice product={props.product}/>
                        <ResProductFeatures/>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
}