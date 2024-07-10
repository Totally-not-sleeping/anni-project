function NotFound({ params  }) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1
        className="text-8xl text-green-900 font-bold mb-[20%]"
        style={{ textShadow: "#32a852 1px 0 30px;" }}
      >
        Oops!
      </h1>
      <p className="text-green-900 font-bold text-4xl mb-[10%]">
        Your requested page was not found
      </p>
      <p className="text-green-900 font-bold text-md animate-[FadeIn_10s]">
        Did you perhaps mean {`"/Vigenère"?`}
      </p>
    </div>
  );
}

export default NotFound;
