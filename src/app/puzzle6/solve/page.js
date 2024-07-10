import TextFormVariant from "@/components/text-form-variant";
import SequentialPuzzleSolution from "@/lib/sequential-puzzle-solve";
import RevalidateAll from "@/lib/revalidate-all";
import { ObjectId } from "bson";

function PuzzleOneSolve() {
  async function onSubmit(formData, userId) {
    "use server";

    let res = await SequentialPuzzleSolution(
      "music",
      formData,
      false,
      6,
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
      <TextFormVariant
        numOfQuestions={1}
        onSubmit={onSubmit}
        numPer={13}
        RevalidateAll={reval}
      />
    </section>
  );
}

export default PuzzleOneSolve;
