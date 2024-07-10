import connectMongoClient from "./mongodb-connect";
// import { ObjectId } from "bson";

export default async function HasPermission(userId, puzzle) {
  try {
    const client = await connectMongoClient();
    const db = client.db("users");
    const user = await db.collection("user").find({ _id: userId }).toArray();

    if (user.length === 0) {
      return false;
    }

    const perms = user[0]["puzzles"];

    for (let i = 0; i < puzzle - 1; i++) {
      if (!perms[`q${i + 1}`]) {
        return false;
      }
    }

    return true;
  } catch (e) {
    return false;
  }
}
