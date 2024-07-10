import { CgSpinnerTwoAlt } from "react-icons/cg";

function Loading() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col z-20 justify-center items-center pointer-events-none">
        <CgSpinnerTwoAlt className="h-[90px] w-[90px] animate-loading" />
        <p className="text-xl">Loading, please wait...</p>
      </div>
    </>
  );
}

export default Loading;
