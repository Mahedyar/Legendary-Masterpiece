import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SubButton from "./SubButton";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ButtonBuy(){
    const matches = useMediaQuery('(min-width:1025px)');
    return(
        <>

            <Button variant="contained" sx={{width:matches?"500px":"100%",height:45,borderRadius:3}}>
                <Typography variant="body1" sx={{fontSize:18}}>افزودن به سبد خرید</Typography>
            </Button>
            <SubButton/>
        </>
    )
}