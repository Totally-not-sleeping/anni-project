import CluePiece from "@/components/clue-piece";
import GetUserPart from "@/lib/get-user-part";
import { ObjectId } from "bson";
import { cookies } from "next/headers";

async function Clue() {
  const clues = [
    "destined to know a muse, but more than a model or a sitter",
    "art can only be art with him, he encompasses art in his being",
    "the world shall never know of his beauty",
    "influence spoils and corrupts the muse, his simplicity and beautiful nature will be rid of him",
    "brainless and beautiful, he draws more attention than blooming summer flowers",
    "art is the creation of beautiful things, not a form of the truth",
    "once known and introduced, the corruption begins",
    "as siblings, we will fight each other but also for one another. Bring her harm and I will kill you",
    "the spoon has finished stirring curiosity and imagination, she is no longer interesting",
    "art is a requirement to be significant",
    "she has lost her chance to shine, her looks cannot save her",
    "one day she is Desdemona, the next she is Juliet",
    "Juliet has taken the poison. She was seventeen.",
    "it's her fault, not mine, why does the painting look so?",
    "tragedy strikes beyond the stage, it is too late to make amends",
    "forget that I was once happy for the proposal so many chapters ago -- she was once a goddess, and now she is a wretch",
    "I am not heartless, am I?",
    "she's simply a memory. A kiss and a few words.",
    "the worship of a muse is dangerous, you could fall. In love.",
    "every stroke of the brush revealed my secret to you. It is obvious that I love you.",
    "Why does he not reciprocate?",
    "The devil's work lingers in the attic.",
    "Dissolve the eyes that saw the sin. Dissolve of the entire being altogether. It has no business lingering in hell brought to earth.",
    "You are too rich to ever do such a thing.",
    "To rid of sin is to rid of the sinner. He got rid of the wrong thing.",
    "He has taken the secret to the grave",
  ];

  const cluesShown = await GetUserPart(
    new ObjectId(cookies().get("user_id").value),
    "novel_array"
  );

  const reducedClues = clues.filter((_, i) => cluesShown.includes(i));

  return (
    <CluePiece
      header={"To my dear publishers:"}
      signOff={"- When the date comes to reveal"}
      back={"/puzzle5/clues"}
    >
      {reducedClues.map((clue) => {
        return (
          <div key={clue}>
            <em>{clue}</em>
            <br />
          </div>
        );
      })}
    </CluePiece>
  );
}

export default Clue;
