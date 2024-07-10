import CluePiece from "@/components/clue-piece";
import Puzzle8Img from "./img";

function Clue() {
  return (
    <CluePiece back="/puzzle8/clues">
      <em>
        I think I&apos;ve found something! I have been trying to solve this for
        so long and now I have finally made progress! I know that if you click
        on something here or there, you&apos;ll get a clue! I&apos;m not sure
        exactly, but it&apos;s there! I wonder what happens if you try and mess
        around <Puzzle8Img /> maybe it&apos;s even here!
      </em>
    </CluePiece>
  );
}

export default Clue;
