import TextForm from "@/components/text-form";
import SequentialPuzzleSolution from "@/lib/sequential-puzzle-solve";
import RevalidateFinale from "@/lib/revalidate-finale";
import { ObjectId } from "bson";

function PuzzleOneSolve() {
  async function onSubmit(formData, userId) {
    "use server";

    console.log(formData);

    let res = await SequentialPuzzleSolution(
      "book",
      formData,
      true,
      8,
      new ObjectId(userId)
    );

    return res;
  }

  async function reval() {
    "use server";
    await RevalidateFinale();
  }

  return (
    <section>
      <TextForm numOfQuestions={3} onSubmit={onSubmit} RevalidateAll={reval} />
    </section>
  );
}

export default PuzzleOneSolve;
