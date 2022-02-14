import {Fragment,useState,useEffect} from "react";
import img from "../../assets/Images/Ads/SearchPageAdd.webp"
import classes from "./SearchPage.module.css"
import BreadCrumbs from "./BreadCrumbs";
import FilteredSection from "./FilteredSection";
import FilterOptions from "./FilterOptions";

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

const SearchComponent = (props) => {
    const [height, width] = getPageSize();
    const [filteredProducts, setFilteredProducts] = useState(props.products)

    const filterListByRangeHandler = (value) => {
        setFilteredProducts(() => {
            const [min, max] = value;
            console.log(min, max)
            const newProducts = props.products.filter(item => {
                console.log(item);
                return ((+item.price >= min) && (+item.price <= max))
            })
            console.log(newProducts);
            return [
                ...newProducts
            ];
        });

    }

    return (
        <Fragment>
            <img className={classes.pic} src={img.src} alt="some text"/>
            <BreadCrumbs/>
            <div className={classes.pageContent}>
                <div className={classes.pageGrid}>
                    <FilteredSection arrayLengh={filteredProducts.length} products={filteredProducts}/>
                    <FilterOptions filterListByRangeHandler={filterListByRangeHandler} pricesArray={props.pricesArray} />
                </div>
            </div>
        </Fragment>
    )
}

export default SearchComponent;