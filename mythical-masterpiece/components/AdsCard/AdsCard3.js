import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import Image from "next/image";
import keyboard from "../../assets/Images/Ads/keyboard.png";
import monitor from "../../assets/Images/Ads/monitor.png";
import mouse from "../../assets/Images/Ads/mouse.png";
import speaker from "../../assets/Images/Ads/speaker.png";


export default function AdsCard3() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="#">
                                <Image
                                    src={keyboard}
                                    alt="کیبورد"
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="#">
                                <Image
                                    src={monitor}
                                    alt="مانیتور"
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <Image
                                    src={mouse}
                                    alt="موس"
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <Image
                                    src={speaker}
                                    alt="بلندگو"
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
