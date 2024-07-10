import TextForm from "@/components/text-form";
import SequentialPuzzleSolution from "@/lib/sequential-puzzle-solve";
import RevalidateAll from "@/lib/revalidate-all";
import { ObjectId } from "bson";

function PuzzleOneSolve() {
  async function onSubmit(formData, userId) {
    "use server";

    console.log(formData);

    let data = {
      q1: formData.q1,
      q2: formData.q2,
    };

    let res = await SequentialPuzzleSolution(
      "mascot",
      data,
      true,
      1,
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
      <TextForm numOfQuestions={2} onSubmit={onSubmit} RevalidateAll={reval} />
    </section>
  );
}

export default PuzzleOneSolve;
