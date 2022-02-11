import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function LocalMaxImage(props){
    return(
        <>
            <Container maxWidth="sm">
                <Box>{props.children}</Box>
            </Container>
        </>
    )
}