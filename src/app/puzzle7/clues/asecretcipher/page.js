import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece
      back="/puzzle7/clues"
      header={"From, by now, a pretty expectant dev,"}
      signOff={"- still a pretty expectant dev"}
    >
      You found another secret! Once again, you&apos;re getting... too good at
      this. But here&apos;s another hint from me: you&apos;ve probably already
      figured out the cipher component to the puzzle, but have you figured out
      the word used to solve the cipher? If not, I suggest going back to er,
      clue 4, what would be the key word? (it should be in English!)
      <br />
      There will be more secrets to come, as always...
    </CluePiece>
  );
}

export default Clue;
