import { redirect } from "next/navigation";

function PuzzleOne() {
  redirect("/puzzle1/clues");
  return <div></div>;
}

export default PuzzleOne;
