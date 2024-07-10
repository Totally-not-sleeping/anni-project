import connectMongoClient from "./mongodb-connect";

export default async function CheckPuzzleThree(data, userId) {
  const currentPuzzle = `q3`;
  const previousPuzzle = `q2`;
  const nextPuzzle = `q4`;

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

  // if (user[0]["puzzles"][currentPuzzle]) {
  //   return {
  //     success: true,
  //     message: "You have already completed this puzzle, congrats :)",
  //   };
  // }

  const db = client.db("anni-puzzle");
  const answers = await db.collection("answers").find({}).toArray();
  let correct_ans = answers[0]["genshin"];
  //   let correct_ans_array = [];
  //   correct_ans.forEach(
  //     (ans) => (correct_ans_array = [...correct_ans_array, ...ans])
  //   );

  let filtered_data = [...new Set(data)];

  // console.log(filtered_data, correct_ans, "correct_ans_array data hfwiuehfw");

  let numCorrect = 0;

  for (let i = 0; i < filtered_data.length; i++) {
    for (let j = 0; j < correct_ans.length; j++) {
      if (correct_ans[j].includes(filtered_data[i])) {
        numCorrect++;
        break;
      }
    }
  }

  if (user.length !== 0 && numCorrect < 10) {
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

    let wrong = [];

    for (let i = 0; i < data.length; i++) {
      let isWrong = true;
      for (let j = 0; j < correct_ans.length; j++) {
        if (correct_ans[j].includes(data[i])) {
          isWrong = false;
          break;
        }
      }
      if (isWrong) {
        wrong.push(i);
      }
    }
    return {
      success: false,
      message: "One or more of your answers were incorect, keep trying!",
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
  };
}
