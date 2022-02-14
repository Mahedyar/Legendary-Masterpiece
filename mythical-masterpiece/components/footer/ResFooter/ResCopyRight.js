import {Box, Grid} from "@mui/material"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function CopyRightHolder() {

    const Item = styled(Paper)(({ theme }) => ({
        boxShadow:'none',
        padding: theme.spacing(1),
        textAlign: 'center',
        color:  "#818181",
        background:"#f5f5f5",
        fontsize:10,
        direction:"rtl",

    }));
    return (
        <Box sx={{background:"#f5f5f5"}}>

            <Grid >
                <Grid  sm={12}>
                    <Item>
                        <Typography variant="caption" sx={{fontSize:'0.625rem'}} >کلیه حقوق این سایت متعلق به شرکت نوین تجارت مجازی آریا (تیمچه) است. <div>Copyrights Timcheh Co - 1399©</div></Typography>
                    </Item>
                </Grid>

            </Grid>


        </Box>

    )
}