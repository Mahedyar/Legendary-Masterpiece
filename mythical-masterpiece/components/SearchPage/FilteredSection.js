import {useState} from "react";
import classes from "../../styles/FilteredSection.module.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import ProductCard from "./ProductCard";

const sortingItems = ["پربازدیدها","ارزان ترین","گران ترین","پرفروش ترین","جدیدترین","سریع ترین ارسال!","تخفیف دار"]

const FilteredSection = (props) => {
    const [active, setActive] = useState("پرفروش ترین");
    const [sortPanelActivation, setSortPanelActivation] = useState(false);

    const activateHandler = (item) => {
        setActive(item);
        props.sortingAvailableProducts(item);
        setSortPanelActivation(false);
    }

    const sortPanelButtonOnCLick = () => {
        setSortPanelActivation(true);
    }

    const checking = props.width < 1100 ? (sortPanelActivation) : true;

    return (
        <section className={classes.section}>
            {props.width > 760 ? <div className={classes.filterBox}>
                <div onClick={sortPanelButtonOnCLick} className={`${classes.sortHeader} ${props.width < 1100 ? classes.cursorPointer : ""}`}>
                    <FilterListIcon className={classes.icon}/>
                    <p>ترتیب نمایش:</p>
                </div>
                {checking ? <div className={`${props.width > 1100 ? classes.sortingList : classes.responsiveSortingList}`}>
                    <ul>
                        {sortingItems.map(item => (
                            <li key={item} onClick={activateHandler.bind(null, item)}
                                className={`${active === item ? classes.active : ""}`}>{item}</li>
                        ))}
                    </ul>
                </div> : null}
                <div className={classes.remaining}>
                    <span>{props.arrayLengh}کالا</span>
                </div>
            </div> : null}
            <div className={classes.cardsGrid}>
                <ul>
                    {props.products.map(item => (
                        <ProductCard
                            key={item.id}
                            kingSeat={item.kingSeat}
                            price={item.price}
                            offPercent={item.offPercent}
                            title={item.title}
                            link={item.id}
                            colors={item.colors}
                            img={item.images[0]}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FilteredSection;