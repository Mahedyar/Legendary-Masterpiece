import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import seri301 from "../../assets/Images/Ads/seri301.png";
import seri302 from "../../assets/Images/Ads/seri302.png";
import seri305 from "../../assets/Images/Ads/seri305.png";
import seri304 from "../../assets/Images/Ads/seri304.png";
import seri303 from "../../assets/Images/Ads/seri303.png";
// import {img41, img42, img43, img44} from "./ads.card4.style.css"

export default function AdsCard4() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={0}>
                    <Grid item md={8} lg={8}>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={7} lg={7}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src={seri301.src}
                                                className="img41"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={5} lg={5}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src={seri302.src}
                                                className="img42"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6} md={5} lg={5}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src={seri305.src}
                                                className="img43"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6} md={7} lg={7}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src={seri304.src}
                                                className="img44"/>
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
                                    src={seri303.src}
                                    className="img45"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
}
