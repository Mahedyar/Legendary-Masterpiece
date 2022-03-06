import {useState} from "react";

import Link from 'next/link'
import classes from './ProductCard.module.css'
import Image from "next/image";
import kingSeatIcon from '../../assets/Images/icon/shahneshin.svg'

const ProductCard = (props) => {
    const [hovered, setHovered] = useState(false);

    let newPrice;

    if (props.offPercent && props.offPercent > 0) {
        newPrice = props.price - ((props.offPercent / 100) * props.price);
    }

    const mouseEnterHandler = () => {
        setHovered(true);
    }

    const mouseLeaveHandler = () => {
        setHovered(false);
    }

    return (
        <li onMouseLeave={mouseLeaveHandler} onMouseEnter={mouseEnterHandler} className={`${classes.card} ${hovered ? classes.hovered : ""}`}>
            <Link href={`/${props.link ? props.link : "search"}`}>
                <div>
                    <div className={classes.imgBox}>
                        <span/>
                        <div className={classes.lazyLoad}>
                            <img src={props.img} alt="random pic"/>
                        </div>
                        <div className={classes.stylesColors}>
                            {props.colors ? props.colors.map(color => (
                                <span key={color.name} className={classes.span} style={{background: `${color.code}`}}/>
                            )) : null}
                        </div>
                    </div>
                    <div className={classes.txtBox}>
                        <h3>{props.title}</h3>
                        <div className={classes.clearFix}/>
                        <div className={classes.discount}>
                            {props.offPercent && props.offPercent > 0 ?
                                <div className={classes.oldPrice}>
                                    {props.price}
                                </div>
                                : null}
                            <div className={classes.discountNumber} style={{visibility: `${props.offPercent && props.offPercent > 0 ? "visible" : "hidden"}`}}>
                                <span>{`٪${props.offPercent}`}</span>
                            </div>
                        </div>
                        <div className={classes.clearFix}/>
                        <div className={classes.priceBox}>
                            <div className={classes.price}>{props.offPercent && props.offPercent > 0 ? newPrice : props.price}</div>
                            <div className={classes.currency}>تومان</div>
                        </div>
                        <div className={classes.clearFix}/>
                    </div>
                    <div className={classes.hoveredPart} style={{display: `${hovered ? "flex" : "none"}`}}>
                        <Image src={kingSeatIcon} alt="shah neshin icon"/>
                        <span>{props.kingSeat} تومان پاداش نقدی شاه نشین</span>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default ProductCard