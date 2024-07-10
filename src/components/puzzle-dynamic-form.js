"use client";

import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import InteractiveDialogBox from "./interactive-dialog-box";
import { getCookie } from "cookies-next";

function PuzzleDynamicForm({
  submitFunction,
  clicks,
  finalTitle,
  messages,
  RevalidateAll,
}) {
  async function onSubmitHandler(e) {
    e.preventDefault();
    setMsg("");
    setWrong([]);
    setLoading(true);
    const formData = new FormData(e.target); 
    let obj = {};
    formData.forEach((value, key) => (obj[key] = value.toLowerCase().trim()));
    let res = await submitFunction(
      Object.values(obj).values(),
      getCookie("user_id")
    );
    setLoading(false);
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

  const [formInputs, setFormInputs] = useState([]);
  const [title, setTitle] = useState("Men.");
  const [qColor, setQColor] = useState("#fff");
  const [nums, setNums] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isSet, setIsSet] = useState(false);

  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [wrong, setWrong] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleAddInput() {
    let id = `q${Math.round(Math.random() * 99999)}${Math.round(
      Math.random() * 99999
    )}`;
    setFormInputs((inputs) => [...inputs, id]);
  }

  function handleRemoveInput(id) {
    setFormInputs((inputs) => inputs.filter((input) => input != id));
    setWrong([]);
  }

  function handleSetQ() {
    const hexStr = "0123456789ABCDEF";
    if (!isOpen && !isSet) {
      setIsSet(true);
      setTimeout(() => {
        setNums(0);
        setIsSet(false);
      }, 10000);
    }
    setNums((num) => {
      if (num >= clicks) {
        setIsOpen(true);
      }
      return num + 1;
    });
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexStr[Math.round(Math.random() * hexStr.length)];
    }
    setQColor(color);
  }

  function finalFunction() {
    setTimeout(() => {
      setIsOpen(false);
      setTitle(finalTitle);
    }, 2500);
  }

  function goBack() {
    setIsOpen(false);
    setIsSet(false);
    setNums(0);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col min-h-[520px] min-w-[500px] max-w-[1000px] h-[80%] w-[70%] bg-emerald-600 rounded-2xl border-green-300 border-[3px] p-[25px]"
      >
        <h1 className="text-4xl text-center h-[20%] flex justify-center items-center">
          {title}
        </h1>
        <div className="flex flex-col w-full relative h-[80%]">
          <div className="flex justify-between border-green-50 border-[3px] border-b-0 p-[10px]">
            <FiPlus
              style={{ cursor: "pointer" }}
              className="h-[30px] w-[30px]"
              onClick={handleAddInput}
            />
            <MdQuestionMark
              style={{ fill: qColor, cursor: "pointer" }}
              onClick={handleSetQ}
              className="h-[30px] w-[30px]"
            />
          </div>
          <div className="overflow-auto h-[90%] mb-[10px] border-green-50 border-[3px] p-[20px] flex flex-col gap-[25px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-300">
            {formInputs.map((input, i) => (
              <div
                key={input}
                className="flex items-center gap-[20px] justify-center"
              >
                <IoCloseSharp
                  onClick={() => handleRemoveInput(input)}
                  className="fill-red-700 h-[50px] w-[50px] cursor-pointer"
                />
                <input
                  className={`text-green-950 p-[8px] rounded-2xl ${
                    wrong.includes(i)
                      ? "bg-red-200 border-red-500"
                      : "bg-green-200 border-green-600"
                  } text-green-90 shadow-md w-[80%] min-w-[200px] border-[3px]`}
                  type="text"
                  id={input}
                  name={input}
                  required
                />
              </div>
            ))}
          </div>
        </div>
        <button className="self-center p-[12px] bg-green-800 rounded-2xl text-2xl border-green-700 border-[3px] h-[10%]">
          Submit
        </button>
      </form>
      {loading && (
        <p className="text-yellow-400 text-lg font-bold">
          Loading... please wait
        </p>
      )}
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
      {isOpen ? (
        <InteractiveDialogBox
          numBeforeFinal={10}
          finalFunction={finalFunction}
          messages={messages}
          randomize={true}
          goBack={goBack}
        />
      ) : null}
    </div>
  );
}

export default PuzzleDynamicForm;
