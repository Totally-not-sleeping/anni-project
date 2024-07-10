import { redirect } from "next/navigation";
import connectMongoClient from "./mongodb-connect";

export default async function GetUserProgress(userId) {
  try {
    const client = await connectMongoClient();
    const db = client.db("users");
    const user = await db.collection("user").find({ _id: userId }).toArray();

    return {
      progress: user[0]["puzzles"],
      currentPuzzle: user[0]["current_puzzle"],
    };
  } catch (e) {
    redirect("/sign-in");
  }
}
