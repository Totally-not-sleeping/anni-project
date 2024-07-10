import emoji_1 from "@/images/puzzle2/emoji_1.png";
import emoji_2 from "@/images/puzzle2/emoji_2.png";
import emoji_3 from "@/images/puzzle2/emoji_3.png";
import emoji_4 from "@/images/puzzle2/emoji_4.png";
import emoji_5 from "@/images/puzzle2/emoji_5.png";
import emoji_6 from "@/images/puzzle2/emoji_6.png";
import emoji_7 from "@/images/puzzle2/emoji_7.png";
import emoji_8 from "@/images/puzzle2/emoji_8.png";
import emoji_9 from "@/images/puzzle2/emoji_9.png";
import emoji_10 from "@/images/puzzle2/emoji_10.png";
import emoji_11 from "@/images/puzzle2/emoji_11.png";
import emoji_12 from "@/images/puzzle2/emoji_12.png";
import emoji_13 from "@/images/puzzle2/emoji_13.png";
import emoji_14 from "@/images/puzzle2/emoji_14.png";
import emoji_15 from "@/images/puzzle2/emoji_15.png";
import emoji_16 from "@/images/puzzle2/emoji_16.png";
import GetUserPart from "@/lib/get-user-part";
import PuzzleForm from "@/components/puzzle-form";
import CheckPuzzleTwo from "@/lib/check-puzzle-2";
import { ObjectId } from "bson";
import { cookies } from "next/headers";
import RevalidateAll from "@/lib/revalidate-all";

const emoji_images = [
  emoji_1,
  emoji_2,
  emoji_3,
  emoji_4,
  emoji_5,
  emoji_6,
  emoji_7,
  emoji_8,
  emoji_9,
  emoji_10,
  emoji_11,
  emoji_12,
  emoji_13,
  emoji_14,
  emoji_15,
  emoji_16,
];

const emojis = [
  "🍞🥐",
  "🪐🔴",
  "🎻🦇",
  "🎨🐶",
  "☀️🌞",
  "🧑‍💻🔢",
  "🎀📝",
  "🎹🎵",
  "🟪🔪",
  "🎭🌼",
  "🤤💗",
  "🇫🇷🎲",
  "🍪😂",
  "🏹📚",
  "🧐🐉",
  "🌬️😎",
];

async function PuzzleTwo() {
  const answers = await GetUserPart(
    new ObjectId(cookies().get("user_id").value),
    "emoji_array"
  );

  async function submitFunction(data) {
    "use server";
    let res = await CheckPuzzleTwo(
      data,
      new ObjectId(cookies().get("user_id").value)
    );
    return res;
  }

  async function reval() {
    "use server";
    await RevalidateAll();
  }

  return (
    <div data-secret="hmmm, there's something hidden here, try going to /cantfindthis, maybe you'll find something interesting *hint hint*">
      <PuzzleForm
        userAnswers={answers}
        images={emoji_images}
        rawTexts={emojis}
        submitFunction={submitFunction}
        RevalidateAll={reval}
      />
    </div>
  );
}

export default PuzzleTwo;
