"use client";

import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRef, useState } from "react";

function FinalImage({ onClickHandler, setFinalTime }) {
  const ref = useRef(null);
  const [data, SetData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  async function onClickWaiter() {
    if (!hasClicked) {
      try {
        setIsLoading(true);
        let img = await onClickHandler();
        SetData(img);
        setHasClicked(true);
        setIsLoading(false);
        try {
          setFinalTime(getCookie("user_id"));
        } catch (e) {}
      } catch (e) {}
    }
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-slate-900 flex flex-col justify-center items-center z-[2]">
      <div className="max-w-[600px] w-[600px] min-w-[300px] border-[5px] border-slate-200 rounded-2xl mb-[20px] aspect-square relative flex justify-center items-center">
        {isLoading ? <p className="text-2xl">Loading...</p> : null}
        {data ? (
          <Image src={data} alt="face reveal!" ref={ref} priority fill />
        ) : null}
      </div>
      <button
        onClick={onClickWaiter}
        className="p-[10px] text-2xl bg-slate-700 rounded-2xl"
      >
        What you&apos;ve been waiting for...
      </button>
    </div>
  );
}

export default FinalImage;
