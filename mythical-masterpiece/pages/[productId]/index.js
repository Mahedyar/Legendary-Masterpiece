import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {MongoClient} from "mongodb";
import MainProductImage from "../../components/productImage/MainProductImage";
import ProductVizhegiPrice from "../../components/productVizhegiPrice/ProductVizhegiPrice";
import ProductSellerTable from "../../components/ProductSellerTable/ProductSellerTable";
import ProductBigDescription from "../../components/productBigDescription/ProductBigDescription";
import DescriptionTopBar from "../../components/productBigDescription/DescriptionTopBar";
import KalaPreview from "../../components/kalaPreview/KalaPreview";
import {Grid} from "@mui/material";


export default function ProductPage(props) {

    if (!props.productData) {
        return (
            <p>Loading ...</p>
        )
    }

    return (
        <Container>
            <Grid container justifyContent={"center"} direction={"row-reverse"} rowSpacing={"8px"}>
                <Grid item  lg={4} xs={12} >
                    <MainProductImage product={props.productData[0]}/>
                </Grid>
                <Grid item  lg={5} xs={12}>
                    <ProductVizhegiPrice product={props.productData[0]}/>
                </Grid>
                <Grid  lg={3} xs={12}>
                    <ProductSellerTable  sellers={props.productData[0]}/>
                </Grid>
                <Grid item  lg={12} xs={12}>
                    <DescriptionTopBar/>
                </Grid>
                <Grid item  lg={12} xs={12}>
                    <ProductBigDescription
                        description={props.productData[0].description}
                        properties={props.productData[0].properties}
                        product={props.productData[0]}
                    />
                </Grid>
                <Grid item  lg={12} xs={12}>
                    <KalaPreview
                        products={props.productData}
                        cardsPaddingTop={1}
                        previewTitle={"گوشی موبایل"}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export const getStaticPaths = async () => {
    const cards = ["620a567ab5c4f76d8e9ef038", "6207a5e0430ad163bdd97391", "620a4e53b5c4f76d8e9ef036", "620a515cb5c4f76d8e9ef037", "620a57b2b5c4f76d8e9ef039"]
    const pathWithParams = cards.map(card => ({params: {productId: card}}))
    return {
        paths: pathWithParams,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const {params} = context;
    const knownProductId = params.productId
    const client = await MongoClient.connect(
        "mongodb+srv://mahdi:MdFfxuJC78ietT@daneshkarcluster.xri1m.mongodb.net/ShoppingItemsDatabase?retryWrites=true&w=majority"
    )
    const db = client.db();
    const productsCollection = db.collection("ShopItem");
    const cards = await productsCollection.find().toArray();
    client.close();
    const product = cards.filter(item => item._id.toString() === knownProductId.toString())
    return {
        props: {
            productData: [{
                id: product[0]._id.toString(),
                seller: product[0].seller.name,
                score: product[0].seller.score,
                color: "#09b909",
                sellerType: "خوب",
                guarantee: product[0].seller.guaranty,
                availability: product[0].seller.status,
                installment: product[0].lendSection.lend,
                prePayment: product[0].lendSection.prePayment,
                reward: product[0].lendSection.kingSeat,
                image: [product[0].image[0], product[0].image[1], product[0].image[2], product[0].image[3]],
                description: product[0].review,
                properties: product[0].properties,
                rating: product[0].rating,
                comments: product[0].comments,
                brand: product[0].brands,
                tags: product[0].tags,
                title: product[0].title,
                price: product[0].price,
                offPercent: product[0].offPercent,
            }]
        },
        revalidate: 10
    }

}
