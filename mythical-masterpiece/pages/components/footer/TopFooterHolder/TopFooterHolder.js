import {Grid,Box} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Icon from "./Icon";
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({theme}) => ({
    boxShadow: 'none',
    padding: theme.spacing(0.5),
    textAlign: 'right',
    color: "#141414",
    background: "#fafafa",
    fontsize: 10,
    direction: "rtl",
}));
export default function TopFooterHolder() {
    return (
        <>
            <Box sx={{width: '100%',textAlign:'raight',margin:'auto',background: "#fafafa"}}>
            <Grid container rowSpacing={1} columnSpacing={{xs: 0, sm: 0, md: 0}}>
                <Grid sm={4}>
                    <Item >
                        <Typography variant="subtitle2">تیمچه در شبکه های اجتماعی: <Icon/></Typography>
                    </Item>
                </Grid>
                <Grid sm={4}>
                    <Item>
                    <Typography variant="subtitle2">آدرس ایمیل: Salam@timcheh.com</Typography>
                    </Item>
                </Grid>
                <Grid sm={4}>
                    <Item sx={{paddingRight:15}}>
                    <Typography variant="subtitle2">شماره تماس: 021-91012959</Typography>
                    </Item>
                </Grid>

            </Grid>
            </Box>
        </>
    )
}