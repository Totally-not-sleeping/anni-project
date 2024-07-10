import connectMongoClient from "./mongodb-connect";

export default async function GetImage(name) {
  const client = await connectMongoClient();
  const db = client.db("images");

  const image = await db.collection("images").find({ name: name }).toArray();

  if (image.length === 0) {
    return null;
  }

  return image[0]["image"];
}
