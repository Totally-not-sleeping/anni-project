import PuzzleBlock from "@/components/puzzle-block";
import InitializePuzzles from "@/lib/initial-puzzles";
import { ObjectId } from "bson";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const progress = await InitializePuzzles(
    new ObjectId(cookies().get("user_id").value)
  );

  const allFilled = progress.reduce((acc, cur) => acc && cur["solved"], true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0 w-full m-0">
      <h1 className="text-4xl w-[50%] bg-emerald-600/[0.8] p-[10px] rounded-3xl text-center">
        Welcome!
      </h1>
      <article className="min-w-[350px] w-[50%] items-center">
        {progress.map((data, i) => (
          <PuzzleBlock key={data?.puzzleSolve} {...data} index={i} />
        ))}
        {allFilled && (
          <div className="relative w-full flex justify-center items-center">
            <button className="flex animate-[puzzlesFadeIn_1s_ease-in-out] items-center justify-center p-5 m-5 bg-green-800 rounded-lg">Finale!</button>
            <Link href="/finale" className="absolute w-full h-full top-0 left-0"/>
          </div>
        )}
      </article>
    </main>
  );
}
