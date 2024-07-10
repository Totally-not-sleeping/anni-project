import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece
      back="/puzzle7/clues"
      header={"Page 347:"}
      signOff={"- Computer Architecture, v13"}
    >
      <i>{`… An easier way of representing binary digits, which can be cumbersome to write down and read, is to transform them into hexadecimals. These are base-16 numbers which, along with the usual 0 - 9, also contain the letters A - F, representing 10 - 15, respectively…`}</i>
    </CluePiece>
  );
}

export default Clue;
