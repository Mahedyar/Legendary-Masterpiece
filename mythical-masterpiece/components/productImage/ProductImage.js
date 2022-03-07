import BoxMaxImage from "./BoxMaxImage";
import BoxMinImage from "./BoxMinImage";
import Box from '@mui/material/Box';
import useMediaQuery from "@mui/material/useMediaQuery";

function Item(props) {

    const { sx, ...other } = props;

    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                border: '0px solid',
                ...sx,
            }}
            {...other}
        />
    );
}


export default function ProductImage(props){
    const lapTap = useMediaQuery('(min-width:1025px)')
    return(
        <>
            <div style={{ width: '100%', marginLeft:lapTap? '-41px':""}}>
                    <Item><BoxMaxImage product={props.product}/></Item>
                    <Item><BoxMinImage product={props.product}/></Item>
            </div>
        </>
    )
}