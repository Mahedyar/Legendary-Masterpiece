import {useState} from "react";
import classes from "./FilteredSection.module.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import ProductCard from "./ProductCard";

const sortingItems = ["پربازدیدها","ارزان ترین","گران ترین","پرفروش ترین","جدیدترین","سریع ترین ارسال!","تخفیف دار"]

const FilteredSection = (props) => {
    const [active, setActive] = useState("پرفروش ترین");

    const activateHandler = (item) => {
        setActive(item)
    }

    return (
        <section className={classes.section}>
            <div className={classes.filterBox}>
                <div className={classes.sortHeader}>
                    <FilterListIcon className={classes.icon}/>
                    <p>ترتیب نمایش:</p>
                </div>
                <div className={classes.sortingList}>
                    <ul>
                        {sortingItems.map(item => (
                            <li onClick={activateHandler.bind(null , item)} className={`${active === item ? classes.active : ""}`}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={classes.remaining}>
                    <span>{props.arrayLengh}کالا</span>
                </div>
            </div>
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