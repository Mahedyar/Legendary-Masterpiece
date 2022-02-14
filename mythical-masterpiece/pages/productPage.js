import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MainProductImage from "../components/productImage/MainProductImage";
import ProductVizhegiPrice from "../components/productVizhegiPrice/ProductVizhegiPrice";
import ProductSellerTable from "../components/ProductSellerTable/ProductSellerTable";
import ProductBuyLendo from "../components/ProductBuyLendo/ProductBuyLendo";

import ProductBigDescription from "../components/productBigDescription/ProductBigDescription"
import DescriptionTopBar from '../components/productBigDescription/descriptionTopBar';


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
                    gridTemplateAreas: `
                                         "breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb"
                                         ". . . . . . . . "
                                         ". . . . . . . . "
                                        "main main info info info sidebar sidebar sidebar "
                                        "stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures "
                                         "tabList tabList tabList tabList  tabList tabList tabList tabList"
                                         "SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct"
                                         ". . . . . . . . "
                                         ". . . . . . . . "
                                         `,
                }}
            >

                <Box sx={{ gridArea: 'breadCrumb', bgcolor: 'pink' }}>breadCrumb</Box>
                <Box sx={{ gridArea: 'main',  }}><ProductSellerTable sellers={sellers}/></Box>
                <Box sx={{ gridArea: 'info',  }}><ProductVizhegiPrice/> <ProductBuyLendo lendo={lendo}/></Box>
                <Box sx={{ gridArea: 'sidebar', }}><MainProductImage/></Box>
                <Box sx={{ gridArea: 'stylesFeatures',}}><DescriptionTopBar/></Box>
                <Box sx={{ gridArea: 'tabList',  }}>


                        <Box sx={{marginTop : "15px" , border : "2px solid #d9d9d9" , borderRadius : "15px" }}>
                            <ProductBigDescription />
                        </Box>


                </Box>
                <Box sx={{ gridArea: 'SimilarProduct', bgcolor: 'peachpuff' }}>SimilarProduct</Box>


            </Box>
        </Box>
        </Container>
    );
}
