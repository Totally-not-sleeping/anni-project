import connectMongoClient from "./mongodb-connect";

export default async function SetFinalTime(userId) {
  try {
    const client = await connectMongoClient();
    const db = client.db("users");

    await db.collection("user").updateOne(
      { _id: userId },
      {
        $set: {
          time_ended: new Date().getTime(),
        },
      }
    );
  } catch (e) {
    return { success: false };
  }
}
