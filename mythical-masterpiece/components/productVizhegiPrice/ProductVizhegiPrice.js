import MainProductPrice from "./MainProductPrice";
import ResMainProductPrice from "./ResMainProductPrice";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ProductVizhegiPrice(props){
    const matches = useMediaQuery('(min-width:1025px)');
    return(
        <>
            {matches?<MainProductPrice product={props.product}/>:<ResMainProductPrice product={props.product}/>}
        </>
    )
}