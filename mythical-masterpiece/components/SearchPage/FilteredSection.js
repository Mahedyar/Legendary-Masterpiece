import classes from "./FilteredSection.module.css"
import FilterListIcon from '@mui/icons-material/FilterList';

const FilteredSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.filterBox}>
                <div>
                    <FilterListIcon />
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div className={classes.cardsGrid}>
                <ul>
                    {[].map(item => (
                        <p>hello</p>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FilteredSection;