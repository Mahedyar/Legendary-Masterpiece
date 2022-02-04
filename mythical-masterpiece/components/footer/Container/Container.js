import SymbolsHolder from './SymbolsHolder';
import Titr from './Titr';
import {Grid ,Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    boxShadow:'none',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Container() {
    return (
        <>

            <Box sx={{ width: '100%',margin:'auto',paddingTop:3,}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                    <Grid  item sm={6} >
                        <Item><SymbolsHolder/></Item>
                    </Grid>

                    <Grid item sm={6}>
                        <Item><Titr/></Item>
                    </Grid>
                </Grid>
            </Box>


        </>
    )
}