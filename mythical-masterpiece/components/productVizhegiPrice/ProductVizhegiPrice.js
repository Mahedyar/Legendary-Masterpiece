import MainProductPrice from "./MainProductPrice";
import ResMainProductPrice from "./ResMainProductPrice";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function ProductVizhegiPrice(){
    const matches = useMediaQuery('(min-width:769px)');
    return(
        <>
            {matches?<MainProductPrice/>:<ResMainProductPrice/>}
        </>
    )
}