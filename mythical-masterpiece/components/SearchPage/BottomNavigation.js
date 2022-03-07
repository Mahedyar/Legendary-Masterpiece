import classes from '../../styles/BottomNavigation.module.css'
import FilterListIcon from "@mui/icons-material/FilterList";
import {useState} from "react";
import FilterOptions from "./FilterOptions";


const sortingItems = ["پربازدیدها","ارزان ترین","گران ترین","پرفروش ترین","جدیدترین","سریع ترین ارسال!","تخفیف دار"]

const BottomNavigation = (props) => {
    const [active, setActive] = useState("پرفروش ترین");
    const [sortPanelActivation, setSortPanelActivation] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false)

    const activateHandler = (item) => {
        setActive(item);
        props.sortingAvailableProducts(item);
        setSortPanelActivation(false);
    }

    const sortPanelButtonOnCLick = () => {
        setSortPanelActivation(true);
    }

    const filterOptionsOnCLick = () => {
        setFilterVisible(filterVisible => !filterVisible)
    }
    return (
        <div className={classes.bottomNav}>
            <div className={classes.sortList}>
                <div onClick={sortPanelButtonOnCLick} className={classes.sortButton}>
                    <FilterListIcon className={classes.icon}/>
                    <p>ترتیب نمایش</p>
                </div>
                {sortPanelActivation ? <div className={classes.sortModal}>
                    <ul>
                        {sortingItems.map(item => (
                            <li key={item} onClick={activateHandler.bind(null, item)}
                                className={`${active === item ? classes.active : ""}`}>{item}</li>
                        ))}
                    </ul>
                </div> : null}
            </div>
            <div>
                <div onClick={filterOptionsOnCLick} className={`${classes.sortButton} ${classes.direction}`}>
                    <FilterListIcon className={classes.icon}/>
                    <p>فیلتر کردن</p>
                </div>
                {filterVisible ? (
                    <div className={classes.filtersBox}>
                        <FilterOptions
                            filterListByRangeHandler={props.filterListByRangeHandler}
                            filterListByDiscountHandler={props.filterListByDiscountHandler}
                            searchProductHandler={props.searchProductHandler}
                            checkBox={props.checkBox}
                            setCheckBox={props.setCheckBox}
                            pricesArray={props.pricesArray}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default BottomNavigation