import connectMongoClient from "./mongodb-connect";
import createSHA256Hash from "./hash-function";
import shuffleArray from "./array-shuffle";
import { revalidatePath } from "next/cache";

export default async function AddUser(username, password) {
  try {
    if (password.length < 8) {
      return { message: "Error: password is too short" };
    }

    const client = await connectMongoClient();
    const db = client.db("users");

    let isRepeated = await db
      .collection("user")
      .find({ username: username })
      .toArray();

    if (isRepeated.length > 0) {
      return { message: "Error: username already exists" };
    }

    let emoji_array = [...Array(16).keys()];
    let novel_array = [...Array(28).keys()];
    shuffleArray(emoji_array);
    shuffleArray(novel_array);
    emoji_array = emoji_array.slice(0, 7);
    novel_array = novel_array.slice(0, 5);

    const res = await db.collection("user").insertOne({
      username: username,
      password: createSHA256Hash(password),
      puzzles: {
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
        q7: false,
        q8: false,
      },
      emoji_array: emoji_array,
      novel_array: novel_array,
      num_of_hints: 0,
      num_of_fails: {
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
        q7: 0,
        q8: 0,
      },
      current_puzzle: "q1",
      time_joined: new Date().getTime(),
      time_ended: -1,
      final_ended: false
    });

    revalidatePath("/");

    return { message: "success", id: res.insertedId.toString() };
  } catch (e) {
    return { message: `An Error has occured: ${e.message}` };
  }
}
