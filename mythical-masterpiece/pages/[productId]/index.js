import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {MongoClient} from "mongodb";
import MainProductImage from "../../components/productImage/MainProductImage";
import ProductVizhegiPrice from "../../components/productVizhegiPrice/ProductVizhegiPrice";
import ProductSellerTable from "../../components/ProductSellerTable/ProductSellerTable";
import ProductBuyLendo from "../../components/ProductBuyLendo/ProductBuyLendo";

import ProductBigDescription from "../../components/productBigDescription/ProductBigDescription";
import DescriptionTopBar from "../../components/productBigDescription/DescriptionTopBar";
import KalaPreview from "../../components/kalaPreview/KalaPreview";
import useMediaQuery from "@mui/material/useMediaQuery";
import {lendo, sellers} from "../../data/sellers";
import {products} from "../../data/products";


export default function ProductPage(props) {
    const matches = useMediaQuery('(max-width:769px)');
    const lapTap = useMediaQuery('(min-width:1025px)')
    if (!props.productData) {
        return (
            <p>Loading ...</p>
        )
    }

    return (
        matches ?
            <Container maxWidth={matches ? "lg" : "xs"}>
                <Box
                    sx={{
                        width: "100%",
                        "& > .MuiBox-root > .MuiBox-root": {
                            p: 0.5,

                            fontSize: "0.875rem",
                            fontWeight: "700",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(1, 768px)",
                            gap: 1,
                            gridTemplateRows: "auto",
                            gridTemplateAreas: `
                                         "sidebar"
                                         "info"
                                         "main"
                                         "stylesFeatures"
                                         "tabList"
                                         "SimilarProduct" 
                                         `,
                        }}
                    >
                        <Box sx={{gridArea: "sidebar",}}><MainProductImage/></Box>
                        <Box sx={{gridArea: "info", }}><ProductVizhegiPrice product={props.productData[0]}/> <ProductBuyLendo
                            lendo={props.productData[0]}/></Box>
                        <Box sx={{gridArea: "main",}}><ProductSellerTable sellers={props.productData[0]}/></Box>
                        <Box sx={{gridArea: "stylesFeatures", }}><DescriptionTopBar/></Box>
                        <Box sx={{gridArea: "tabList",}}>
                            <Box
                                sx={{
                                    marginTop: "15px",
                                    border: "2px solid #d9d9d9",
                                    borderRadius: "15px",
                                }}
                            ><ProductBigDescription
                                description={props.productData[0].description}
                                properties={props.productData[0].properties}
                                product={props.productData[0]}
                            /></Box>
                        </Box>
                        <Box sx={{gridArea: "SimilarProduct",}}>
                            <KalaPreview
                                products={props.productData}
                                cardsPaddingTop={1}
                                previewTitle={"گوشی موبایل"}
                            />
                        </Box>
                    </Box>
                </Box>

            </Container> :
            <Container maxWidth="lg">
                <Box
                    sx={{
                        width: "100%",
                        //   height: "1400px",
                        "& > .MuiBox-root > .MuiBox-root": {
                            p: 0.5,

                            fontSize: "0.875rem",
                            fontWeight: "700",
                        },
                    }}
                >

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: lapTap ? "(2,1fr)" : "repeat(8, 1fr)",
                            gap: 1,
                            gridTemplateRows: "auto",
                            gridTemplateAreas: lapTap ?
                                `
                                        "main main info info info sidebar sidebar sidebar "
                                        "stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures "
                                         "tabList tabList tabList tabList  tabList tabList tabList tabList"
                                         "SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct"
                                         ". . . . . . . . "
                                         ". . . . . . . . "
                                         ` :
                                `
                            "breadCrumb breadCrumb "
                                        "info sidebar "
                                        "main main" 
                                       " stylesFeatures stylesFeatures"
                                       "tabList tabList"
                                       "SimilarProduct SimilarProduct"`,
                        }}
                    >
                        <Box sx={{gridArea: "main", }}><ProductSellerTable
                            sellers={props.productData[0]}/></Box>
                        <Box sx={{gridArea: "info",}}><ProductVizhegiPrice
                            product={props.productData[0]}/> <ProductBuyLendo lendo={props.productData[0]}/></Box>
                        <Box sx={{gridArea: "sidebar", }}><MainProductImage
                            product={props.productData[0]}/></Box>
                        <Box sx={{gridArea: "stylesFeatures", }}><DescriptionTopBar/></Box>
                        <Box sx={{gridArea: "tabList", }}>
                            <Box
                                sx={{
                                    marginTop: "15px",
                                    border: "2px solid #d9d9d9",
                                    borderRadius: "15px",
                                }}
                            ><ProductBigDescription
                                description={props.productData[0].description}
                                properties={props.productData[0].properties}
                                product={props.productData[0]}
                            /></Box>
                        </Box>
                        <Box sx={{gridArea: "SimilarProduct", }}>
                            <KalaPreview
                                products={props.productData}
                                cardsPaddingTop={1}
                                previewTitle={"گوشی موبایل"}
                            />
                        </Box>
                    </Box>
                </Box>
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
