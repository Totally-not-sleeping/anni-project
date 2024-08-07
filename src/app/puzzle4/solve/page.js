import TextForm from "@/components/text-form";
import SequentialPuzzleSolution from "@/lib/sequential-puzzle-solve";
import RevalidateAll from "@/lib/revalidate-all";
import { ObjectId } from "bson";

function PuzzleOneSolve() {
  async function onSubmit(formData, userId) {
    "use server";

    let res = await SequentialPuzzleSolution(
      "unicode",
      formData,
      true,
      4,
      new ObjectId(userId)
    );
    return res;
  }

  async function reval() {
    "use server";
    await RevalidateAll();
  }

  return (
    <section>
      <TextForm numOfQuestions={1} onSubmit={onSubmit} RevalidateAll={reval} />
    </section>
  );
}

export default PuzzleOneSolve;
