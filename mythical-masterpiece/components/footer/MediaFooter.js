import Footer from '../footer/Footer'
import ResFooter from '../footer/ResFooter/ResFooter'
import useMediaQuery from '@mui/material/useMediaQuery';
export default function MediaFooter(){
    const matches = useMediaQuery('(min-width:769px)');
    return(
        <>
            {matches && <Footer/>}
            {!matches && <ResFooter/>}
        </>
    )
}