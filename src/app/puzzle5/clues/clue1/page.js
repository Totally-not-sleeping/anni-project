import Daisy from "@/images/puzzle4/daisy.png";
import Buttercup from "@/images/puzzle4/buttercup.png";
import DialogBox from "@/components/dialog-box";

function Clue() {
  const messages = {
    images: {
      Daisy: Daisy,
      Buttercup: Buttercup,
    },
    users: {
      self: "Daisy",
      other: "Buttercup",
    },
    messages: [
      { user: "Daisy", message: "Hey Buttercup!" },
      { user: "Buttercup", message: "Oh hey Daisy!" },
      {
        user: "Buttercup",
        message: "Aren't you studying for your history exam?",
      },
      {
        user: "Daisy",
        message:
          "Yeah, I'm having some trouble memorizing the contents though, could you help me with my flashcards?",
      },
      { user: "Buttercup", message: "Of course!" },
      {
        user: "Daisy",
        message: "Just pick any from the pile, let me try and answer them",
      },
      {
        user: "Buttercup",
        message: "Okay, first question: when was Issac Newton born?",
      },
      {
        user: "Daisy",
        message: "I think… it was 1642",
      },
      {
        user: "Buttercup",
        message: "Then, how about Charles Darwin?",
      },
      {
        user: "Daisy",
        message: "Ooh I know this, 1809",
      },
      {
        user: "Buttercup",
        message: "Here's a hard one, when was the server created?",
      },
      { user: "Daisy", message: "Hm…" },
      { user: "Daisy", message: "2020?" },
      {
        user: "Buttercup",
        message:
          "Correct! You got all three right! You're going to ace this exam!",
      },
    ],
  };

  return (
    <DialogBox messages={messages} prefersImage={true} messageDelay={1750} />
  );
}

export default Clue;
