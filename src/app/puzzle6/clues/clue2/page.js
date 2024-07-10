import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece back="/puzzle6/clues" header={"From, a critic of consensus:"} signOff={"- To whomever it may concern"}>
      {`You know, they call it “incidental music” because it's meant to be played in the background, not meant to be the main focus. But I'll tell ya, I think the composer's really the key part here. Incredibly famous pieces have come from so-called "background music". Pay attention to this wonderful composer's name, could really help us in the long run.`}
    </CluePiece>
  );
}

export default Clue;
