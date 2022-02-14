import SymbolsHolder from './SymbolsHolder';
import Titr from './Titr';
import {Grid ,Box,Container } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    boxShadow:'none',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ContainerFooter() {
    return (
        <>
<Container maxWidth={'lg'} >
            <Box sx={{ width: '100%',height:'auto',margin:'auto',paddingTop:3,direction:'rtl'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                    <Grid  item lg={7} md={12}>
                        <Item sx={{paddingBottom:'30px'}}><Titr/></Item>
                    </Grid>
                    <Grid item lg={5} md={12}>
                        <Item><SymbolsHolder/></Item>
                    </Grid>
                </Grid>
            </Box>

</Container>
        </>
    )
}