import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

function CluePiece({ header, children, signOff, back }) {
  return (
    <>
      <div className="absolute top-0 left-0 z-10 w-screen h-screen bg-black opacity-20"></div>
      <section className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full">
        <div className="absolute top-[20px] left-[20px] width-[100px] height-[100px] border-[3px] border-green-950 rounded-full bg-green-700 p-[10px]">
          <IoArrowBack className="h-[30px] w-[30px] fill-green-50" />
          <Link
            className="absolute top-0 left-0 w-full h-full rounded-full"
            href={back}
          ></Link>
        </div>

        <div className="w-[70%] h-[70%] flex justify-center items-center">
          <div className="absolute w-[55%] max-w-[900px] min-w-[600px] h-[55%] bg-green-700 rotate-12 rounded-2xl"></div>
          <div className="absolute w-[40%] h-[40%] max-w-[652px] min-w-[435px] bg-green-700 flex flex-col justify-evenly rounded-2xl">
            <div className="text-2xl">{header}</div>
            <div className="text-lg text-center">{children}</div>
            <div className="text-right text-2xl">{signOff}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CluePiece;
