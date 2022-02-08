import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
// import {img41, img42, img43, img44} from "./ads.card4.style.css"

export default function AdsCard4() {
    return (
        <Container>
            <Box sx={{flexGrow: 1}} className="adsbox">
                <Grid container spacing={0}>
                    <Grid item md={8} lg={8}>
                        <Box>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={7} lg={7}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src="https://images.timcheh.com/1/fill/1104/600/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/seri3-03-1104.jpg"
                                                className="img41"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={5} lg={5}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src="https://images.timcheh.com/1/fill/632/600/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/seri3-02-1104.jpg"
                                                className="img42"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6} md={5} lg={5}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src="https://images.timcheh.com/1/fill/760/600/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/seri3-05-1104.jpg"
                                                className="img43"/>
                                        </a>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6} md={7} lg={7}>
                                    <Paper elevation={0}>
                                        <a href="">
                                            <img
                                                src="https://images.timcheh.com/1/fill/976/600/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/seri3-04-1104.jpg"
                                                className="img43"/>
                                        </a>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} md={4} lg={4}>
                        <Paper elevation={0}>
                            <a href="">
                                <img
                                    src="https://images.timcheh.com/1/fill/760/1248/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/seri3-01-1104.jpg"
                                    className="img44"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
}
