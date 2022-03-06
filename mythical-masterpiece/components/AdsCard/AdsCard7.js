import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import Image from "next/image";
import shahneshinsho from "../../public/Images/Ads/shahneshinsho.png";
import free_post from "../../public/Images/Ads/free_post.png";

export default function AdsCard7() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="#">
                                <Image
                                    src={shahneshinsho}
                                    className="img21"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="#">
                                <Image
                                    src={free_post}
                                    className="img21"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
