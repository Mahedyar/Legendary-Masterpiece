import {useState} from "react";
import classes from './FilterOptions.module.css';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomCheckBox from './CustomCheckBox';
import CustomRangePicker from "./CustomRangePicker";

const FilterOptions = () => {
    const [checkBox, setCheckBox] = useState([]);
    const [isBrandsExpanded, setIsBrandsExpended] = useState(false);
    const [value, setValue] = useState([0, 10000000]);

    const expandHandler = () => {
        setIsBrandsExpended((state) => !state)
    }

    const clickHandler = (e, id) => {
        setCheckBox((checkBox) => {
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
                    <input type="text" placeholder={"کالای مورد نظر را جستجو کنید"}/>
                    <SearchIcon className={classes.icon}/>
                </div>
            </div>
            <div>
                <h2>برند</h2>
                <div className={classes.brandSection}>
                    <div className={classes.searchBox} style={{marginBottom: "24px"}}>
                        <input type="text" placeholder={"نام برند مورد نظر را جستجو کنید"}/>
                        <SearchIcon className={classes.icon}/>
                    </div>
                    <div className={`${classes.brandsContainer} ${!isBrandsExpanded ? "" : classes.expanded}`}>
                        {["مای", "شون", "این لی", "بورژوآ", "کالیستا",
                            "لی لی نایت", "رومئو", "ایزادورا", "میبلین", "لاوینگ نایس", "مدیسان",
                            "متفرقه", "لاوینگ", "لورآل", "آردن", "آدرکوین",
                            "الارو", "گلدن رز", "نوت", "اس وی آر", "بیول", "لوسرو", "رومنس"].map(brand => (
                            <label htmlFor={brand} className={classes.customCheckBox} key={brand}>
                                <span className={classes.farsiLabel}>{brand}</span>
                                <input id={brand} type="checkbox" onClick={(e) => {
                                    clickHandler(e, brand)
                                }}/>
                                <span
                                    className={`${classes.checkMark} ${ checkBox.find(item => item === brand) ? classes.checked : ""}`}/>
                            </label>
                        ))}
                    </div>
                </div>
                <div className={classes.viewAll} onClick={expandHandler}>
                    <span>{!isBrandsExpanded ? "مشاهده همه" : "بستن"}</span>
                    <KeyboardArrowDownIcon className={`${classes.viewAllIcon} ${!isBrandsExpanded ? "" : classes.rotate}`} />
                </div>
            </div>
            <div>
                <CustomCheckBox title={"فقط نمایش کالاهای روز پدر"} />
            </div>
            <div>
                <CustomCheckBox title={"فقط کالاهای موجود"} />
            </div>
            <div>
                <CustomCheckBox title={"فقط کالاهای اصل"} />
            </div>
            <div>
                <CustomCheckBox title={"فقط تخفیف دار"} />
            </div>
            <div>
                <h2>محدوده قیمت</h2>
                <CustomRangePicker value={value} setValue={setValue} />
                <div className={classes.rangeContents}>
                    <div>
                        <span className={classes.amount}>{value[1].toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}</span>
                        <span className={classes.unit}>قیمت</span>
                    </div>
                    <div>
                        <span className={classes.amount}>{value[0].toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}</span>
                        <span className={classes.unit}>قیمت</span>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default FilterOptions;