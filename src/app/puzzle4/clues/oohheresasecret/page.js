import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece
      back="/puzzle4/clues"
      header={"An expectant dev,"}
      signOff={"- still an expectant dev"}
    >
      You found another secret! Congrats! So here&apos;s another hint from me:
      there&apos;s a certain... unicode-esque method to the solution, watch out
      for any possible uh, numbers or maybe the greek / latin root of the word
      &apos;six&apos;, maybe help you~
      <br />
      <br />
      There will be more secrets to come, as always...
    </CluePiece>
  );
}

export default Clue;
