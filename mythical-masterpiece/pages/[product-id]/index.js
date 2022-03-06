import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MainProductImage from "../../components/productImage/MainProductImage";
import ProductVizhegiPrice from "../../components/productVizhegiPrice/ProductVizhegiPrice";
import ProductSellerTable from "../../components/ProductSellerTable/ProductSellerTable";
import ProductBuyLendo from "../../components/ProductBuyLendo/ProductBuyLendo";

import ProductBigDescription from "../../components/productBigDescription/ProductBigDescription";
import DescriptionTopBar from "../../components/productBigDescription/DescriptionTopBar";
import KalaPreview from "../../components/kalaPreview/KalaPreview";
import {sellers, lendo} from "../../data/sellers";
import {products} from "../../data/products";

export default function ProductPage() {
    return (
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
                        gridTemplateColumns: "repeat(8, 1fr)",
                        gap: 1,
                        gridTemplateRows: "auto",
                        gridTemplateAreas: `
                                         "breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb breadCrumb"
                                         ". . . . . . . . "
                                         ". . . . . . . . "
                                        "main main info info info sidebar sidebar sidebar "
                                        "stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures stylesFeatures "
                                         "tabList tabList tabList tabList  tabList tabList tabList tabList"
                                         "SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct SimilarProduct"
                                         ". . . . . . . . "
                                         ". . . . . . . . "
                                         `,
                    }}
                >
                    {/* <Box sx={{gridArea: "breadCrumb", bgcolor: "pink"}}>breadCrumb</Box> */}
                    <Box sx={{gridArea: "main"}}>
                        <ProductSellerTable sellers={sellers}/>
                    </Box>
                    <Box sx={{gridArea: "info"}}>
                        <ProductVizhegiPrice/> <ProductBuyLendo lendo={lendo}/>
                    </Box>
                    <Box sx={{gridArea: "sidebar"}}>
                        <MainProductImage/>
                    </Box>
                    <Box sx={{gridArea: "stylesFeatures"}}>
                        <DescriptionTopBar/>
                    </Box>
                    <Box sx={{gridArea: "tabList"}}>
                        <Box
                            sx={{
                                marginTop: "15px",
                                border: "2px solid #d9d9d9",
                                borderRadius: "15px",
                            }}
                        >
                            <ProductBigDescription/>
                        </Box>
                    </Box>
                    <Box sx={{gridArea: "SimilarProduct",}}>
                        <KalaPreview
                            products={products}
                            cardsPaddingTop={1}
                            previewTitle={"گوشی موبایل"}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

// export const getStaticProps = async () => {
//     const client = await MongoClient.connect(
//         "mongodb+srv://mahdi:MdFfxuJC78ietT@daneshkarcluster.xri1m.mongodb.net/ShoppingItemsDatabase?retryWrites=true&w=majority"
//     )
//
//     const db = client.db();
//
//     const productsCollection = db.collection("ShopItem");
//     const cards = await productsCollection.find().toArray();
//
//     client.close();
//     return {
//         props: {
//             CardData: cards.map(card => ({
//                 id: card._id.toString(),
//                 seller: card.seller.name,
//                 score: card.seller.score,
//                 color: "#09b909",
//                 sellerType: "خوب",
//                 guarantee: card.seller.guarantee,
//                 availability: card.seller.status,
//                 installment: card.lendSection.lend,
//                 prePayment: card.lendSection.prePayment,
//                 reward: card.lendSection.kingSeat,
//             }))
//         },
//         revalidate: 10
//     }
//
// }
