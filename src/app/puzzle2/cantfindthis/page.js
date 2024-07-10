import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece
      back="/puzzle2"
      header={"From yet another surprised dev,"}
      signOff={"- still another surprised dev"}
    >
      You found another secret! Congrats! So here&apos;s one more hint from me:
      these all relate to some &apos;people&apos; on the server that you may or
      may not recognize
      <br />
      <br />
      There will be more secrets to come, as always...
    </CluePiece>
  );
}

export default Clue;
