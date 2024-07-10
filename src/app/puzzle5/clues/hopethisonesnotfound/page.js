import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece
      back="/puzzle5/clues"
      header={"From, by now, a pretty expectant dev,"}
      signOff={"- still a pretty expectant dev"}
    >
      You found another secret! You&apos;re very good at this I tell you. So
      here&apos;s another hint from me: the second clue relates to the title of
      some specific work, and the first clue relates to the specific...
      information I want you to enter into the solving box about this previously
      mentioned piece of work, it&apos;s said three times in dialog and is 4
      characters long... good luck!
      <br />
      <br />
      There will be more secrets to come, as always...
    </CluePiece>
  );
}

export default Clue;
