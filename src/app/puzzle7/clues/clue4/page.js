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
      {
        user: "Buttercup",
        message: "Hey Daisy, what are you having for dinner?",
      },
      {
        user: "Daisy",
        message:
          "Oh hi Buttercup, I've been eating a lot of 🍞 recently, so I think I might have some more.",
      },
      { user: "Buttercup", message: "Oh? What type of 🍞?" },
      {
        user: "Daisy",
        message: "I've been eating regular 🍞, 🥐s, and 🥖s",
      },
      {
        user: "Daisy",
        message:
          "You know, I've been eating so much 🍞 I think it almost sounds like a keyword to me…",
      },
      {
        user: "Buttercup",
        message: "Haha, sounds like you really love 🍞",
      },
    ],
  };

  return (
    <DialogBox messages={messages} prefersImage={true} messageDelay={1750} />
  );
}

export default Clue;
