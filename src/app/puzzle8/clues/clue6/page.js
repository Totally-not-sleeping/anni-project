import Daisy from "@/images/puzzle4/daisy.png";
import Phone from "@/images/puzzle8/phone.png";
import DialogBox from "@/components/dialog-box";

function Clue() {
  const messages = {
    images: {
      Daisy: Daisy,
      Voicemail: Phone,
    },
    users: {
      self: "Daisy",
      other: "Voicemail",
    },
    messages: [
      {
        user: "Voicemail",
        message:
          "You have reached the voicemail of 1 3 6 - 5 6 7 - 11 8 7 , please leave a message after the beep",
      },
      {
        user: "Voicemail",
        message: "*beep*",
      },
      {
        user: "Daisy",
        message:
          "Hi there, I'm looking for someone to review my essay, and someone recommended you to me!",
      },
      { user: "Daisy", message: "Please call me back when you can." },
      {
        user: "Daisy",
        message:
          "I'll first tell you the number of chapters, then the number of paragraphs (or lines if it's a poem I want to review!), and finally the number of words!",
      },
      {
        user: "Daisy",
        message: "Thanks for taking the time out of your day to help!",
      },
    ],
  };

  return (
    <DialogBox messages={messages} prefersImage={true} messageDelay={1750} />
  );
}

export default Clue;
