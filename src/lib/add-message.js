import connectMongoClient from "./mongodb-connect";

export default async function AddMessage(userId, message) {
  try {
    const client = await connectMongoClient();
    const db = client.db("users");

    let username_in = await db
      .collection("user")
      .find({ _id: userId })
      .toArray();

    let username = username_in[0]["username"];

    const connectDb = client.db("anni-puzzle");

    const res = await connectDb.collection("messages").insertOne({
      username: username,
      message: message,
    });

    return { success: true };
  } catch (e) {
    console.log(e.message)
    return { success: false };
  }
}
