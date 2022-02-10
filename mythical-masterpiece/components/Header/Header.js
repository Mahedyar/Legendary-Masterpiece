import {Fragment} from "react";

import classes from "./Header.module.css"
import HeaderGif from "../../assests/adds/timche-header-add.gif"

const HeaderMenu = () => {
    return (
        <Fragment>
            <img className={classes.gifImage} src={HeaderGif.src} alt="some shit"/>
           
        </Fragment>
    )
}

export default HeaderMenu