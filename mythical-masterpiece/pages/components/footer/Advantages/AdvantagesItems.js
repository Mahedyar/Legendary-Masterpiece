import {Grid} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';


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

            <Grid lg={2.4} sm={6} xs={12} >
                <Item>
                    <img  src={props.image}/>
                    <span>
                    <Typography variant="subtitle2" sx={{fontWeight:'bold'}} >{props.title}</Typography>
                    <Typography variant="body2" sx={{fontSize:14}}> {props.description}</Typography>
                </span>
                </Item>
            </Grid>


    )
}