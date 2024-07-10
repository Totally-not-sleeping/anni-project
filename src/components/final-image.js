"use client";

import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRef, useState } from "react";

function FinalImage({ onClickHandler, setFinalTime, getBonusHandler }) {
  const ref = useRef(null);
  const [data, SetData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const [bonusReveal, setBonusReveal] = useState(false);

  const [bonus, setBonus] = useState("");
  const [bonusClicked, setBonusClicked] = useState(false);
  const [isBonusLoading, setIsBonusLoading] = useState(false);

  async function onClickWaiter() {
    if (!hasClicked) {
      try {
        setIsLoading(true);
        let img = await onClickHandler();
        SetData(img);
        setHasClicked(true);
        setIsLoading(false);
        setTimeout(() => {
          setBonusReveal(true);
        }, 30000);
        try {
          setFinalTime(getCookie("user_id"));
        } catch (e) {}
      } catch (e) {}
    }
  }

  async function bonusWaiter() {
    if (!bonusClicked) {
      setIsBonusLoading(true);
      let ran = Math.floor(Math.random() * 3) + 1;
      console.log(`bonus_${ran}`);
      let img = await getBonusHandler(`bonus_${ran}`);
      if (img) {
        setBonus(img);
        setBonusClicked(true);
        setIsBonusLoading(false);
      }
    }
  }

  return (
    <>
      <div className="absolute top-0 left-0 w-screen min-h-[100vh] bg-slate-900 flex flex-col justify-center items-center z-[2]">
        <div className="max-w-[600px] w-[600px] min-w-[300px] border-[5px] border-slate-200 rounded-2xl mb-[20px] aspect-square relative flex justify-center items-center">
          {isLoading ? <p className="text-2xl">Loading...</p> : null}
          {data ? (
            <Image src={data} alt="face reveal!" ref={ref} priority fill />
          ) : null}
        </div>
        {!hasClicked && (
          <button
            onClick={onClickWaiter}
            className="p-[10px] text-2xl bg-slate-700 rounded-2xl"
          >
            What you&apos;ve been waiting for...
          </button>
        )}
      </div>
      {bonusReveal && (
        <div className="z-[3] absolute top-[100vh] left-0 bg-slate-900 flex flex-col justify-center items-center w-screen">
          <div className="flex flex-col justify-center items-center">
            {!bonusClicked && (
              <button
                className="p-[10px] text-2xl bg-slate-700 rounded-2xl mb-[40px]"
                onClick={bonusWaiter}
              >
                Bonus???
              </button>
            )}
            <div className="max-w-[600px] w-[600px] min-w-[300px] border-[5px] border-slate-200 rounded-2xl mb-[20px] aspect-square relative flex justify-center items-center">
              {isBonusLoading ? <p className="text-2xl">Loading...</p> : null}
              {bonus ? (
                <Image src={bonus} alt="face reveal!" priority fill />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FinalImage;
