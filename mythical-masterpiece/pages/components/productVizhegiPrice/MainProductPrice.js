import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HeaderPrice from "./headerPrice/HeaderPrice";

export default function MainProductPrice() {
    return (
        <>

            <CssBaseline/>
            <Container maxWidth="sm">
                <Box sx={{bgcolor: '#fff', height: '100vh'}}>
                    <HeaderPrice/>
                </Box>
            </Container>

        </>
    )
}