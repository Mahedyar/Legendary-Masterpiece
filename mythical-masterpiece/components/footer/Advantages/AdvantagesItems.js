import {Grid,Box,Container,Typography} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';

const Item = styled(Paper)(({theme}) => ({
    boxShadow: 'none',
    padding: theme.spacing(5),
    textAlign: 'right',
    background: "#fff",
    direction: "rtl",
    display:'flex',
    justifyContent:'right',

}));
export default function AdvantagesItems(props){
    return(
        <Grid sm={2.4} >
            <Item>
                <div><img  src={props.image}/></div>

                <Container >
                    <Typography variant="button" sx={{fontSize:14,color:"#434343",fontWeight:"700",lineHeight:1.5,letterSpacing:0}}>{props.title}</Typography>
                    <Typography variant="body2" sx={{fontSize:12,color:"#84868e"}}> {props.description}</Typography>
                </Container>

            </Item>
        </Grid>
    )
}