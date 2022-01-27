import {Grid} from "@mui/material";
import classes from './TopFooterHolder.module.css'
import Icon from "./Icon";
export default function TopFooterHolder() {
    return (
        <div className={classes['TopFH--item']}>
            <Grid  container rowSpacing={1} columnSpacing={{xs: 0, sm: 0, md: 0}}>
                        <Grid sm={4} >
                        <p><Icon/> :تیمچه در شبکه های اجتماعی</p>
                        </Grid>
                        <Grid sm={4}>
                        <p>Salam@timcheh.com :آدرس ایمیل</p>
                        </Grid>
                        <Grid sm={4}>
                        <p>021-91012959 :شماره تماس</p>
                        </Grid>

            </Grid>
        </div>
    )
}