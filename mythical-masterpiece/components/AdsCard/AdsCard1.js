import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
// import {img11, img12} from './ads.card1.style.css';


export default function AdsCard1() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src="https://images.timcheh.com/1/fill/1274/544/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/jofti-bala-dar-timche-befrosh-1-1104.jpg"
                                    className="img11"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src="https://images.timcheh.com/1/fill/1274/544/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/jofti-bala-kharid-aghsati-1104.jpg"
                                    className="img12"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
