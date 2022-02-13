import Slider from "../components/slider/Slider";
import ChubeHaraj from "../components/chubeHaraj/ChubeHaraj";
import livan from "../assets/Images/ChubeHaraj/img_1.png";
import drill from "../assets/Images/ChubeHaraj/img_2.png";
import kafsh from "../assets/Images/ChubeHaraj/img_3.png";
import sandis from "../assets/Images/ChubeHaraj/img_4.png";
import headphone from "../assets/Images/ChubeHaraj/img_5.png";
import cream from "../assets/Images/ChubeHaraj/img.png";
import KalaPreview from "../components/kalaPreview/KalaPreview";
import firstImagedPreview from "../assets/Images/KalaPreview/ladies_new.png";
import secondImagedPreview from "../assets/Images/KalaPreview/men_new.png";
import MediaFooter from "../components/footer/MediaFooter";
import AdsCard1 from "../components/AdsCard/AdsCard1";
import AdsCard2 from "../components/AdsCard/AdsCard2";
import AdsCard3 from "../components/AdsCard/AdsCard3";
import AdsCard4 from "../components/AdsCard/AdsCard4";
import AdsCard5 from "../components/AdsCard/AdsCard5";
import AdsCard6 from "../components/AdsCard/AdsCard6";
import AdsCard7 from "../components/AdsCard/AdsCard7";
import AdsCard8 from "../components/AdsCard/AdsCard8";
import useWindowSize from "../utils/useWindowSize";
import {MongoClient} from "mongodb";

<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const Home = (props) => {
    console.log(props.CardData)
    // const kalaPreviewTitleHide = 1 ,
    const windowSize = useWindowSize();
    // const slideRespHandler = (windowSize) => {
    //   if (windowSize.width > 425) {
    //     KalaSlide = 4
    //   } else {

    //   }

    const inputsHandler = async (data) => {
        const response = await fetch("/api/hello", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const randomData = await response.json();
        console.log(randomData);
    }
    // }
    // console.log(windowSize.width)
    return (
        <>
            <Slider/>
            <ChubeHaraj products={props.CardData} cardsPaddingTop={3}/>
            <AdsCard1/>
            <KalaPreview
                products={props.CardData}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />

            <AdsCard2/>
            <KalaPreview
                products={props.CardData}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <AdsCard3/>
            <KalaPreview
                products={props.CardData}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <KalaPreview
                products={props.CardData}
                cardsPaddingTop={1}
                imagedKalaPreview={1}
                previewTitle={"لوازم آرایشی"}
                previewImage={firstImagedPreview.src}
                // ImageTitle={"لوازم آرایشی"}
            />
            <AdsCard4/>
            <KalaPreview
                products={props.CardData}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <AdsCard5/>
            <KalaPreview
                products={props.CardData}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <AdsCard6/>
            <KalaPreview
                products={props.CardData}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <AdsCard7/>
            <KalaPreview
                products={props.CardData}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />
            <AdsCard8/>
            <KalaPreview
                products={props.CardData}
                cardsPaddingTop={1}
                previewTitle={"گوشی موبایل"}
            />

            <MediaFooter/>
        </>
    );
};


export const getStaticProps = async () => {
    const client = await MongoClient.connect(
        "mongodb+srv://mahdi:MdFfxuJC78ietT@daneshkarcluster.xri1m.mongodb.net/ShoppingItemsDatabase?retryWrites=true&w=majority"
    )
    const db = client.db();

    const productsCollection = db.collection("ShopItem");
    const Cards = await productsCollection.find().toArray();
    console.log(Cards);

    client.close();

    return {
        props: {
            CardData: Cards.map(card => ({
                id: card._id.toString(),
                price: card.price,
                offPercent: card.offPercent,
                name: card.title,
                image: [...card.image],
            }))
        },
        revalidate: 60
    }
}

export default Home;
