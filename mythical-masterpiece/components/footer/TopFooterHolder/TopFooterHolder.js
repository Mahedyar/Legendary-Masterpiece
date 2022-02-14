import {Grid, Box, Container} from "@mui/material";
import Typography from '@mui/material/Typography';
import TextIcon from "./TextIcon";


function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                direction: 'rtl',
                p: 1,
                m:0.75,
                borderRadius: 2,

                ...sx,
            }}
            {...other}
        />
    );
}
export default function TopFooterHolder() {
    return (
        <>
            <Box sx={{background: "#fafafa"}}>
                <Container maxWidth={'lg'} sx={{background: "#fafafa",display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                    <div style={{ width: '100%' }}>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <Item><TextIcon/></Item>
                            <Item><Typography variant="subtitle2">آدرس ایمیل: Salam@timcheh.com</Typography></Item>
                            <Item sx={{paddingRight:'35px'}}> <Typography variant="subtitle2">شماره تماس: 021-91012959</Typography></Item>
                        </Box>
                    </div>
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