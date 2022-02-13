import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import janebikhodro from "../../assets/Images/Ads/janebikhodro.jpg";
import manshoe from "../../assets/Images/Ads/manshoe.jpg";
import powerbank from "../../assets/Images/Ads/powerbank.jpg";
import abzar from "../../assets/Images/Ads/abzar.jpg";
// import {img31} from './ads.card3.style.css';

export default function AdsCard3() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={janebikhodro.src}
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={manshoe.src}
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={powerbank.src}
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={abzar.src}
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
