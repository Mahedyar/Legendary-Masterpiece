import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResHeaderPrice from '../../components/productVizhegiPrice/ResproductPrice/ResHeaderPrice'
import ResProductPrice from "./ResproductPrice/ResProductPrice";
import ResProductFeatures from "./ResproductPrice/ResProductFratures";

export default function ResMainProductPrice() {
    return (
        <>

            <Container>
                <Box sx={{height: '100vh'}}>
                    <ResHeaderPrice/>
                    <ResProductPrice/>
                    <ResProductFeatures/>

                </Box>
            </Container>
        </>
    )
}