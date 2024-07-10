import connectMongoClient from "./mongodb-connect";
import createSHA256Hash from "./hash-function";
import { revalidatePath } from "next/cache";

export default async function SignIn(username, password) {
  try {
    const client = await connectMongoClient();
    const db = client.db("users");
    const user = await db
      .collection("user")
      .find({ username: username })
      .toArray();

    if (
      user.length === 0 ||
      createSHA256Hash(password) != user[0]["password"]
    ) {
      return { message: "Your password or username may be incorrect." };
    }

    let id = user[0]["_id"].toString();

    revalidatePath("/");

    return { message: "success", id: id };
  } catch (e) {
    return { message: `An error has occured: ${e.message}` };
  }
}
