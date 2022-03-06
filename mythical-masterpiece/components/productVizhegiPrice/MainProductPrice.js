import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import HeaderPrice from "./headerPrice/HeaderPrice";
import ProductPrice from "./mainPrice/ProductPrice";
import ProductFeatures from "./mainPrice/ProductFeatures";

export default function MainProductPrice(props) {
    return (
        <>
            <CssBaseline/>
                <Box sx={{bgcolor: '#fff', height: '100vh'}}>
                    <HeaderPrice product={props.product}/>
                    <ProductPrice product={props.product}/>
                    <ProductFeatures/>
                </Box>


        </>
    )
}