function Unauthorized() {
  return (
    <main className="w-full h-[100vh]">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1
          className="text-8xl text-green-900 font-bold mb-[20%]"
          style={{ textShadow: "#32a852 1px 0 30px;" }}
        >
          Oops!
        </h1>
        <p className="text-green-900 font-bold text-4xl mb-[10%]">
          It does not look like you have access to this page yet...
        </p>
        <p className="text-green-900 font-bold text-3xl">
          Keep working though (and don&apos;t cheat ;) )
        </p>
      </div>
    </main>
  );
}

export default Unauthorized;
