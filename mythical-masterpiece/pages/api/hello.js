import {MongoClient} from "mongodb";


export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://mahdi:MdFfxuJC78ietT@daneshkarcluster.xri1m.mongodb.net/ShoppingItemsDatabase?retryWrites=true&w=majority")
        const db = client.db();

        const productsCollection = db.collection("ShopItem");

        const result = await productsCollection.insertOne(data)

        console.log(result);
        client.close();

        res.status(201).json({message: "data inserted"});
    }

}
