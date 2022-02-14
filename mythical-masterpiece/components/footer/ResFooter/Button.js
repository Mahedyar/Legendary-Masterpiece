import {Stack, Box,Button} from "@mui/material";



export default function ButtonFooter(){
    return(
        <>
            <Box sx={{padding:1 ,borderBottom:'1px solid #ced4da'}}>
                <Stack  direction="row" sx={{direction:'rtl'}} >
                    <Button sx={{margin:'auto'}} variant="outlined">در تیمچه بفروش!</Button>
                </Stack>
            </Box>
        </>
    )
}