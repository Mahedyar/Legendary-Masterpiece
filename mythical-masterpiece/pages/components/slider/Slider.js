import DataSlider from "./DataSlider";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useState} from "react";
import {Container,Grid,Paper} from "@mui/material";
export default function Slider(){
    const [current,setCurrent] =useState(0)
    const length=DataSlider.length

    const nextSlide=()=>{
        setCurrent(current===length-1?0:current+1);
    }

    return(
        <>
            <Container maxWidth={'lg'}>
                <h1>Slider</h1>
                <ChevronRightIcon/>
                <ChevronLeftIcon/>
                <Grid sx={12}>
                    {DataSlider.map((slide,index)=>{
                        return <Paper key={slide.id}><img className={'img-slider'} src={slide.img} alt={'slider'}/></Paper>
                    })}
                </Grid>
            </Container>

        </>
    )
}