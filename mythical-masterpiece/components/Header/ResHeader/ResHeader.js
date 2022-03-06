import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import topImagePhone from '../../../public/Images/Header/timche-mobile.gif';
import Hamberger from "./Hamberger";

import classes from "../Header.module.css";
import HeaderGif from "../../../public/Images/Header/timche-header-add.gif";
import SearchBox from "../SearchBox";


export default function ResHeader(){
    return(
        <>
            <img src={topImagePhone.src} className={classes.gifImage} alt="someThing"/>

            <Container sx={{zIndex:100000000000}}>
              <Hamberger/>
            </Container>
            <Box sx={{ borderBottom:"1px solid #d9d9d9",width: '100%' }} />
            <Container sx={{zIndex:100000000000 ,direction:'rtl',paddingRight:'-50px'}}>
                <SearchBox />
            </Container>



        </>
    )
}