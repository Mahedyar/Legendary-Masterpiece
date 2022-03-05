import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import Image from "next/image";
import timche_befroosh from "../../assets/Images/Ads/timche_befroosh.png";
import kharid_aghsati from "../../assets/Images/Ads/kharid_aghsati.png";


export default function AdsCard1() {
    return (
        <Container>
            <Box className="adsbox">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="#">
                                <Image
                                    src={timche_befroosh}
                                    alt="در تیمچه بفروش"
                                    className="img11"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper elevation={0}>
                            <a href="#">
                                <Image
                                    src={kharid_aghsati}
                                    alt="خرید اقساطی"
                                    className="img12"/>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
