import ResHeader from "./ResHeader/ResHeader";
import Header from "./Header";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MainHeader(){
    const matches = useMediaQuery('(min-width:1025px)');
    return(
        <>
            {matches?<Header/>:<ResHeader/>}
        </>
    )
}