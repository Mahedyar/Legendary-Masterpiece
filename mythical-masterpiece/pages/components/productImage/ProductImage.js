import BoxMaxImage from "./BoxMaxImage";
import BoxMinImage from "./BoxMinImage";

import Box from '@mui/material/Box';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '0px solid',
                ...sx,
            }}
            {...other}
        />
    );
}


export default function ProductImage(){
    return(
        <>
            <div style={{ width: '100%' }}>
                <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                    <Item><BoxMaxImage/></Item>
                    <Item><BoxMinImage/></Item>

                </Box>
            </div>
        </>
    )
}