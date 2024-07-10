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
      { user: "Daisy", message: "Just came out from the concert!" },
      { user: "Buttercup", message: "How'd it go?" },
      {
        user: "Daisy",
        message:
          "It went really well! I finally got to hear the original performance, with all the orchestral instruments!",
      },
      {
        user: "Daisy",
        message:
          "I really loved the melody, and I think the violin soloist was really stunning!",
      },
      { user: "Buttercup", message: "Wow, that sounds amazing!" },
      {
        user: "Daisy",
        message:
          "I know right! I'm going to play this sometime soon, but on the piano of course.",
      },
      {
        user: "Buttercup",
        message: "May I come to your recital when the day comes?",
      },
      {
        user: "Daisy",
        message: "Of course, you're welcome anywhere I am!",
      },
    ],
  };

  return (
    <DialogBox messages={messages} prefersImage={true} messageDelay={1750} />
  );
}

export default Clue;
