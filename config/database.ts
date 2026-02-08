import { MongoClient } from "mongodb";

const { MONGODB_URL, MONGODB_DB } = process.env;

const client = new MongoClient(MONGODB_URL || "mongodb://127.0.0.1:27017");
const database = client.db(MONGODB_DB); 

async function run() {
    try {
        await client.connect();
        await database.command({ping: 1});
        console.log("Pinged your application successfully!");
    } catch(err){
        console.log(err);
    }
};

run();

export const db = {
    database
} ;