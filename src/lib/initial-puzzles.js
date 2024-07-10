import GetUserProgress from "./get-user-progress";

export default async function InitializePuzzles(id) {
  const userProgress = await GetUserProgress(id);
  const puzzleData = Object.entries(userProgress["progress"]).map((p, i) => {
    let returnObj = {};
    returnObj["text"] = `Puzzle ${i + 1}`;
    returnObj["puzzleClues"] = `/puzzle${i + 1}/clues`;
    returnObj["puzzleSolve"] = `/puzzle${i + 1}/solve`;
    returnObj["solved"] = false;
    returnObj["locked"] = true;
    returnObj["inProgress"] = false;
    if (p[1]) {
      returnObj["solved"] = true;
      returnObj["locked"] = false;
      returnObj["inProgress"] = false;
    }
    if (p[0] === userProgress["currentPuzzle"]) {
      returnObj["locked"] = false;
      returnObj["inProgress"] = true;
    }

    if([1, 2].includes(i)) {
      returnObj["puzzleClues"] = null;
      returnObj["puzzleSolve"] = `/puzzle${i + 1}`;
    }

    return returnObj;
  });
  return puzzleData;
}
