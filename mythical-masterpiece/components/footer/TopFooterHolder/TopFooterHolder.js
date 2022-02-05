import {Grid, Box, Container} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Icon from "./Icon";
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({theme}) => ({
    boxShadow: 'none',
    padding: 9,
    textAlign: 'right',
    color: "#141414",
    fontsize: 10,
    direction: "rtl",
    background: "#fafafa",
    // display:'flex',
    // flexDirection:'row',
    // justifyContent:'center',
    // alignItems:'center'
}));
export default function TopFooterHolder() {
    return (
        <>
            <Box sx={{background: "#fafafa"}}>
                <Container maxWidth={'lg'} sx={{background: "#fafafa",display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Grid container >
                        <Grid sm={4}>
                            <Item >
                                <Typography  variant="subtitle2">تیمچه در شبکه های اجتماعی: <Icon/></Typography>
                            </Item>
                        </Grid>
                        <Grid sm={4}>
                            <Item>
                                <Typography variant="subtitle2">آدرس ایمیل: Salam@timcheh.com</Typography>
                            </Item>
                        </Grid>
                        <Grid sm={4}>
                            <Item sx={{paddingRight: 15}}>
                                <Typography variant="subtitle2">شماره تماس: 021-91012959</Typography>
                            </Item>
                        </Grid>

                    </Grid>
                </Container>
            </Box>



            {/*    <Box*/}
            {/*        sx={{*/}
            {/*            display: 'flex',*/}
            {/*            justifyContent: 'space-around',*/}
            {/*            p: 1,*/}
            {/*            m: 1,*/}
            {/*            bgcolor: 'background.paper',*/}
            {/*            borderRadius: 1,*/}
            {/*            direction: "rtl",*/}
            {/*            background: "#fafafa",*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Item><Typography  variant="subtitle2">شماره تماس: 021-91012959</Typography></Item>*/}
            {/*        <Item><Typography variant="subtitle2">آدرس ایمیل: Salam@timcheh.com</Typography></Item>*/}
            {/*        <Item>*/}
            {/*        <Box>*/}
            {/*            <Grid >*/}
            {/*                <Typography  variant="subtitle2">تیمچه در شبکه های اجتماعی: <Icon/></Typography>*/}

            {/*            </Grid>*/}
            {/*        </Box>*/}
            {/*        </Item>*/}
            {/*    </Box>*/}


        </>
    )
}