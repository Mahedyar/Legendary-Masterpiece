import {Grid,Box} from "@mui/material";
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
        <Grid  sm={2.4}>
            <Item>
                <img  src={props.image}/>
                <span>
                    <div>{props.title}</div>
                    <div> {props.description}</div>
                </span>
            </Item>
        </Grid>
    )
}