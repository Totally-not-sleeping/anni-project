import DialogBox from "@/components/dialog-box";
import InteractiveDialogBox from "@/components/interactive-dialog-box";
import PuzzleDynamicForm from "@/components/puzzle-dynamic-form";
import CheckPuzzleThree from "@/lib/check-puzzle-3";
import RevalidateAll from "@/lib/revalidate-all";
import { ObjectId } from "bson";

function PuzzleThree() {
  const allDialog = {
    responder: { name: "Customer Service", image: "" },
    initialMessage: "Hi how are you what can I do for you today?",
    responderMessages: [
      "I didn't really hear what you said, could you repeat that?",
      "Wait, wait... uhh, what?",
      "Uhhh right what's your question again?",
      "Huh- huh what did you say?",
      "Oh yeahhhh uhhh I'll get back to you on that",
      "*sounds of snoring*",
      "*muffled angry birds theme tune*",
    ],
    finalMessage: "ugh fine! I'll help fix the title for you...",
    messages: [],
  };

  async function submitFunction(data, id) {
    "use server";
    let res = await CheckPuzzleThree(data, new ObjectId(id));
    return res;
  }

  async function reval() {
    "use server";
    await RevalidateAll();
  }

  return (
    <div data-secret="looks like we've got someone snooping around the html page again, this time... it's not *as* simple, but still pretty standard; so here's the question: what book did the so-called 'father of evolution' write? What's its title? If you find that out... paste the title as such (in all lowercase) '/[title of the book]', and you'll be brought somewhere">
      <PuzzleDynamicForm
        clicks={20}
        messages={allDialog}
        finalTitle="Name at least ten hot / nice / attractive Genshin men :)"
        submitFunction={submitFunction}
        RevalidateAll={reval}
      />
    </div>
  );
}

export default PuzzleThree;
