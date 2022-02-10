import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SubButton from "./SubButton";

export default function ButtonBuy(){
    return(
        <>

            <Button variant="contained" sx={{width:500,height:45,borderRadius:3}}>
                <Typography variant="body1" sx={{fontSize:18}}>افزودن به سبد خرید</Typography>
            </Button>
            <SubButton/>
        </>
    )
}