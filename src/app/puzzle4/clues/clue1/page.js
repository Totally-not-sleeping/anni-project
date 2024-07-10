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
      { user: "Buttercup", message: "Hey Daisy!" },
      {
        user: "Daisy",
        message: "The anniversary's coming up, aren't you excited?",
      },
      { user: "Buttercup", message: "Of course I am!" },
      { user: "Daisy", message: "We have a lot of planning to do for it too…" },
      { user: "Buttercup", message: "Like?" },
      {
        user: "Daisy",
        message: "Well, we need to prepare for all the incoming guests",
      },
      {
        user: "Daisy",
        message:
          "We also need to sketch out all the events and coordinate times",
      },
      {
        user: "Daisy",
        message:
          "And afterwards, we have a lot of events too! Like the emoji proposals that we want to send",
      },
      { user: "Buttercup", message: "Wow, that sounds hard and complicated!" },
      { user: "Daisy", message: "It sure is" },
      {
        user: "Buttercup",
        message:
          "I never heard of this emoji proposal either, who are we sending these to?",
      },
      {
        user: "Daisy",
        message: "Well, we're sending them all to the Unicode Consortium",
      },
      {
        user: "Daisy",
        message:
          "Then they'll choose whether they want to approve our proposals or not",
      },
      {
        user: "Buttercup",
        message: "The words 'Unicode Consortium' sounds very intimidating",
      },
      {
        user: "Daisy",
        message: "I know, right? They manage so many characters there!",
      },
      { user: "Buttercup", message: "Yeah!" },
    ],
  };

  return (
    <DialogBox messages={messages} prefersImage={true} messageDelay={1750} />
  );
}

export default Clue;
