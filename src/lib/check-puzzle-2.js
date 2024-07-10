// emoji_array.sort((a, b) => a - b);
import connectMongoClient from "./mongodb-connect";
import { revalidatePath } from "next/cache";

export default async function CheckPuzzleTwo(data, userId) {
  const currentPuzzle = `q2`;
  const previousPuzzle = `q1`;
  const nextPuzzle = `q3`;

  const client = await connectMongoClient();

  const user_db = client.db("users");
  const user = await user_db.collection("user").find({ _id: userId }).toArray();

  if (user.length === 0) {
    return { success: false, message: "You are not signed in..." };
  }

  if (!user[0]["puzzles"][previousPuzzle]) {
    return {
      success: false,
      message: "You have not completed the previous puzzle yet...",
    };
  }

  if (user[0]["puzzles"][currentPuzzle]) {
    return {
      success: true,
      message: "You have already completed this puzzle, congrats :)",
    };
  }

  let emojiAnswers = user[0]["emoji_array"];
  emojiAnswers.sort();

  const db = client.db("anni-puzzle");
  const answers = await db.collection("answers").find({}).toArray();
  let correct_ans = answers[0]["members"];

  let sorted_answers = correct_ans.map((val) => val[1]);
  sorted_answers = sorted_answers.filter((_, i) => emojiAnswers.includes(i));

  let wrongArray = [];

  // console.log(sorted_answers, data, "first time around");

  // // sorted_answers.sort((a, b) => a - b);
  // // data.sort((a, b) => a - b);

  // console.log(sorted_answers, data, "second time around");

  for (let i = 0; i < sorted_answers.length; i++) {
    if (!sorted_answers[i].includes(data[i])) {
      wrongArray.push(i);
    }
  }

  if (wrongArray.length > 0) {
    await user_db.collection("user").updateOne(
      { _id: userId },
      {
        $set: {
          num_of_fails: {
            ...user[0]["num_of_fails"],
            [currentPuzzle]: user[0]["num_of_fails"][currentPuzzle] + 1,
          },
        },
      }
    );
    return {
      success: false,
      message: "One or more of your answers were incorect, keep trying!",
      wrong: wrongArray,
    };
  }

  await user_db.collection("user").updateOne(
    { _id: userId },
    {
      $set: {
        puzzles: {
          ...user[0]["puzzles"],
          [currentPuzzle]: true,
        },
        current_puzzle: nextPuzzle,
      },
    }
  );

  return {
    success: true,
    message: "Correct answer, congrats!",
    wrong: wrongArray,
  };
}
