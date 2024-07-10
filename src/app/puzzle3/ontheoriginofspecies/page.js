import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece
      back="/puzzle3"
      header={"From now kind of surprised dev,"}
      signOff={"- still now kind of surprised dev"}
    >
      You found another secret! Congrats! So here&apos;s one more hint from me:
      have you ever tried clicking on the question mark a bit... frequently? If
      you have, how many times have you interacted with the... annoyance? Try
      some more measures :)
      <br />
      <br />
      There will be more secrets to come, as always...
    </CluePiece>
  );
}

export default Clue;
