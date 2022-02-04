import {Box, Grid} from "@mui/material"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

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

        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item sm={12}>
                    <Item>
                        <span>کلیه حقوق این سایت متعلق به شرکت نوین تجارت مجازی آریا (تیمچه) است.   </span>

                        <span>Copyrights Timcheh Co - 1399©</span>
                    </Item>
                </Grid>

            </Grid>
        </Box>

    )
}