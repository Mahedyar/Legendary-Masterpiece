import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from "next/image";
import topImagePhone from '../../../public/Images/Header/timche-mobile.gif';
import Hamberger from "./Hamberger";
import classes from "../../../styles/Header.module.css";
import SearchBox from "../SearchBox";


export default function ResHeader(){
    return(
        <>
            <img src={topImagePhone.src} className={classes.gifImage} alt="someThing"/>
            <Container sx={{zIndex:100000000000}}>
              <Hamberger/>
            </Container>
            <Box sx={{ borderBottom:"1px solid #d9d9d9",width: '100%' }} />
            <Container sx={{zIndex:100000000000 ,direction:'rtl'}}>
                <SearchBox />
            </Container>



        </>
    )
}