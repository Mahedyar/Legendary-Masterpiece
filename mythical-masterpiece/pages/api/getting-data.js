import {MongoClient} from "mongodb";

const handler = async (req, res) => {
    if (req.method === "GET") {
        const client = await MongoClient.connect("mongodb+srv://mahdi:MdFfx@uJC78ietT@daneshkarcluster.xri1m.mongodb.net/ShoppingItemsDatabase?retryWrites=true&w=majority")
        const db = client.db();



    }
}

export default handler;
