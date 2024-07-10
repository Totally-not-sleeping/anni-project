"use client";

import { useState } from "react";

function HeaderSignInOut({ userId, signIn, signOut }) {
  const [sure, setSure] = useState(false);

  async function out() {
    setSure(false);
    await signOut();
  }

  async function in_() {
    await signIn();
  }

  return (
    <>
      {userId ? (
        <button
          onClick={() => setSure(true)}
          className="absolute top-[10px] right-[10px] w-[100px] h-[50px] p-[10px] flex justify-center items-center bg-green-900 rounded-2xl z-[1]"
        >
          Sign out
        </button>
      ) : (
        <button
          onClick={in_}
          className="absolute top-[10px] right-[10px] w-[100px] h-[50px] p-[10px] flex justify-center items-center bg-green-900 rounded-2xl z-[1]"
        >
          Sign in
        </button>
      )}
      {sure && (
        <>
          <div className="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-20"></div>
          <div className="fixed top-0 left-0 z-30 w-screen h-screen flex items-center justify-center">
            <div className="h-[150px] w-[300px] bg-green-800 rounded-2xl items-center justify-center flex flex-col gap-[20px]">
              <h1 className="text-xl">Are you sure?</h1>
              <div className="w-full flex justify-center gap-[30px]">
                <button
                  onClick={out}
                  className="p-[10px] bg-green-950 rounded-xl"
                >
                  Yes
                </button>
                <button
                  onClick={() => setSure(false)}
                  className="p-[10px] bg-green-950 rounded-xl"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HeaderSignInOut;
