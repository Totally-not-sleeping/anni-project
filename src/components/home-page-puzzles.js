"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import PuzzleBlock from "./puzzle-block";

export default function HomePagePuzzles({ getUserProgress }) {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    initialize();
  }, [getUserProgress]);

  return (
    <article className="min-w-[350px] w-[50%] items-center">
      {progress.map((data, i) => (
        <PuzzleBlock key={data?.puzzleSolve} {...data} index={i} />
      ))}
    </article>
  );
}
