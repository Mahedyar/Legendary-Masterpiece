import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import mozaikifatherday1 from "../../assets/Images/Ads/mozaikifatherday1.jpg";
import mozaikifatherday2 from "../../assets/Images/Ads/mozaikifatherday2.jpg";
import mozaikifatherday3 from "../../assets/Images/Ads/mozaikifatherday3.jpg";
import mozaikifatherday4 from "../../assets/Images/Ads/mozaikifatherday4.jpg";
import mozaikifatherday5 from "../../assets/Images/Ads/mozaikifatherday5.jpg";
// import {img41, img42, img43, img44} from "./ads.card4.style.css"

export default function AdsCard4() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={1}>
                    <Grid item md={8} lg={8}>
                        <Box>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={7} lg={7}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src={mozaikifatherday1.src}
                                                className="img41"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={5} lg={5}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src={mozaikifatherday2.src}
                                                className="img42"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6} md={5} lg={5}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src={mozaikifatherday3.src}
                                                className="img43"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6} md={7} lg={7}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src={mozaikifatherday4.src}
                                                className="img43"/>
                                        </a>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} lg={4}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={mozaikifatherday5.src}
                                    className="img44"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
}
