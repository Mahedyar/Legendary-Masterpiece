import Link from "next/link"
import classes from "./BreadCrumbs.module.css"

const BreadCrumbs = () => {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.breadCrumbs}>
                <li><Link href={"/"}>خانه</Link></li>
                {["موبایل","دیجیتال","لوازم جانبی"].map(item => (
                    <li key={item}><Link href={"/"}>{item}</Link></li>
                ))}</ul>
        </div>
    )
}

export default BreadCrumbs;