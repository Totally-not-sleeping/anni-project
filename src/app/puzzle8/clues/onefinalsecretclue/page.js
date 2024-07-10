import CluePiece from "@/components/clue-piece";

function Clue() {
  return (
    <CluePiece
      back="/puzzle7/clues"
      header={"From a surprised dev... yet again"}
      signOff={"- good luck, and goodbye :)"}
    >
      Aha, you&apos;ve found the very final secret. I congratulate you for your
      patience and intellect, so now, the hint: if you&apos;ve followed the
      poems, you would know that the answer resides on another website. On that
      website, perhaps pay attention to &apos;our hosts&apos; and their
      &apos;tales&apos;. The phone number in the final clue is also not really a
      phone number, what does Daisy say? If we match up the first, second, and
      third part of the phone number to what she says, what do we get?
    </CluePiece>
  );
}

export default Clue;
