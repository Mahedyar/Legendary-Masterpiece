import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
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
                                    src="https://images.timcheh.com/1/fill/630/408/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/keyboard-1002.jpg"
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src="https://images.timcheh.com/1/fill/630/408/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/monitor-1002.jpg"
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src="https://images.timcheh.com/1/fill/630/408/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/mouse-1002.jpg"
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src="https://images.timcheh.com/1/fill/630/408/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/speaker-1002.jpg"
                                    className="img31"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
