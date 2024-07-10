import clue2 from "@/images/puzzle5/clue2.png";
import Image from "next/image";
import BackArrow from "@/components/back-arrow";

function Clue() {
  return (
    <>
      <div className="absolute top-0 left-0 z-10 w-screen h-screen bg-green-900 opacity-20"></div>
      <BackArrow />
      <section className="absolute top-0 left-0 z-10 w-screen h-screen flex justify-center items-center">
        <div className="w-[30%] aspect-square min-h-[200px] min-w-[400px] max-h-[100vh] p-[25px] flex flex-col items-center justify-evenly bg-[#808080] rounded-3xl border-[3px] border-[#909090]">
          <Image
            src={clue2}
            width={400}
            className="rounded-2xl"
            alt="E-flat, F, G-flat, A-flat, B-flat, C, D-flat, E-flat"
          />
        </div>
      </section>
    </>
  );
}

export default Clue;
