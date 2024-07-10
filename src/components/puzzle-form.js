"use client";

import Image from "next/image";
import { useState } from "react";

function PuzzleForm({
  userAnswers,
  images,
  rawTexts,
  submitFunction,
  RevalidateAll,
}) {
  const reducedImages = images.filter((_, i) => userAnswers.includes(i));
  const reducedRawTexts = rawTexts.filter((_, i) => userAnswers.includes(i));

  const [imgOrEmo, setImgOrEmo] = useState("emo");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [wrong, setWrong] = useState([]);

  async function onSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let obj = {};
    formData.forEach((value, key) => (obj[key] = value.toLowerCase().trim()));
    let res = await submitFunction(Object.values(obj));
    setMsg(res?.message);
    setSuccess(res?.success);
    if (res?.success) {
      setCountdown(3);
      setTimeout(() => {
        setCountdown(2);
      }, 1000);
      setTimeout(() => {
        setCountdown(1);
      }, 2000);
      setTimeout(() => {
        RevalidateAll();
      }, 3000);
    } else {
      if (res?.wrong) {
        setWrong([...res?.wrong]);
      }
      setTimeout(() => {
        setMsg("");
        setWrong([]);
      }, 10000);
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-[15px]">
      <form
        onSubmit={onSubmitHandler}
        className="w-[60%] h-[70%] min-w-[400px] min-h-[500px] flex flex-col items-center justify-evenly bg-green-700 p-[20px] rounded-2xl border-green-900 border-[3px]"
      >
        <div className="h-[80%] flex flex-col justify-evenly relative w-[80%]">
          {reducedRawTexts.map((text, i) => {
            return (
              <div key={`q${i + 1}`} className="flex gap-[30px] w-[100%]">
                <label
                  htmlFor={`q${i + 1}`}
                  className="text-3xl p-[5px] bg-emerald-600 rounded-2xl border-green-300 border-[3px] w-[20%] min-w-[100px] flex justify-center relative"
                >
                  {imgOrEmo === "img" ? (
                    <Image
                      src={reducedImages[i]}
                      alt={`emoji ${i}`}
                      height={36}
                    />
                  ) : (
                    text
                  )}
                </label>
                <input
                  type="text"
                  name={`q${i + 1}`}
                  id={`q${i + 1}`}
                  className={`rounded-2xl ${
                    wrong.includes(i)
                      ? "bg-red-200 border-red-500"
                      : "bg-green-100 border-green-300"
                  }  border-[3px] p-[7px] w-[75%]`}
                  required
                ></input>
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className="p-[20px] bg-green-800 rounded-2xl text-3xl border-green-300 border-[3px]"
        >
          Check...
        </button>
      </form>
      {msg ? (
        <p
          className={`text-xl ${
            success ? "text-green-800" : "text-red-800"
          } font-bold`}
        >
          {msg}
        </p>
      ) : null}
      {success ? (
        <p className="text-green-800 text-lg font-bold">
          Returning to home page in {countdown}
        </p>
      ) : null}

      <button
        onClick={() => setImgOrEmo((cur) => (cur === "img" ? "emo" : "img"))}
        className="p-[20px] bg-green-600 rounded-2xl text-md border-green-300 border-[3px]"
      >
        Can{"'"}t see Emojis?
      </button>
    </div>
  );
}

export default PuzzleForm;
