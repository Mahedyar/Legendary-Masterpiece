import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function ProductPage() {
    return (
        <Container maxWidth="lg">
        <Box
            sx={{
                width: '100%',
                height: '140px',
                color: '#fff',
                '& > .MuiBox-root > .MuiBox-root': {
                    p: 1,

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
                <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>Seller</Box>
                <Box sx={{ gridArea: 'info', bgcolor: 'orange' }}>info</Box>
                <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Image</Box>
                <Box sx={{ gridArea: 'stylesFeatures', bgcolor: 'gold' }}>stylesFeatures</Box>
                <Box sx={{ gridArea: 'tabList', bgcolor: '#20c02b' }}>tabList</Box>
                <Box sx={{ gridArea: 'SimilarProduct', bgcolor: 'peachpuff' }}>SimilarProduct</Box>
                <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>Footer</Box>


            </Box>
        </Box>
        </Container>
    );
}
