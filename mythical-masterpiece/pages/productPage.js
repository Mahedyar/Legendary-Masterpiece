import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MainProductImage from "../components/productImage/MainProductImage";
import ProductVizhegiPrice from "../components/productVizhegiPrice/ProductVizhegiPrice";
import ProductSellerTable from "../components/ProductSellerTable/ProductSellerTable";
import ProductBuyLendo from "../components/ProductBuyLendo/ProductBuyLendo";


export default function ProductPage() {
    const sellers =
        {
            seller : "موبایل استور",
            score : "۱۵۰",
            sellerType : "خوب",
            guarantee : "گارانتی ۱۸ ماهه شرکتی",
            availability : "موجود در انبار تیمچه",
        };
    const lendo =
        {
            prepayment : "۰",
            installment : "۴۶۴,۲۶۷",
            reward : "۲۰,۰۰۰",
        };

    return (
        <Container maxWidth="lg">
        <Box
            sx={{
                width: '100%',
                height: '140px',
                '& > .MuiBox-root > .MuiBox-root': {
                    p: 0.5,

                    fontSize: '0.875rem',
                    fontWeight: '700',
                },
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(8, 1fr)',
                    gap: 1,
                    gridTemplateRows: 'auto',
                    gridTemplateAreas: `"header header header header header header header header"
                                         "breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb"
                                         ". . . . . . . . "
                                         ". . . . . . . . "
                                        "main main info info info sidebar sidebar sidebar "
                                        "stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures "
                                         "tabList tabList tabList tabList  tabList tabList tabList tabList"
                                         "SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct"
                                         ". . . . . . . . "
                                         ". . . . . . . . "
                                         "footer footer footer footer  footer footer footer footer"`,
                }}
            >
                <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
                <Box sx={{ gridArea: 'breadCrumb', bgcolor: 'pink' }}>breadCrumb</Box>
                <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}><ProductSellerTable sellers={sellers}/></Box>
                <Box sx={{ gridArea: 'info', bgcolor: 'orange' }}><ProductVizhegiPrice/> <ProductBuyLendo lendo={lendo}/></Box>
                <Box sx={{ gridArea: 'sidebar', bgcolor: 'red' }}><MainProductImage/></Box>
                <Box sx={{ gridArea: 'stylesFeatures', bgcolor: 'gold' }}>stylesFeatures</Box>
                <Box sx={{ gridArea: 'tabList', bgcolor: '#20c02b' }}>tabList</Box>
                <Box sx={{ gridArea: 'SimilarProduct', bgcolor: 'peachpuff' }}>SimilarProduct</Box>
                <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>Footer</Box>

            </Box>
        </Box>
        </Container>
    );
}
