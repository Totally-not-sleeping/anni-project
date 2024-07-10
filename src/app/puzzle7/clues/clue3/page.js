import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece
      back="/puzzle7/clues"
      header={"Page 379:"}
      signOff={"- Computer Architecture, v13"}
    >
      <i>{`… All ASCII characters contain their own binary codes. This can be looked up on what’s called an ASCII table. For instance, the capital letter ‘A’ is 65th on the ASCII table, and thus its binary representation would be 01000001…`}</i>
    </CluePiece>
  );
}

export default Clue;
