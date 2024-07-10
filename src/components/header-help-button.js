"use client";

function HeaderHelpButton({ updateHelpClicks }) {
  return (
    <button
      onClick={() => updateHelpClicks()}
      className="absolute top-[10px] right-[130px] w-[120px] h-[50px] p-[10px] flex justify-center items-center bg-green-900 rounded-2xl z-[1]"
    >
      Need help?
      <a
        href="https://docs.google.com/document/d/1mo9RhFIgQxU3S4Kslyn9oJwpb_wmqinYhjjj_NTppX0/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 left-0 w-full h-full"
      ></a>
    </button>
  );
}

export default HeaderHelpButton;
