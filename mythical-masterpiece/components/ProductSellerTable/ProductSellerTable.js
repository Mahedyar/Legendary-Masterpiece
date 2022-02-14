import * as React from 'react';
import {styled} from '@mui/material/styles';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import {Container, Stack, Typography} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
// import {pskey1, psicon, psicon1, psicon2, pstext21, pstext1, pstext11, pstext2, pstext3, pstext31, pstext4, pshalf_background ,pssection1, psbox1} from './productSellerStyle.css';
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const BootstrapTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} arrow classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
    },
}));

export default function ProductSellerTable(props) {
    return (
        // <Container >
            <div style={{
                margin: '1rem 0rem 4rem 0.35rem',
            }}>
                <Box
                    sx={{
                        display: 'block',
                        width: 318,
                        height: 227,
                        backgroundColor: 'white',
                        // margin: '2rem 0.5rem 0 0',
                        borderRadius: '8px',
                    }}
                    className="psbox1"
                >
                    <Box className="pssection1">
                        <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                            <StoreOutlinedIcon style={{
                                margin: '1rem 1rem 0 0',
                                width: '20px',
                                height: '20px',
                            }}/>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                margin: '1rem 1rem 0 0',
                            }}>
                                <Typography className='pstext1'> فروشنده: </Typography>
                                <a href="">
                                    <Typography style={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: 'rgba(24, 145, 246, 0.87)',
                                        margin: '0 0.3rem 0 0',
                                    }}>
                                        {props.sellers.seller}
                                    </Typography>
                                </a>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                color: 'darkgrey',
                                margin: '1rem 5.5rem 1rem 0',
                                width: '12px',
                                height: '12px',
                            }}>
                                <a href="">
                                    <KeyboardArrowLeftOutlinedIcon style={{
                                        display: 'flex',
                                        width: '20px',
                                        height: '20px',
                                    }}/>
                                </a>
                            </div>
                        </Stack>
                        <Stack dir="rtl" direction="row" alignItems="center" gap={1}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                margin: '0.3rem 3.8rem 0 0',
                            }}>
                                <Typography className='pstext2'> امتیاز: </Typography>
                                <Typography className='pstext2'> {props.sellers.score} </Typography>
                                <a href="">
                                    <BootstrapTooltip
                                        title={
                                            <React.Fragment>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexWrap: 'wrap',
                                                    width: '245px',
                                                    height: '140px',
                                                    margin: '0.3rem 0.2rem 1.2rem 0',
                                                    borderRadius: '5px',
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        flexWrap: 'wrap',
                                                        width: '240px',
                                                        height: '24px',
                                                        margin: '0 0.2rem 1rem 0',
                                                        borderRadius: '5px',
                                                    }}>
                                                        <Typography style={{
                                                            fontSize: '16px',
                                                            margin: '0 0.8rem 1rem 0.4rem',
                                                            color: 'black',
                                                        }}>بیشتر از ۲۵۰ امتیاز</Typography>
                                                        <Typography style={{
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                            margin: '0 0 1rem 0.8rem',
                                                            color: '#1bb7cc',
                                                        }}>فروشنده ویژه</Typography>
                                                        <CircleIcon style={{
                                                            width: '16px',
                                                            height: '16px',
                                                            color: '#1bb7cc',
                                                            margin: '0 0 1rem 0.5rem',
                                                        }}/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        flexWrap: 'wrap',
                                                        width: '240px',
                                                        height: '24px',
                                                        margin: '0 0.2rem 1rem 0',
                                                        borderRadius: '5px',
                                                    }}>
                                                        <Typography style={{
                                                            fontSize: '16px',
                                                            margin: '0 0.2rem 1rem 0.3rem',
                                                            color: 'black',
                                                        }}>از ۱۵۰ تا ۲۴۹ امتیاز</Typography>
                                                        <Typography style={{
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                            margin: '0 0.2rem 1rem 0.6rem',
                                                            color: '#09b909',
                                                        }}>فروشنده خوب</Typography>
                                                        <CircleIcon style={{
                                                            width: '16px',
                                                            height: '16px',
                                                            color: '#09b909',
                                                            margin: '0 0 1rem 0.5rem',
                                                        }}/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        flexWrap: 'wrap',
                                                        width: '240px',
                                                        height: '24px',
                                                        margin: '0 0.2rem 1rem 0',
                                                        borderRadius: '5px',
                                                    }}>
                                                        <Typography style={{
                                                            fontSize: '16px',
                                                            margin: '0 0.2rem 1rem 0.3rem',
                                                            color: 'black',
                                                        }}>از ۵۰ تا ۱۴۹ امتیاز</Typography>
                                                        <Typography style={{
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                            margin: '0 0.2rem 1rem 0.4rem',
                                                            color: '#f67c19',
                                                        }}>فروشنده معمولی</Typography>
                                                        <CircleIcon style={{
                                                            width: '16px',
                                                            height: '16px',
                                                            color: '#f67c19',
                                                            margin: '0 0 1rem 0.4rem',
                                                        }}/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        flexWrap: 'wrap',
                                                        width: '240px',
                                                        height: '24px',
                                                        margin: '0 0.2rem 1rem 0',
                                                        borderRadius: '5px',
                                                    }}>
                                                        <Typography style={{
                                                            fontSize: '16px',
                                                            margin: '0 0.4rem 1rem 0.5rem',
                                                            color: 'black',
                                                        }}>از ۰ تا ۴۹ امتیاز</Typography>
                                                        <Typography style={{
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                            margin: '0 0.2rem 1rem 1.1rem',
                                                            color: '#d32810',
                                                        }}>فروشنده ضعیف</Typography>
                                                        <CircleIcon style={{
                                                            width: '16px',
                                                            height: '16px',
                                                            color: '#d32810',
                                                            margin: '0 0 1rem 0.6rem',
                                                        }}/>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        }
                                    >
                                        <InfoOutlinedIcon style={{
                                            width: '15px',
                                            height: '15px',
                                            color: 'darkgray',
                                            margin: '0 0.1rem 1rem 0',
                                        }}
                                        />

                                    </BootstrapTooltip>
                                </a>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                backgroundColor: 'white',
                                // width: '110px',
                                height: '24px',
                                margin: '0.3rem 2rem 1.2rem 0',
                                borderRadius: '5px',
                            }}>
                                <CircleIcon style={{
                                    width: '16px',
                                    height: '16px',
                                    color: `${props.sellers.color}`,
                                    margin: '0 0.2rem 2rem 0.3rem',
                                }}/>
                                <Typography style={{
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    margin: '0 0.2rem 2rem 0.3rem',
                                }}> فروشنده {props.sellers.sellerType}</Typography>
                            </div>
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
                            <LocalShippingOutlinedIcon style={{
                                width: '15px',
                                height: '15px',
                                margin: '16px 18px 16px 10px',
                            }}/>
                            <Typography className='pstext31 pshalf_background'> ارسال رایگان به سراسر کشور </Typography>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: 320,
                        height: 30,
                        backgroundColor: 'white',
                        margin: '10px 0',
                        borderRadius: '8px',
                    }}>
                    <Box>
                                        <span style={{
                                            fontSize: '13px',
                                            margin: '0 0.1rem 0 0.1rem',
                                        }}>
                                        شما هم این محصول را برای فروش دارید؟
                                        </span>
                        <span style={{
                            fontSize: '13px',
                            margin: '0 0.3rem 0 0',
                            color: 'rgba(24, 145, 246, 0.87)',
                        }}>
                                        <a href="">
                                        فروشنده شوید
                                        </a>
                                        </span>
                    </Box>

                </Box>
            </div>
         // </Container>
    );
}
