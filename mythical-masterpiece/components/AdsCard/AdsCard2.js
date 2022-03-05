import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import Image from "next/image";
import refrigerator from "../../assets/Images/Ads/refrigerator.png";
import washing_machine from "../../assets/Images/Ads/washing_machine.png";

export default function AdsCard2() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="">
                                <Image
                                    src={washing_machine}
                                    alt="ماشین لباسشویی"
                                    className="img21"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="">
                                <Image
                                    src={refrigerator}
                                    alt="یخچال"
                                    className="img21"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
