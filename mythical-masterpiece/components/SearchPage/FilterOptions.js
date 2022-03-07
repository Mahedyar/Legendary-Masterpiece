import {useState, useRef} from "react";
import classes from '../../styles/FilterOptions.module.css';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomCheckBox from './CustomCheckBox';
import CustomRangePicker from "./CustomRangePicker";

const brands = ["مای", "اپل", "سامسونگ", "هوآوی", "شون", "این لی", "بورژوآ", "کالیستا",
    "لی لی نایت", "رومئو", "ایزادورا", "میبلین", "لاوینگ نایس", "مدیسان",
    "متفرقه", "لاوینگ", "لورآل", "آردن", "آدرکوین",
    "الارو", "گلدن رز", "نوت", "اس وی آر", "بیول", "لوسرو", "رومنس"]

const FilterOptions = (props) => {
    const [brandsFiltered, setBrandsFiltered] = useState(brands);

    const initialState = props.pricesArray ? [+props.pricesArray[0], +props.pricesArray[props.pricesArray.length - 1]] : [];


    const [isBrandsExpanded, setIsBrandsExpended] = useState(false);
    const [value, setValue] = useState(initialState);

    const expandHandler = () => {
        setIsBrandsExpended((state) => !state)
    }

    const clickHandler = (e, id) => {
        props.setCheckBox((checkBox) => {
            if (!e.target.checked) {
                const filtered = checkBox.filter(item => item !== id)
                return [
                    ...filtered
                ]
            }
            if (e.target.checked) {
                return [
                    ...checkBox,
                    id
                ]
            }
        })
    }


    const brandsChangeHandler = (e) => {
        setBrandsFiltered(() => {
            const txt = e.target.value;
            const newBrands = brands.filter((item) => {
                return item.includes(txt);
            })
            return [
                ...newBrands
            ]
        })
    }

    return (
        <section className={classes.section}>
            <div>
                <h2>دسته بندی نتایج</h2>
                <ul className={classes.sortingList}>
                    <li>لوازم آرایشی</li>
                    <li>آرایش صورت</li>
                    <li>آرایش چشم و ابرو</li>
                    <li>آرایش لب</li>
                    <li>بهداشت و زیبایی ناخن</li>
                    <li>آرایش مو</li>
                    <li>تجهیزات آرایشی</li>
                </ul>
            </div>
            <div>
                <h2>جستوجو</h2>
                <div className={classes.searchBox}>
                    <input onChange={props.searchProductHandler} type="text" placeholder={"کالای مورد نظر را جستجو کنید"}/>
                    <SearchIcon className={classes.icon}/>
                </div>
            </div>
            <div>
                <h2>برند</h2>
                <div className={classes.brandSection}>
                    <div onChange={brandsChangeHandler} className={classes.searchBox} style={{marginBottom: "24px"}}>
                        <input type="text" placeholder={"نام برند مورد نظر را جستجو کنید"}/>
                        <SearchIcon className={classes.icon}/>
                    </div>
                    <div className={`${classes.brandsContainer} ${!isBrandsExpanded ? "" : classes.expanded}`}>
                        {brandsFiltered.map(brand => (
                            <label htmlFor={brand} className={classes.customCheckBox} key={brand}>
                                <span className={classes.farsiLabel}>{brand}</span>
                                <input id={brand} type="checkbox" onClick={(e) => {
                                    clickHandler(e, brand)
                                }}/>
                                <span
                                    className={`${classes.checkMark} ${props.checkBox.find(item => item === brand) ? classes.checked : ""}`}/>
                            </label>
                        ))}
                    </div>
                </div>
                <div className={classes.viewAll} onClick={expandHandler}>
                    <span>{!isBrandsExpanded ? "مشاهده همه" : "بستن"}</span>
                    <KeyboardArrowDownIcon
                        className={`${classes.viewAllIcon} ${!isBrandsExpanded ? "" : classes.rotate}`}/>
                </div>
            </div>
            <div>
                <CustomCheckBox filterListByDiscountHandler={(item) => {props.filterListByDiscountHandler("فقط نمایش کالاهای روز پدر", item)}} title={"فقط نمایش کالاهای روز پدر"}/>
            </div>
            <div>
                <CustomCheckBox filterListByDiscountHandler={(item) => {props.filterListByDiscountHandler("فقط کالاهای موجود", item)}} title={"فقط کالاهای موجود"}/>
            </div>
            <div>
                <CustomCheckBox filterListByDiscountHandler={(item) => {props.filterListByDiscountHandler("فقط کالاهای اصل", item)}} title={"فقط کالاهای اصل"}/>
            </div>
            <div>
                <CustomCheckBox filterListByDiscountHandler={(item) => {props.filterListByDiscountHandler("فقط تخفیف دار", item)}} title={"فقط تخفیف دار"}/>
            </div>
            <div>
                <h2>محدوده قیمت</h2>
                <CustomRangePicker filterListHandler={props.filterListByRangeHandler.bind(null, value)}
                                   minMax={props.pricesArray} value={value} setValue={setValue}/>
                <div className={classes.rangeContents}>
                    <div>
                        <span
                            className={classes.amount}>{value[1].toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}</span>
                        <span className={classes.unit}>قیمت</span>
                    </div>
                    <div>
                        <span
                            className={classes.amount}>{value[0].toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}</span>
                        <span className={classes.unit}>قیمت</span>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default FilterOptions;