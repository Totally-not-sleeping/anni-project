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
      { user: "Buttercup", message: "Would you like some cake, Daisy?" },
      {
        user: "Daisy",
        message: "Oh, no thank you, Buttercup, I'm so full already",
      },
      { user: "Buttercup", message: "But it's barely dinnertime, what'd you eat?" },
      { user: "Daisy", message: "Well… I ate a few chips, just a few" },
      { user: "Buttercup", message: "The ones that look like hexagons? How many did you eat?" },
      {
        user: "Daisy",
        message: "Well, 128520 of them to be exact",
      },
      {
        user: "Buttercup",
        message:
          "Wow, that's a lot of chips, no wonder why you're not hungry!",
      },
      
    ],
  };

  return (
    <DialogBox messages={messages} prefersImage={true} messageDelay={1750} />
  );
}

export default Clue;