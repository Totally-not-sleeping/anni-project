import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece
      back="/puzzle6/clues"
      header={"From, by now, a pretty expectant dev,"}
      signOff={"- still a pretty expectant dev"}
    >
      You found another secret! You&apos;re getting... too good at this. But
      here&apos;s another hint from me: there are 13 boxes for you to fill out
      at the solve section, where else does 13 appear? In which theme (keyword:
      theme, perhaps we only want the theme...) What does a composer and a
      certain Shakespearean play with incidental music have to do with that? Or
      rather... whom?
      <br />
      <br />
      There will be more secrets to come, as always...
    </CluePiece>
  );
}

export default Clue;
