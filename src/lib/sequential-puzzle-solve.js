import connectMongoClient from "./mongodb-connect";

export default async function SequentialPuzzleSolution(
  name,
  data,
  inSequence,
  puzzle,
  userId
) {
  try {
    const currentPuzzle = `q${puzzle}`;
    const previousPuzzle = `q${puzzle - 1}`;
    const nextPuzzle = `q${puzzle + 1}`;

    const client = await connectMongoClient();

    const user_db = client.db("users");
    const user = await user_db
      .collection("user")
      .find({ _id: userId })
      .toArray();

    if (user.length === 0) {
      return { success: false, message: "You are not signed in..." };
    }

    if (puzzle != 1 && !user[0]["puzzles"][previousPuzzle]) {
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

    const db = client.db("anni-puzzle");
    const answers = await db.collection("answers").find({}).toArray();
    let correct_ans = answers[0][name];

    let values = Object.values(data);

    let val_original = [...values];

    let correct_ans_original = [...correct_ans];

    console.log(values, correct_ans);

    if (inSequence) {
      values = values.sort();
      correct_ans = correct_ans.sort();
    }

    let solved = true;

    let wrong = [];

    console.log(values, correct_ans);

    for (let i = 0; i < values.length; i++) {
      if (values[i] != correct_ans[i]) {
        solved = false;
      }
    }

    if (inSequence) {
      for (let i = 0; i < val_original.length; i++) {
        if (!correct_ans_original.includes(val_original[i])) {
          wrong.push(i);
        }
      }
    } else {
      for (let i = 0; i < val_original.length; i++) {
        if (correct_ans_original[i] !== val_original[i]) {
          wrong.push(i);
        }
      }
    }

    if (!solved) {
      if (user.length !== 0) {
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
      }
      return {
        success: false,
        message:
          "One or more of the answers are incorrect, try again, don't give up yet~",
        wrong: wrong,
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
      wrong: wrong,
    };
  } catch (e) {
    return {
      success: false,
      message: `An error has occured: ${e?.message}`,
      wrong: [],
    };
  }
}
