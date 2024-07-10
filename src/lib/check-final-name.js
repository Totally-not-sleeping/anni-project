import connectMongoClient from "./mongodb-connect";

export default async function CheckFinalName(userId, message) {
  const client = await connectMongoClient();

  const user_db = client.db("users");
  const user = await user_db.collection("user").find({ _id: userId }).toArray();

  if (user.length === 0) {
    return { success: false, message: "You are not signed in..." };
  }

  const db = client.db("anni-puzzle");
  const answers = await db.collection("answers").find({}).toArray();
  let correct_ans = answers[0]["name"];

  if (message.toLowerCase().trim() !== correct_ans.toLowerCase().trim()) {
    return {
      success: false,
      message: "Name isn't quite right~",
    };
  }

  await user_db.collection("user").updateOne(
    { _id: userId },
    {
      $set: {
        final_ended: true,
      },
    }
  );

  return {
    success: true,
    message:
      "Congratulations, you have solved everything, now comes time to reveal!",
  };
}
