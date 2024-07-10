import Daisy from "@/images/puzzle4/daisy.png";
import Teacher from "@/images/puzzle6/piano.png";
import DialogBox from "@/components/dialog-box";

function Clue() {
  const messages = {
    images: {
      Daisy: Daisy,
      Teacher: Teacher,
    },
    users: {
      self: "Daisy",
      other: "Teacher",
    },
    messages: [
      { user: "Daisy", message: "I don't think I can play this…" },
      {
        user: "Teacher",
        message: "No, no you can! Really, all you need to know is the theme!",
      },
      {
        user: "Daisy",
        message: "But it sounds so hard. Can we try an easier version?",
      },
      {
        user: "Teacher",
        message:
          "Of course, the first time playing is always the hardest. How about this, let's try a different transcription for the piano that's a level easier?",
      },
      { user: "Daisy", message: "Yeah, we can start there and move up." },
      {
        user: "Teacher",
        message: "Alright!",
      },
      {
        user: "Teacher",
        message:
          "Here's the new version, let's try out the theme, thirteen notes.",
      },
      {
        user: "Daisy",
        message: "Okay! It only lasts for five measures, I can do it!",
      },
      {
        user: "Teacher",
        message:
          "Indeed, before you play, let's look at the key; one sharp, in minor. Now let's continue",
      },
    ],
  };

  return (
    <DialogBox messages={messages} prefersImage={true} messageDelay={1750} />
  );
}

export default Clue;
