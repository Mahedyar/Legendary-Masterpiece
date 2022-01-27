import classes from './Advantages.module.css'
import {Grid} from "@mui/material";
export default function AdvantagesItems(props){
    return(
        <Grid  sm={2.4}>
            <div className={classes['advantage-item']}>
                <div>
                    <div className={classes['title-adv']}>{props.title}</div>
                    <div className={classes['description--adv']} > {props.description}</div>
                </div>
                <img className={classes['image--adv']} src={props.image}/>
            </div>
        </Grid>
    )
}