import { MongoClient } from "mongodb";

let db;

async function connectMongoClient() {
  if (!db) {
    db = new MongoClient(process.env.MONGODB_URL);
    await db.connect();
    return db;
  } else {
    return db;
  }
}

export default connectMongoClient;
