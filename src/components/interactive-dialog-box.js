"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsFillChatFill, BsFillChatTextFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { GoBrowser } from "react-icons/go";
import { IoArrowBack } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function InteractiveDialogBox({
  messages,
  randomize,
  numBeforeFinal,
  finalFunction,
  goBack,
}) {
  let a = {
    responder: { name: "jjjjj", image: "" },
    responderMessages: ["no", "please", "god no"],
    messages: [],
  };

  const [currentMessages, setCurrentMessages] = useState([]);
  const [canEnter, setCanEnter] = useState(true);
  const [inputMsg, setInputMsg] = useState("");
  const [numMsgs, setNumMsgs] = useState(0);

  const [nextUp, setNextUp] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    let index = 0;
    if (randomize) {
      index = Math.floor(Math.random() * messages["responderMessages"].length);
    }
    setNextUp("Customer Service");
    setTimeout(() => {
      setNextUp("");
      setCurrentMessages((msg) => [
        ...msg,
        {
          user: messages["responder"]["name"],
          message: messages["initialMessage"],
        },
      ]);
    }, 2000);
  }, [messages, randomize]);

  function onClickHandler() {
    if (!canEnter || !inputMsg) {
      return;
    }
    setCanEnter(false);
    setTimeout(() => {
      setCanEnter(true);
    }, 1500);

    setCurrentMessages((msg) => [
      ...msg,
      {
        user: "user",
        message: inputMsg,
      },
    ]);
    let index = Math.floor(
      Math.random() * messages["responderMessages"].length
    );

    setTimeout(() => {
      setNextUp("Customer Service");
    }, 500);

    if (numMsgs > numBeforeFinal) {
      setInputMsg("");
      setCanEnter(false);
      setTimeout(() => {
        setNextUp("");
        setCurrentMessages((msg) => [
          ...msg,
          {
            user: messages["responder"]["name"],
            message: messages["finalMessage"],
          },
        ]);
        finalFunction();
      }, 2000);
      return;
    }

    setTimeout(() => {
      setNextUp("");
      setCurrentMessages((msg) => [
        ...msg,
        {
          user: messages["responder"]["name"],
          message: messages["responderMessages"][index],
        },
      ]);
    }, 2000);
    setNumMsgs((num) => num + 1);
    setInputMsg("");
  }

  function onKeyDownHandler(e) {
    if (e.key === "Enter") {
      onClickHandler();
    }
  }

  useEffect(() => {
    scrollRef.current.scroll({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [currentMessages, messages, nextUp]);

  return (
    <>
      <div className="absolute top-0 left-0 z-10 w-screen h-screen bg-black opacity-20"></div>
      <div className="absolute top-[20px] left-[20px] width-[100px] height-[100px] border-[3px] border-green-950 rounded-full bg-green-700 p-[10px] z-20">
        <IoArrowBack className="h-[30px] w-[30px] fill-green-50" />
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full cursor-pointer"
          onClick={goBack}
        ></div>
      </div>
      <section className="absolute top-0 left-0 z-10 w-screen h-screen flex justify-center items-center">
        <div className="w-[25%] aspect-[10/16] min-h-[200px] min-w-[400px] max-h-[100vh] p-[25px] flex flex-col items-center bg-[#333333] rounded-3xl border-[3px] border-slate-900">
          <div className="bg-slate-900 w-[30%] h-[32px] rounded-2xl mb-[20px] flex gap-[10px] justify-center items-center">
            <div className="bg-black w-[10px] h-[10px] rounded-full mr-[10px]"></div>
            <div className="bg-black w-[20px] h-[20px] rounded-full flex justify-center items-center">
              <div className="bg-slate-950 w-[10px] h-[10px] rounded-full"></div>
            </div>
          </div>
          <ul
            className="h-[100%] w-full max-h-[600px] border-[4px] rounded-xl border-slate-500 overflow-auto flex flex-col gap-[20px] relative p-[15px] duration-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-500"
            ref={scrollRef}
          >
            {currentMessages.map((msg, i) => {
              return (
                <li
                  key={`${msg["user"]}_${msg["message"]}_${i}`}
                  className={` w-full flex gap-[10px] ${
                    msg["user"] === "user" ? "justify-end" : ""
                  }`}
                >
                  <div className="flex flex-col gap-[4px]">
                    <div
                      className={`${
                        msg["user"] === "user" ? "text-right" : ""
                      } w-[100%]`}
                    >
                      {msg.user}
                    </div>
                    <div className="bg-black/[0.6] p-[10px] rounded-xl max-w-[300px] overflow-auto">
                      {msg.message}
                    </div>
                  </div>
                </li>
              );
            })}
            {nextUp && (
              <li className={`w-full flex gap-[10px]`}>
                <div className="flex flex-col gap-[4px]">
                  <div className={`w-[100%]`}>{nextUp}</div>
                  <div className="bg-black/[0.6] p-[10px] rounded-xl max-w-[300px] overflow-auto flex justify-center">
                    <div className="flex gap-[5px] h-[25px] items-center">
                      <div className="w-[7px] h-[7px] bg-slate-100 rounded-full animate-[dotsAnimation_2s_linear_0s_infinite]"></div>
                      <div className="w-[7px] h-[7px] bg-slate-100 rounded-full animate-[dotsAnimation_2s_linear_0.5s_infinite]"></div>
                      <div className="w-[7px] h-[7px] bg-slate-100 rounded-full animate-[dotsAnimation_2s_linear_1s_infinite]"></div>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>
          <div className="mt-[10px] w-full flex items-center bg-slate-900 rounded-2xl">
            <input
              type="text"
              className="w-[90%] text-white rounded-2xl text-lg p-[5px] bg-slate-900"
              onChange={(e) => setInputMsg(e.target.value)}
              value={inputMsg}
              onKeyDown={onKeyDownHandler}
            ></input>
            <button onClick={onClickHandler} className="flex justify-center items-center">
              <FiChevronRight className="h-[30px] w-[30px]"/>
            </button>
          </div>

          <div className="w-full h-[90px] mt-[20px] flex justify-evenly">
            <div className="h-[100%] aspect-square bg-slate-900 flex justify-center items-center rounded-2xl">
              <FaPhoneAlt className="fill-slate-200 w-[40px] h-[40px]" />
            </div>
            <div className="h-[100%] aspect-square bg-slate-900 flex justify-center items-center rounded-2xl">
              <BsFillChatTextFill className="fill-slate-200 w-[40px] h-[40px]" />
            </div>
            <div className="h-[100%] aspect-square bg-slate-900 flex justify-center items-center rounded-2xl">
              <MdEmail className="fill-slate-200 w-[40px] h-[40px]" />
            </div>
            <div className="h-[100%] aspect-square bg-slate-900 flex justify-center items-center rounded-2xl">
              <GoBrowser className="fill-slate-200 w-[40px] h-[40px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InteractiveDialogBox;
