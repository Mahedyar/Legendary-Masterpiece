import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import taileft from "../../assets/Images/Ads/taileft.gif";
import tairight from "../../assets/Images/Ads/tairight.jpg";
// import {img21} from './ads.card2.style.css';

export default function AdsCard7() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={taileft.src}
                                    className="img21"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={tairight.src}
                                    className="img21"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
