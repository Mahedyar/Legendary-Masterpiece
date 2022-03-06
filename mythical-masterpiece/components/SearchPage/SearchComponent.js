import {Fragment, useState, useEffect} from "react";
import img from "../../assets/Images/Ads/SearchPageAdd.webp"
import classes from "./SearchPage.module.css"
import BreadCrumbs from "./BreadCrumbs";
import FilteredSection from "./FilteredSection";
import FilterOptions from "./FilterOptions";
import BottomNavigation from "./BottomNavigation";

const getPageSize = () => {
    const [screenSize, setScreenSize] = useState([900, 1440]);

    useEffect(() => {
        const windowSizeHandler = () => {
            setScreenSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener("load", windowSizeHandler);
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
                return [
                    ...filteredArray
                ]
            })
        }
    }, [checkBox])

    const searchProductHandler = (event) => {
        setProductsSearchInput(() => {
            const newProducts = props.products.filter((item) => {
                return item.title.includes(event.target.value);
            })
            console.log(`search `, newProducts);
            return [
                ...newProducts
            ]
        })
    }

    const filterListByDiscountHandler = (name, status = false) => {
        switch (name) {
            case ("فقط تخفیف دار"):
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
                break;
            case ("فقط نمایش کالاهای روز پدر") :
                console.log("فقط نمایش کالاهای روز پدر")
                break;
            case ("فقط کالاهای موجود") :
                console.log("فقط کالاهای موجود")
                break;
            case ("فقط کالاهای اصل") :
                console.log("فقط کالاهای اصل")
                break;
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

    const sortingAvailableProducts = (item) => {
        switch (item) {
            case ("پربازدیدها") :
                console.log("پربازدیدها")
                break;
            case ("ارزان ترین") :
                setFilteredProducts((filteredProducts) => {
                    const newArray = filteredProducts.filter(item => item)
                    return newArray.sort((a, b) => (+a.price > +b.price ? 1 : -1))
                })
                break;
            case ("گران ترین") :
                setFilteredProducts((filteredProducts) => {
                    const newArray = filteredProducts.filter(item => item)
                    return newArray.sort((a, b) => (+a.price > +b.price ? -1 : 1))
                })
                break;
            case ("جدیدترین") :
                console.log("جدیدترین")
                break;
            case ("سریع ترین ارسال!") :
                console.log("سریع ترین ارسال!")
                break;
            case ("تخفیف دار") :
                setFilteredProducts((filteredProducts) => {
                    const newArray = filteredProducts.filter(item => item)
                    return newArray.sort((a, b) => (+a.offPercent > +b.offPercent ? -1 : 1))
                })
                break;
            default :
                console.log("پرفروش ترین")
                break;
        }
    }

    return (
        <Fragment>
            <img className={classes.pic} src={img.src} alt="some text"/>
            <BreadCrumbs/>
            <div className={classes.pageContent}>
                <div className={classes.pageGrid}>
                    <FilteredSection
                        width={width}
                        sortingAvailableProducts={sortingAvailableProducts}
                        arrayLengh={filteredProducts.length}
                        products={filteredProducts}
                    />
                    {width > 760 ? <FilterOptions
                        filterListByRangeHandler={filterListByRangeHandler}
                        filterListByDiscountHandler={filterListByDiscountHandler}
                        searchProductHandler={searchProductHandler}
                        checkBox={checkBox}
                        setCheckBox={setCheckBox}
                        pricesArray={props.pricesArray}
                    /> :
                    <BottomNavigation
                        width={width}
                        sortingAvailableProducts={sortingAvailableProducts}
                        filterListByRangeHandler={filterListByRangeHandler}
                        filterListByDiscountHandler={filterListByDiscountHandler}
                        searchProductHandler={searchProductHandler}
                        checkBox={checkBox}
                        setCheckBox={setCheckBox}
                        pricesArray={props.pricesArray}
                    />}
                </div>
            </div>
        </Fragment>
    )
}

export default SearchComponent;