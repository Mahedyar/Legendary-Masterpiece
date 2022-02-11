import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import bariktala from "../../assets/Images/Ads/bariktala.png";
// import {img21} from './ads.card2.style.css';

export default function AdsCard5() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={bariktala.src}
                                    className="img51"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
