import BoxMaxImage from "./BoxMaxImage";
import BoxMinImage from "./BoxMinImage";

import Box from '@mui/material/Box';

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
    return(
        <>
            <div style={{ width: '100%' }}>
                    <Item><BoxMaxImage product={props.product}/></Item>
                    <Item><BoxMinImage product={props.product}/></Item>
            </div>
        </>
    )
}