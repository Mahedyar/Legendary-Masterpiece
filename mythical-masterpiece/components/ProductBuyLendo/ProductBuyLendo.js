import * as React from 'react';
import Box from '@mui/material/Box';
import {Container, Stack, Typography} from "@mui/material";
import {pskey1, psicon, psicon1, psicon2, pstext21, pstext1, pstext11, pstext2, pstext3, pstext31, pstext4, pshalf_background ,pssection1, psbox1} from './product.lendo.style.css';
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

export default function BoxSx() {
    return (
        <Container>
            <Box
                sx={{
                    width: 300,
                    height: 227,
                    backgroundColor: 'white',
                    margin: '20px 5px',
                    borderRadius: '8px',
                }}
                className="psbox1"
            >
                <Box>
                    <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                        <CheckCircleOutlineIcon className="psicon"/>
                        <Typography className='pstext3'> گارانتی 18 ماهه شرکتی </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                        <NotificationsNoneIcon className="psicon"/>
                        <Typography className='pstext3'> تامین کالا از 10 روز کاری آینده </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                        <LocalShippingOutlinedIcon className="psicon"/>
                        <Typography className='pstext31 pshalf_background'> ارسال رایگان به سراسر کشور </Typography>
                    </Stack>
                </Box>
            </Box>
            <Box
                sx={{
                    width: 320,
                    height: 30,
                    backgroundColor: 'white',
                    margin: '20px 0',
                    borderRadius: '8px',
                }}>
                <Box>
                    <span className='pstext4'>
                                شما هم این محصول را برای فروش دارید؟
                            </span>
                    <span className='pstext4'>
                                <a href="">
                                    فروشنده شوید
                                </a>
                            </span>
                </Box>

            </Box>
        </Container>
    );
}
