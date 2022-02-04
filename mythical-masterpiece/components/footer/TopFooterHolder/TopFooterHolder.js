import {Grid,Box} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Icon from "./Icon";

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
                        <p>تیمچه در شبکه های اجتماعی: <Icon/></p>
                    </Item>
                </Grid>
                <Grid sm={4}>
                    <Item>
                    <p>آدرس ایمیل: Salam@timcheh.com</p>
                    </Item>
                </Grid>
                <Grid sm={4}>
                    <Item sx={{paddingRight:15}}>
                    <p>شماره تماس: 021-91012959</p>
                    </Item>
                </Grid>

            </Grid>
            </Box>
        </>
    )
}