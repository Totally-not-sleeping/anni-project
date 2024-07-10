import connectMongoClient from "./mongodb-connect";

export default async function UpdateHelpClicks(userId) {
  try {
    const client = await connectMongoClient();
    const db = client.db("users");
    const user = await db.collection("user").find({ _id: userId }).toArray();
    const hints = user[0]["num_of_hints"];

    await db.collection("user").updateOne(
      { _id: userId },
      {
        $set: {
          num_of_hints: hints + 1,
        },
      }
    );
  } catch (e) {
    return { success: false };
  }
}
