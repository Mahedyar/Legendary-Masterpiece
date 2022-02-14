import classes from "./FilteredSection.module.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import ProductCard from "./ProductCard";

const FilteredSection = (props) => {
    return (
        <section className={classes.section}>
            <div className={classes.filterBox}>
                <div className={classes.sortHeader}>
                    <FilterListIcon className={classes.icon}/>
                    <p>ترتیب نمایش:</p>
                </div>
                <div className={classes.sortingList}>
                    <ul>
                        <li className={classes.active}>پربازدیدها</li>
                        <li >ارزان ترین</li>
                        <li >گران ترین</li>
                        <li >پرفروش ترین</li>
                        <li >جدیدترین</li>
                        <li >سریع ترین ارسال!</li>
                        <li >تخفیف دار</li>
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