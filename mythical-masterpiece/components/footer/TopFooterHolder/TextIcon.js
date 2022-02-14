import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Icon from "./Icon";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
    textAlign: 'center',
   display:'flex',
    flexDirection:'column',
    justifyContent:'center',



}));

export default function TextIcon(){
    return(
        <>
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}

        >
            <Item sx={{boxShadow:0,height:"30px",background:'#fafafa'}}><Typography  variant="subtitle2">تیمچه در شبکه های اجتماعی: </Typography></Item>
            <Item sx={{boxShadow:0,height:"30px",background:'#fafafa'}}><Icon/></Item>
        </Stack>

        </>
    )
}