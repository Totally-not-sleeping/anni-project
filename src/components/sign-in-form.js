"use client";

import { useState, useContext, useEffect } from "react";
import { setCookie } from "cookies-next";
import AuthContext from "@/store/auth-context";

function SignInForm({ CallApi, redirectTo }) {
  const [mode, setMode] = useState("sign in");
  const [message, setMessage] = useState("");

  const userContext = useContext(AuthContext);

  function setCookieOld(id) {
    let expire = new Date();
    expire.setTime(expire.getTime() + 10 * 24 * 60 * 60 * 1000);
    document.cookie = `user_id=${id};expires=${expire.toUTCString()}`;
    setCookie("user_id", id, { expires: expire });
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let obj = {};
    formData.forEach((value, key) => (obj[key] = value));
    let res = await CallApi(obj["username"], obj["password"], mode);
    if (res?.id) {
      userContext.signIn(res?.id);
      setCookieOld(res?.id);
      redirectTo();
    }
    setMessage(res.message);
  }

  function changeMode() {
    setMode((mode) => {
      if (mode == "sign in") {
        return "sign up";
      } else {
        return "sign in";
      }
    });
  }

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 7000);
    }
  }, [message]);

  return (
    <div className="h-[500px] w-[30%] min-w-[270px] bg-green-900 p-[15px] rounded-2xl flex flex-col items-center">
      <h1 className="text-3xl">{mode == "sign in" ? "Sign In" : "Sign Up"}</h1>
      <div className="bg-green-300 w-[100%] h-[3px] m-2"></div>
      <form
        onSubmit={onSubmitHandler}
        className="h-full w-full flex flex-col items-center justify-center"
      >
        <div className="h-[40%] flex flex-col items-center justify-center w-full">
          <label className="text-xl m-[15px]" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            className="p-[8px] rounded-2xl bg-green-300 text-green-900 shadow-slate-300 shadow-md w-[80%]"
            name="username"
            id="username"
            required
          />
        </div>

        <div className="h-[40%] flex flex-col items-center justify-center w-full">
          <label className="text-xl m-[15px]" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            className="p-[8px] rounded-2xl bg-green-300 text-green-900 shadow-slate-300 shadow-md w-[80%]"
            minLength={8}
            name="password"
            id="password"
            required
          />
        </div>

        <div className="h-[30%] flex flex-col items-center justify-center gap-[5px]">
          <button className="p-[12px] bg-green-500 rounded-2xl text-lg border-green-700 border-[3px] hover:bg-green-700 duration-500">
            {mode}
          </button>
          <p onClick={changeMode} className="cursor-pointer hover:underline">
            {mode == "sign in"
              ? "Need to sign up?"
              : "Already have an account?"}
          </p>
        </div>
      </form>
      <p
        className={`h-[15px] mb-[10px] ${
          message === "success" ? "text-green-300" : "text-yellow-500"
        }`}
      >
        {message
          ? message === "success"
            ? "success, redirecting, please wait a moment..."
            : message
          : null}
      </p>
    </div>
  );
}

export default SignInForm;
