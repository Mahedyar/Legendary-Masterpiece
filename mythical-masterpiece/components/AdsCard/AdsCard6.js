import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import Image from "next/image";
import shampoo from "../../public/Images/Ads/shampoo.png";
import saboon from "../../public/Images/Ads/saboon.png";

export default function AdsCard6() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="#">
                                <Image
                                    src={shampoo}
                                    className="img21"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="#">
                                <Image
                                    src={saboon}
                                    className="img21"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
