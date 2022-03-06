import HomePageComponent from "../components/homePage/HomePageComponent";
import {products, productCards} from "../data/products";

export default function HomePage() {
    // const cards = productCards.json();
    // console.log(cards)
    return (
        <HomePageComponent products={products}/>
    );
}
