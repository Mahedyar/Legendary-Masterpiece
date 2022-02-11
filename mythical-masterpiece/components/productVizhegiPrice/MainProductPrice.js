import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HeaderPrice from "./headerPrice/HeaderPrice";
import ProductPrice from "./mainPrice/ProductPrice";
import ProductFeatures from "./mainPrice/ProductFeatures";

export default function MainProductPrice() {
    return (
        <>

            <CssBaseline/>
            <Container maxWidth="sm">
                <Box sx={{bgcolor: '#fff', height: '100vh'}}>
                    <HeaderPrice/>
                    <ProductPrice/>
                    <ProductFeatures/>
                </Box>
            </Container>

        </>
    )
}