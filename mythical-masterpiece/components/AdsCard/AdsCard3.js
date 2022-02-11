import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import keyboard from "../../assets/Images/Ads/keyboard.png";
import monitor from "../../assets/Images/Ads/monitor.png";
import mouse from "../../assets/Images/Ads/mouse.png";
import speaker from "../../assets/Images/Ads/speaker.png";
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
                                    src={keyboard.src}
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={monitor.src}
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={mouse.src}
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src={speaker.src}
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
