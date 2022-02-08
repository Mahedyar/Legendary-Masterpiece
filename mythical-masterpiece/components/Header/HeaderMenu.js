import {Fragment} from "react";
import HeaderMiddlePart from "./HeaderMiddlePart";
import classes from "./HeaderMenu.module.css"
import HeaderGif from "../../assests/adds/timche-header-add.gif"

const HeaderMenu = () => {
    return (
        <Fragment>
            <img className={classes.gifImage} src={HeaderGif.src} alt="some shit"/>
            <HeaderMiddlePart />
        </Fragment>
    )
}

export default HeaderMenu