import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Close from "./Close";

const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow:'none'
}));

export default function BoxModal(props){
    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Close onConfirm={props.onClose}/>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}