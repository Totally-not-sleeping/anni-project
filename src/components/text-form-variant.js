"use client";
import React, { useState } from "react";
import { getCookie } from "cookies-next";
import vine1 from "@/images/solve/vine1.png";
import vine2 from "@/images/solve/vine2.png";
import vine3 from "@/images/solve/vine3.png";
import vine4 from "@/images/solve/vine4.png";
import vine5 from "@/images/solve/vine5.png";
import Image from "next/image";

const vineArray = [vine1, vine2, vine3, vine4, vine5];

function TextFormVariant({ numOfQuestions, onSubmit, numPer, RevalidateAll }) {
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [wrong, setWrong] = useState([]);

  async function onSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let obj = {};
    formData.forEach((value, key) => (obj[key] = value.toUpperCase().trim()));
    let res = await onSubmit(obj, getCookie("user_id"));
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
      setWrong([...res?.wrong]);
      console.log(res?.wrong)
      setTimeout(() => {
        setMsg("");
        setWrong([]);
      }, 10000);
    }
  }

  const arr = Array(numOfQuestions).fill(0);
  const arrPer = Array(numPer).fill(0);
  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full min-h-screen flex flex-col gap-[50px] items-center justify-center"
    >
      <h1
        className="text-4xl text-green-900 font-bold"
        style={{ textShadow: "#32a852 1px 0 30px;" }}
      >
        What might the answer be?
      </h1>
      {arr.map((_, i) => {
        return (
          <div
            key={`q${i + 1}`}
            className="flex flex-col justify-center items-center w-full gap-[20px]"
          >
            <label htmlFor={`q${i + 1}`}>
              <Image src={vineArray[i % 5]} alt={i} />
            </label>
            <div className="flex gap-[20px] flex-wrap justify-center">
              {arrPer.map((_, i) => {
                return (
                  <input
                    type="text"
                    name={`q${i + 1}`}
                    id={`q${i + 1}`}
                    className={`p-[8px] rounded-2xl ${
                      wrong.includes(i)
                        ? "bg-red-900 border-red-600 text-red-50"
                        : "bg-green-900 border-green-600 text-green-50"
                    } shadow-md border-[3px] w-[70px] h-[70px] text-center text-3xl`}
                    key={`inputted_${i}`}
                    required
                  ></input>
                );
              })}
            </div>
          </div>
        );
      })}
      <button
        type="submit"
        className="text-3xl border-green-600 bg-green-900 border-[3px] text-green-50 p-[15px] rounded-2xl"
      >
        Let{"'"}s check...
      </button>
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
    </form>
  );
}

export default TextFormVariant;