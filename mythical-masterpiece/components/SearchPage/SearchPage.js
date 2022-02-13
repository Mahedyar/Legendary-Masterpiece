import {Fragment,useState,useEffect} from "react";
import img from "../../assets/Images/Ads/SearchPageAdd.webp"
import classes from "./SearchPage.module.css"
import BreadCrumbs from "./BreadCrumbs";
import FilteredSection from "./FilteredSection";

const getPageSize = () => {
    const [screenSize, setScreenSize] = useState([900, 1440]);

    useEffect(() => {
        const windowSizeHandler = () => {
            setScreenSize([window.innerHeight,window.innerWidth])
        }
        window.addEventListener('resize', windowSizeHandler);
        return () => {
            window.removeEventListener('resize', windowSizeHandler)
        }
    },[])
    return screenSize;
}

const SearchPage = () => {
    const [height, width] = getPageSize();


    return (
        <Fragment>
            <img className={classes.pic} src={img.src} alt="some text"/>
            <BreadCrumbs/>
            <div className={classes.pageContent}>
                <div className={classes.pageGrid}>
                    <FilteredSection arrayLengh={17} />
                    <div className={classes.s2}>hello</div>
                </div>
            </div>
        </Fragment>
    )
}

export default SearchPage;