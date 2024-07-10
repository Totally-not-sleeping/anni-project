"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { BsFillChatTextFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GoBrowser } from "react-icons/go";
import { usePathname } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

function DialogBox({ messages, prefersImage, messageDelay }) {
  const pathName = usePathname();
  const backName = pathName.split("/").slice(0, -1).join("/");

  const [currentMessages, setCurrentMessages] = useState({
    messages: [],
    index: 0,
  });
  const [nextUp, setNextUp] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    let num = messages["messages"].length;
    if (num) {
      setNextUp(messages["messages"][0]["user"]);
    }
    let id = setInterval(
      () => {
        setCurrentMessages((msg) => {
          if (msg.index >= num - 1) {
            setNextUp("");
            clearInterval(id);
          } else {
            setNextUp("");
            setTimeout(
              () => {
                setNextUp(messages["messages"][msg.index + 1]["user"]);
              },
              messageDelay ? messageDelay / 5 : 200
            );
          }

          return {
            messages: [...msg.messages, messages["messages"][msg.index]],
            index: msg.index + 1,
          };
        });
      },
      messageDelay ? messageDelay : 1000
    );

    return () => {
      clearInterval(id);
    };
  }, [messages, messageDelay]);

  useEffect(() => {
    scrollRef.current.scroll({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [currentMessages, messages, nextUp]);

  return (
    <>
      <div className="absolute top-0 left-0 z-10 w-screen h-screen bg-green-900 opacity-20"></div>
      <div className="absolute top-[20px] left-[20px] width-[100px] height-[100px] border-[3px] border-green-950 rounded-full bg-green-700 p-[10px] z-20">
        <IoArrowBack className="h-[30px] w-[30px] fill-green-50" />
        <Link
          className="absolute top-0 left-0 w-full h-full rounded-full"
          href={backName}
        ></Link>
      </div>
      <section className="absolute top-0 left-0 z-10 w-screen h-screen flex justify-center items-center">
        <div className="w-[25%] aspect-[10/16] min-h-[200px] min-w-[400px] max-h-[100vh] p-[25px] flex flex-col items-center bg-[#366A46] rounded-3xl border-[3px] border-green-900">
          <div className="bg-green-900 w-[30%] h-[32px] rounded-2xl mb-[20px] flex gap-[10px] justify-center items-center">
            <div className="bg-black w-[10px] h-[10px] rounded-full mr-[10px]"></div>
            <div className="bg-black w-[20px] h-[20px] rounded-full flex justify-center items-center">
              <div className="bg-green-950 w-[10px] h-[10px] rounded-full"></div>
            </div>
          </div>
          <ul
            className="h-[100%] w-full max-h-[600px] border-[2px] rounded-xl border-green-950 overflow-auto flex flex-col gap-[20px] relative p-[5px] duration-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-300"
            ref={scrollRef}
          >
            {currentMessages["messages"].map((msg, i) => {
              return (
                <li
                  key={`${msg.user}_${msg.message}_${i}`}
                  className={` w-full flex gap-[10px] ${
                    msg.user === messages["users"]["self"]
                      ? " flex-row-reverse"
                      : ""
                  } items-center`}
                >
                  {prefersImage ? (
                    <Image
                      src={messages["images"][msg.user]}
                      alt={msg.user}
                      height={50}
                      width={50}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="">{msg.user}</div>
                  )}
                  <div className="bg-black/[0.6] p-[10px] rounded-xl max-w-[300px] overflow-auto">
                    {msg.message}
                  </div>
                </li>
              );
            })}
            {nextUp && (
              <li
                className={` w-full flex gap-[10px] ${
                  nextUp === messages["users"]["self"]
                    ? " flex-row-reverse"
                    : ""
                } items-center`}
              >
                {prefersImage ? (
                  <Image
                    src={messages["images"][nextUp]}
                    alt={nextUp}
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                ) : (
                  <div className="">{nextUp}</div>
                )}
                <div className="bg-black/[0.6] p-[10px] rounded-xl max-w-[300px] overflow-auto">
                  <div className="flex gap-[5px] h-[25px] items-center">
                    <div className="w-[7px] h-[7px] bg-slate-100 rounded-full animate-[dotsAnimation_2s_linear_0s_infinite]"></div>
                    <div className="w-[7px] h-[7px] bg-slate-100 rounded-full animate-[dotsAnimation_2s_linear_0.5s_infinite]"></div>
                    <div className="w-[7px] h-[7px] bg-slate-100 rounded-full animate-[dotsAnimation_2s_linear_1s_infinite]"></div>
                  </div>
                </div>
              </li>
            )}
          </ul>
          <div className="w-full h-[80px] mt-[20px] flex justify-evenly">
            <div className="h-[100%] aspect-square bg-green-900 flex justify-center items-center rounded-2xl">
              <FaPhoneAlt className="fill-green-200 w-[30px] h-[30px]" />
            </div>
            <div className="h-[100%] aspect-square bg-green-900 flex justify-center items-center rounded-2xl">
              <BsFillChatTextFill className="fill-green-200 w-[30px] h-[30px]" />
            </div>
            <div className="h-[100%] aspect-square bg-green-900 flex justify-center items-center rounded-2xl">
              <MdEmail className="fill-green-200 w-[30px] h-[30px]" />
            </div>
            <div className="h-[100%] aspect-square bg-green-900 flex justify-center items-center rounded-2xl">
              <GoBrowser className="fill-green-200 w-[30px] h-[30px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DialogBox;
