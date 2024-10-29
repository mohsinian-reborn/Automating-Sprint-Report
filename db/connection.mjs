import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config';

const connectionURI = process.env.MONGODB_URI;

const client = new MongoClient(connectionURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
});

try {
    await client.connect();
    await client.db("admin").command({ping: 1});
    console.log("Pinged mongoDB successfully! Connected to DB")
} catch (err) {
    console.error(err);
}

let db = client.db("automatePRs");

export default db;