import CluePiece from "@/components/clue-piece";
import Link from "next/link";

function Clue() {
  return (
    <CluePiece back="/puzzle7/clues">
      <Link href="/puzzle7/answer">...</Link>
    </CluePiece>
  );
}

export default Clue;
