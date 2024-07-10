import Link from "next/link";

function CluesPage({ links }) {
  return (
    <div className="w-screen h-screen flex items-center justify-evenly gap-[50px] flex-wrap">
      {links.map((link, i) => {
        return (
          <div
            key={link}
            className="w-[200px] h-[100px] bg-green-900 text-green-50 p-[15px] text-4xl border-[3px] border-green-700 rounded-2xl cursor-pointer relative flex items-center justify-center"
          >
            Clue {i + 1}
            <Link href={link} className="absolute h-full w-full"></Link>
          </div>
        );
      })}
    </div>
  );
}

export default CluesPage;
