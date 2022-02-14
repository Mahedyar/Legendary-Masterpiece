import SearchComponent from "../../components/SearchPage/SearchComponent";
import {MongoClient} from "mongodb";
import {buttonClasses} from "@mui/material";
import {Fragment} from "react";


const searchPage = () => {

    const text = {
        name: "mahdi"
    }

    const clickHandler = () => {
        fetch('/api/getting-data', {
            method: "POST",
            body: JSON.stringify(text),
            headers: {

            }
        })
    }
    return (
        <Fragment>
            <button onClick={clickHandler}>click me</button>
            {/*<SearchComponent products={props.CardData} pricesArray={props.prices}/>*/}
        </Fragment>
    )
}

// export const getStaticProps = async () => {
//
//     const client = await MongoClient.connect(
//         "mongodb+srv://mahdi:MdFfxuJC78ietT@daneshkarcluster.xri1m.mongodb.net/ShoppingItemsDatabase?retryWrites=true&w=majority"
//     )
//
//     const db = client.db();
//
//     const productsCollection = db.collection("ShopItem");
//     const cards = await productsCollection.find().toArray();
//     const prices = [];
//     cards.map(item => prices.push(item.price.padStart(9)));
//
//     client.close();
//     return {
//         props: {
//             CardData: cards.map(card => ({
//                 id: card._id.toString(),
//                 price: card.price,
//                 offPercent: card.offPercent,
//                 title: card.title,
//                 images: [...card.image],
//                 kingSeat: card.lendSection.kingSeat,
//                 colors: [...card.colors],
//             })),
//             prices: prices.sort(),
//         },
//         revalidate: 10
//     }
//
// }

export default searchPage;