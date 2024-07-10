"use client";

import { getCookie } from "cookies-next";
import { useEffect, useRef, useState } from "react";

function PageAnimation({ addMessage, checkName, revalidateFinale }) {
  const textRef = useRef();

  const [firstText, setFirstText] = useState(
    "Congratulations, you have finished the puzzle!"
  );
  const [formReveal, setFormReveal] = useState(false);
  const [formMsg, setFormMsg] = useState("");
  const [interlude, setInterlude] = useState(false);
  const [final, setFinal] = useState(false);
  const [finalMsg, setFinalMsg] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setFirstText("But we have some final events to sort out...");
    }, 3000);
    setTimeout(() => {
      setFirstText("So, let us begin the final act");
    }, 6000);
    setTimeout(() => {
      setFirstText("");
      setFormReveal(true);
    }, 9000);
  }, []);

  async function onMessageSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let msg = "";
    formData.forEach((value, key) => (msg = value));
    let res = await addMessage(getCookie("user_id"), msg);
    if (!res?.success) {
      setFormMsg("looks like something went wrong...");
      setTimeout(() => {
        setFormMsg("");
      }, 10000);
    } else {
      setFormMsg("");
      setFormReveal(false);
      setInterlude(true);
    }
  }

  function secretClick() {
    setInterlude(false);
    setFinal(true);
  }

  async function onNameSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let msg = "";
    formData.forEach((value, key) => (msg = value));
    let res = await checkName(getCookie("user_id"), msg);
    setFinalMsg(res?.message);
    if (!res?.success) {
      setTimeout(() => {
        setFinalMsg("");
      }, 10000);
    } else {
      setIsCompleted(true);
      setCountdown(3);
      setTimeout(() => {
        setCountdown(2);
      }, 1000);
      setTimeout(() => {
        setCountdown(1);
      }, 2000);
      setTimeout(() => {
        revalidateFinale();
      }, 3000);
    }
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-slate-900 flex flex-col justify-center items-center z-[2]">
      {firstText && (
        <h1 className="text-5xl text-white text-center w-full" ref={textRef}>
          {firstText}
        </h1>
      )}
      {formReveal && (
        <form onSubmit={onMessageSubmit} className="flex flex-col gap-[30px]">
          <label htmlFor="comments" className="text-2xl">
            Please write some nice messages for your fellow members!
          </label>
          <textarea className="text-slate-50 bg-slate-800" type="text" name="comments" id="comments" required />
          <button>Send!</button>
          {formMsg && <p>{formMsg}</p>}
        </form>
      )}

      {interlude && (
        <div className="text-white">
          Thank you! However, there is one last{" "}
          <span className="text-red-100 cursor-pointer" onClick={secretClick}>
            secret
          </span>{" "}
          you have yet to find on this page :)
        </div>
      )}

      {final && (
        <form className="flex flex-col gap-[30px]" onSubmit={onNameSubmit}>
          <label htmlFor="comments">
            What is the real name of the person who you&apos;re trying to seek?
          </label>
          <input type="text" name="truename" id="trueName" />
          <button type="submit">Let&apos;s see for one final time!</button>
          {finalMsg && <p>{finalMsg}</p>}
          {isCompleted && <p>Going to our final image in {countdown}</p>}
        </form>
      )}
    </div>
  );
}

export default PageAnimation;
