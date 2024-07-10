import Link from "next/link";
import { IoIosLock, IoMdUnlock } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

function Button({ text, locked }) {
  return (
    <button
      className={`p-[5px] w-[100px] bg-green-600 border-green-500 border-[2px] rounded-md text-green-50`}
      disabled={locked}
    >
      {text}
    </button>
  );
}

function PuzzleBlock({
  solved,
  locked,
  puzzleClues,
  puzzleSolve,
  text,
  inProgress,
  index,
}) {
  return (
    <section
      className={`flex ${
        inProgress ? "flex-col gap-[20px]" : "gap-[4%]"
      }  animate-[puzzlesFadeIn_1s_ease-in-out] items-center ${
        inProgress ? "justify-evenly" : "justify-center"
      } p-5 m-5 bg-green-800 rounded-lg`}
    >
      <div className="flex gap-[15px] items-center w-[215px] justify-center">
        {solved ? (
          <FaCheck className={"fill-green-500 w-[30px] h-[30px]"} />
        ) : locked ? (
          <IoIosLock className={`fill-red-500 w-[30px] h-[30px]`} />
        ) : inProgress ? (
          <IoIosLock className={`fill-yellow-500 w-[30px] h-[30px]`} />
        ) : (
          <IoMdUnlock className={`fill-green-400 w-[30px] h-[30px]`} />
        )}

        <div className="text-lg">{text}</div>
      </div>

      {inProgress ? (
        <div className="flex gap-[15px] w-[215px] justify-center">
          {puzzleClues && <Link href={puzzleClues}>
            <Button text="Clues" locked={locked} />
          </Link>}
          <Link href={puzzleSolve}>
            <Button text="Solve" locked={locked} />
          </Link>
        </div>
      ) : null}
    </section>
  );
}

export default PuzzleBlock;
