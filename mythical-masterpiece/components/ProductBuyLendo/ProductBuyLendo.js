import * as React from 'react';
import Box from '@mui/material/Box';
import {Container, Stack, Typography} from "@mui/material";
// import {pskey1, psicon, psicon1, psicon2, pstext21, pstext1, pstext11, pstext2, pstext3, pstext31, pstext4, pshalf_background ,pssection1, psbox1} from './productLendoStyle.css';
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import lendosign from "../../assets/Images/Lendo/lendosign.svg";
import shahneshin from "../../assets/Images/Lendo/shahneshin.svg";

export default function ProductBuyLendo(props) {
    return (
        <Container>
            <div style={{
                // margin: '6rem 0 0 18rem'
            }}>
                <Box
                    sx={{
                        width: 460,
                        height: 140,
                        backgroundColor: 'white',
                        // margin: '20px 5px',
                        borderRadius: '8px',
                        // margin: '5rem 0 0 8rem',
                        border: '1px solid #d9d9d9',
                    }}
                >
                    <Box>
                        <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                            <img style={{
                                width: '16px',
                                height: '16px',
                                margin: '0.8rem 1rem 0.5rem 0.4rem'
                            }} src={lendosign.src}/>
                            <Typography style={{
                                fontSize: '16px',
                                margin: '0.8rem 0 0.5rem 0.4rem',
                            }}> خرید اقساطی از لندو (بدون چک و ضامن) </Typography>
                            <a href="">
                                <div style={{
                                    display: 'flex',
                                    margin: '0.8rem 3rem 0.5rem 0',
                                }} className="pltext1"
                                >
                                    <Typography style={{
                                        fontSize: '16px',
                                        margin: '0 0 0 0'
                                    }}>اطلاعات بیشتر</Typography>
                                    <KeyboardArrowLeftOutlinedIcon style={{
                                        width: '18px',
                                        height: '18px',
                                        margin: '0.2rem 0.4rem 0 0'
                                    }}/>

                                </div>
                            </a>
                        </Stack>
                    </Box>
                    <div style={{
                        borderBottom: '1px solid #d9d9d9',
                        width: '420px',
                        margin: '0.3rem 0 0.3rem 1.2rem',
                    }}
                    >
                    </div>
                    <Box>
                        <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                            <Typography style={{
                                fontSize: '17px',
                                margin: '0.2rem 3.2rem 0.4rem 3.2rem',
                            }}> پیش پرداخت </Typography>
                            <Typography style={{
                                fontSize: '17px',
                                margin: '0.2rem 1.4rem 0.4rem 3.2rem',
                            }}><strong>{props.lendo.prepayment}</strong> تومان</Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                            <Typography style={{
                                fontSize: '17px',
                                margin: '0.2rem 3.2rem 0.1rem 3.2rem',
                            }}> اقساط(۱۲ماهه) </Typography>
                            <Typography style={{
                                fontSize: '17px',
                                margin: '0.2rem 0.5rem 0.1rem 3.2rem',
                            }}><strong>{props.lendo.installment}</strong> تومان</Typography>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: 460,
                        height: 48,
                        margin: '0.7rem 0 0 0rem',
                        border: '1px solid #d9d9d9',
                        borderRadius: '8px',
                    }}
                    style={{
                        backgroundColor: '#f5f5f5',
                    }}>
                    <Box>
                        <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                            <img src={shahneshin.src} style={{
                                width: '15px',
                                height: '15px',
                                margin: '0.8rem 0.4rem 0 0',
                            }}/>
                            <Typography style={{
                                fontSize: '15px',
                                fontWeight: 'bolder',
                                margin: '0.8rem -0.2rem 0 0',
                            }}>شاه‌نشین</Typography>
                            <Typography style={{
                                fontSize: '14px',
                                margin: '0.8rem 1.7rem 0.2rem 0',
                            }}>{props.lendo.reward} تومان پاداش نقدی برای اعضاء</Typography>
                            <a href="">
                                <Typography style={{
                                    fontSize: '14px',
                                    margin: '0.8rem 1.6rem 0.2rem 0',
                                    color: 'rgb(0, 130, 253)',
                                }}>راهنمای عضویت رایگان</Typography>
                            </a>
                        </Stack>
                    </Box>
                </Box>
            </div>
        </Container>
    );
}
