import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
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
                                    src="https://images.timcheh.com/1/fill/2592/410/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/barik-tala-1021.jpg"
                                    className="img51"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
