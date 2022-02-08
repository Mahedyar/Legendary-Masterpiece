import * as React from 'react';
import Box from '@mui/material/Box';
import {Container, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {img1, box11, text11} from "./little.box1.style.css";


export default function FlexWrap() {
    return (
        <Container>
            <div style={{width: '100%'}}>
                <Box className='box11'>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://images.timcheh.com/1/fill/300/300/sm/true/plain/https://static.timcheh.com/uploads/manual/images/home/web/zire_slider/12.jpg"
                                className="img1"/>
                            <Typography className="text11"> کنسول بازی </Typography>
                        </a>
                    </Paper>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://images.timcheh.com/1/fill/300/300/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/mashinlebasshoe1534.jpg"
                                className="img1"/>
                            <Typography className="text11"> ماشین لباسشویی </Typography>
                        </a>
                    </Paper>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://images.timcheh.com/1/fill/300/300/sm/true/plain/https://static.timcheh.com/uploads/manual/images/home/web/zire_slider/03.jpg"
                                className="img1"/>
                            <Typography> هارد اکسترنال </Typography>
                        </a>
                    </Paper>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://images.timcheh.com/1/fill/300/300/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/goldr3665.jpg"
                                className="img1"/>
                            <Typography className="text11"> طلا </Typography>
                        </a>
                    </Paper>
                    <Paper elevation={0} >
                        <a href="">
                            <img
                                src="https://images.timcheh.com/1/fill/300/300/sm/true/plain/https://static.timcheh.com/uploads/manual/images/home/web/zire_slider/05.jpg"
                                className="img1"/>
                            <Typography className="text11"> تلویزیون </Typography>
                        </a>
                    </Paper>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://static.timcheh.com/uploads/manual/images/homepage/desktop/zir-slider-02vc423.gif"
                                className="img1"/>
                        </a>
                    </Paper>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://static.timcheh.com/uploads/manual/images/homepage/desktop/zir-slider-01vc423.gif"
                                className="img1"/>
                        </a>
                    </Paper>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://images.timcheh.com/1/fill/300/300/sm/true/plain/https://static.timcheh.com/uploads/manual/images/home/web/zire_slider/yakhchal.jpg"
                                className="img1"/>
                            <Typography className="text11"> یخچال </Typography>
                        </a>
                    </Paper>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://images.timcheh.com/1/fill/300/300/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/130901.jpg"
                                className="img1"/>
                            <Typography className="text11"> بخاری </Typography>
                        </a>
                    </Paper>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://images.timcheh.com/1/fill/300/300/sm/true/plain/https://static.timcheh.com/uploads/manual/images/homepage/desktop/zafshoee765754.jpg"
                                className="img1"/>
                            <Typography className="text11"> ماشین ظرفشویی </Typography>
                        </a>
                    </Paper>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://images.timcheh.com/1/fill/300/300/sm/true/plain/https://static.timcheh.com/uploads/manual/images/home/web/zire_slider/02.jpg"
                                className="img1"/>
                            <Typography className="text11"> لپ تاپ </Typography>
                        </a>
                    </Paper>
                    <Paper elevation={0}>
                        <a href="">
                            <img
                                src="https://images.timcheh.com/1/fill/300/300/sm/true/plain/https://static.timcheh.com/uploads/manual/images/home/web/zire_slider/01.jpg"
                                className="img1"/>
                            <Typography className="text11"> گوشی موبایل </Typography>
                        </a>
                    </Paper>
                </Box>
            </div>
        </Container>
    );
}
