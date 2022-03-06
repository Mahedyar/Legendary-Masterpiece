import HomePageComponent from "../components/homePage/HomePageComponent";
import {products, productCards} from "../data/products";
import {MongoClient} from "mongodb";

export default function HomePage(props) {
    return (
        <HomePageComponent products={props.products}/>
    );
}

export const getStaticProps = async () => {
    const client = await MongoClient.connect(
        "mongodb+srv://mahdi:MdFfxuJC78ietT@daneshkarcluster.xri1m.mongodb.net/ShoppingItemsDatabase?retryWrites=true&w=majority"
    )

    const db = client.db();

    const productsCollection = db.collection("ShopItem");
    const cards = await productsCollection.find().toArray();
    client.close();
    return {
        props: {
            products: cards.map(item => ({
                id: item._id.toString(),
                image: item.image[0],
                name: item.name,
                offPercent: item.offPercent,
                price: item.price,
            }))
        }
    }
}
