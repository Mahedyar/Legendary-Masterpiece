import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
// import {img21} from './ads.card2.style.css';

export default function AdsCard6() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src="https://images.timcheh.com/1/fill/1276/312/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/jofti-paein-shampoo-1104.jpg"
                                    className="img21"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src="https://images.timcheh.com/1/fill/1276/312/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/jofti-paein-saboon-1104.jpg"
                                    className="img21"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}