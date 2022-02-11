import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import timchebefrosh from "../../assets/Images/Ads/timchebefrosh.png";
import kharidaghsati from "../../assets/Images/Ads/kharidaghsati.png"
// import {img11, img12} from './ads.card1.style.css';


export default function AdsCard1() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={timchebefrosh.src}
                                    className="img11"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={kharidaghsati.src}
                                    className="img12"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
