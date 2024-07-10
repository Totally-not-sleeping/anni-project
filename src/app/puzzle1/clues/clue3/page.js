import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece
      back="/puzzle1/clues"
      header={"From a surprised dev,"}
      signOff={"- still a surprised dev"}
    >
      You found a secret! Congrats! So here&apos;s a hint from me: these all
      relate to someone / something that represents our server...
      <br />
      <br />
      There will be more secrets to come...
    </CluePiece>
  );
}

export default Clue;
