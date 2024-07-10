import clue1 from "@/images/puzzle6/mdsd.png";
import Image from "next/image";
import BackArrow from "@/components/back-arrow";

function Clue() {
  return (
    <>
      <div className="absolute top-0 left-0 z-10 w-screen h-screen bg-green-900 opacity-20"></div>
      <BackArrow />
      <section className="absolute top-0 left-0 z-10 w-screen h-screen flex justify-center items-center">
        <div
          className="w-[30%] aspect-square min-h-[400px] min-w-[600px] max-h-[100vh] p-[25px] flex flex-col items-center justify-evenly bg-green-700 rounded-3xl border-[3px] border-green-950"
          data-secret="this one's hidden more thoroughly than usual, but I'm not letting you off that easily; there's still a bit of a challenge for you to solve: which is the creator's favorite musical key? enter it like this '/puzzle6/clues/amajor' or '/puzzle6/clues/csharpminor', good luck!"
        >
          <Image
            src={clue1}
            height={500}
            className="rounded-2xl"
            alt="HIPPOLYTA: 'Tis strange my Theseus, that these lovers speak of. / THESEUS: More strange than true. I never may believe These antique fables nor these fairy toys. Lovers and madmen have such seething brains, Such shaping fantasies, that apprehend More than cool reason ever comprehends. The lunatic, the lover, and the poet Are of imagination all compact. One sees more devils than vast hell can hold: That is the madman. The lover, all as frantic, Sees Helen’s beauty in a brow of Egypt. The poet’s eye, in a fine frenzy rolling, Doth glance from heaven to Earth, from Earth to heaven, And as imagination bodies forth The forms of things unknown, the poet’s pen Turns them to shapes and gives to airy nothing A local habitation and a name. Such tricks hath strong imagination That, if it would but apprehend some joy,"
          />
        </div>
      </section>
    </>
  );
}

export default Clue;
