"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

function GenerateChar() {
  const [char, setChar] = useState("");
  const [code, setCode] = useState("");

  const charRef = useRef(null);
  const codeRef = useRef(null);

  const pathName = usePathname();
  const backName = pathName.split("/").slice(0, -1).join("/");

  useEffect(() => {
    const ran = Math.floor(Math.random() * 0xd800);
    setChar(String.fromCharCode(ran));
    setCode(ran.toString(16).toUpperCase());
    setTimeout(() => {
      try {
        charRef.current.style.opacity = "0%";
        codeRef.current.style.opacity = "0%";
      } catch (e) {}
    }, 2700);
    let interv = setInterval(() => {
      try {
        charRef.current.style.opacity = "100%";
        codeRef.current.style.opacity = "100%";
        const ran = Math.floor(Math.random() * 0xd800);
        setChar(String.fromCharCode(ran));
        setCode(ran.toString(16).toUpperCase());
      } catch (e) {}
      setTimeout(() => {
        try {
          charRef.current.style.opacity = "0%";
          codeRef.current.style.opacity = "0%";
        } catch (e) {}
      }, 2700);
    }, 3000);
    return () => clearInterval(interv);
  }, []);
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
        <div className="w-[30%] aspect-square min-h-[200px] min-w-[400px] max-h-[100vh] p-[25px] flex flex-col items-center justify-evenly bg-[#366A46] rounded-3xl border-[3px] border-green-900">
          <div
            className="text-[100px] text-green-50 duration-300"
            ref={charRef}
          >
            {char}
          </div>
          <div className="text-[50px] text-green-50 duration-300" ref={codeRef}>
            {code}
          </div>
        </div>
      </section>
    </>
  );
}

export default GenerateChar;
