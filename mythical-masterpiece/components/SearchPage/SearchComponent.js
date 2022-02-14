import {Fragment, useState, useEffect} from "react";
import img from "../../assets/Images/Ads/SearchPageAdd.webp"
import classes from "./SearchPage.module.css"
import BreadCrumbs from "./BreadCrumbs";
import FilteredSection from "./FilteredSection";
import FilterOptions from "./FilterOptions";

const getPageSize = () => {
    const [screenSize, setScreenSize] = useState([900, 1440]);

    useEffect(() => {
        const windowSizeHandler = () => {
            setScreenSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener('resize', windowSizeHandler);
        return () => {
            window.removeEventListener('resize', windowSizeHandler)
        }
    }, [])
    return screenSize;
}

const SearchComponent = (props) => {
    const [height, width] = getPageSize();

    const [checkBox, setCheckBox] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState(props.products);
    const [filteredListByCheckBox, setFilteredListByCheckBox] = useState(props.products);
    const [filteredListBySearchInput, setProductsSearchInput] = useState(props.products);
    const [filteredListByDiscountProducts, setFilteredListByDiscountProducts] = useState(props.products);
    const [filteredByRangeProducts, setFilteredByRangeProducts] = useState(props.products);

    useEffect(() => {
        let firstComparison = filteredListBySearchInput.filter(item => filteredListByCheckBox.includes(item))
        let secondComparison = firstComparison.filter(item => filteredListByDiscountProducts.includes(item));
        let thirdComparison = secondComparison.filter(item => filteredByRangeProducts.includes(item));

        setFilteredProducts(() => {
            return [
                ...thirdComparison
            ]
        })


    }, [filteredListByCheckBox, filteredListBySearchInput, filteredListByDiscountProducts, filteredByRangeProducts])

    useEffect(() => {
        if (checkBox.length === 0) {
            setFilteredListByCheckBox(props.products)
        }
        if (checkBox.length > 0) {
            setFilteredListByCheckBox(() => {
                const filteredArray = props.products.filter(item => checkBox.includes(item.brand))
                console.log(`checkbox filter`,filteredArray)
                return [
                    ...filteredArray
                ]
            })
        }
    },[checkBox])

    const searchProductHandler = (event) => {
        setProductsSearchInput(() => {
            const newProducts = props.products.filter((item) => {
                return item.title.includes(event.target.value);
            })
            console.log(`search `,newProducts);
            return [
                ...newProducts
            ]
        })
    }

    const filterListByDiscountHandler = (status) => {
        if (!status) {
            setFilteredListByDiscountProducts(props.products)
        }
        if (status) {
            setFilteredListByDiscountProducts(() => {
                const newProducts = props.products.filter((item) => {
                    return (item.offPercent > 0 && item.offPercent)
                })
                return [
                    ...newProducts
                ]
            })
        }
    }

    const filterListByRangeHandler = (value) => {
        setFilteredByRangeProducts(() => {
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
                    <FilterOptions
                        filterListByRangeHandler={filterListByRangeHandler}
                        filterListByDiscountHandler={filterListByDiscountHandler}
                        searchProductHandler={searchProductHandler}
                        checkBox={checkBox}
                        setCheckBox={setCheckBox}
                        pricesArray={props.pricesArray}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default SearchComponent;