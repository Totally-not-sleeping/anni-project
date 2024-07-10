"use client";

import w from "@/images/puzzle8/w.png";
import Image from "next/image";
import { useState } from "react";

function Puzzle8Img() {
  const [show, setShow] = useState(false);
  return (
    <>
      <span
        className=" cursor-vertical-text"
        onClick={() => setShow((show) => !show)}
      >
        further...
      </span>
      {show && (
        <div className="w-full flex justify-center">
          <Image className="rounded-2xl" src={w} alt="wat-" />
        </div>
      )}
    </>
  );
}

export default Puzzle8Img;
