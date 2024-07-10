import connectMongoClient from "./mongodb-connect";

export default async function GetUserPart(userId, part) {
  try {
    const client = await connectMongoClient();
    const db = client.db("users");
    const user = await db.collection("user").find({ _id: userId }).toArray();
    return user[0][part];
  } catch (e) {
    return undefined;
  }
}
