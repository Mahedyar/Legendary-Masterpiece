import * as React from 'react';
import Box from '@mui/material/Box';
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import {Container, Stack, Typography} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
// import {pskey1, psicon, psicon1, psicon2, pstext21, pstext1, pstext11, pstext2, pstext3, pstext31, pstext4, pshalf_background ,pssection1, psbox1} from './product.seller.style.css';
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';



export default function ProductSellerTable(props) {
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
                <Box className="pssection1">
                    <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                        <StoreOutlinedIcon className="psicon"/>
                        <Typography className='pstext1'> فروشنده: </Typography>
                        <a href="">
                            <Typography className='pstext11'> {props.sellers.seller} </Typography>
                        </a>
                        <a href="">
                            <KeyboardArrowLeftOutlinedIcon className="pskey1"/>
                        </a>
                    </Stack>
                    <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                        <Typography marginRight='65px' className='pstext2'> امتیاز: </Typography>
                        <Typography marginRight='-7px' className='pstext2'> {props.sellers.score} </Typography>
                        <a href="">
                            <InfoOutlinedIcon className="psicon1"/>
                        </a>
                        <CircleIcon className="psicon2"/>
                        <Typography className='pstext21' bgcolor='white'> فروشنده {props.sellers.sellerType}</Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                        <CheckCircleOutlineIcon className="psicon"/>
                        <Typography className='pstext3'> {props.sellers.guarantee} </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                        <NotificationsNoneIcon className="psicon"/>
                        <Typography className='pstext3'> {props.sellers.availability} </Typography>
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
