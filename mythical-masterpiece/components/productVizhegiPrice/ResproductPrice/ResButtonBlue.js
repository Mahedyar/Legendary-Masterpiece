import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SubButton from '../mainPrice/SubButton'
import useMediaQuery from "@mui/material/useMediaQuery";


function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                paddingTop:1.5,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',


                ...sx,
            }}
            {...other}
        />
    );
}


export default function ResButtonBlue(){


    return(
        <>


            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(1, 1fr)' }}>
                <Item>
                    <Stack direction="row" >
                        <Button sx={{borderRadius:2,width:'100%',height:45}} variant="contained" disableElevation>
                            افزودن سبد خرید
                        </Button>
                    </Stack>
                </Item>
            </Box>
            <SubButton/>

        </>
    )
}