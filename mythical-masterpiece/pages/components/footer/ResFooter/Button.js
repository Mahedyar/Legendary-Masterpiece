import {Stack, Box,Button} from "@mui/material";



export default function ButtonFooter(){
    return(
        <>
            <Box sx={{padding:1}}>
            <Stack  direction="row" sx={{direction:'rtl'}} >
                <Button  variant="outlined">در تیمچه بفروش!</Button>
            </Stack>
            </Box>
        </>
    )
}