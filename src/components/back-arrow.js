"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

function BackArrow() {
  const pathName = usePathname();
  const backName = pathName.split("/").slice(0, -1).join("/");
  return (
    <div className="absolute top-[20px] left-[20px] width-[100px] height-[100px] border-[3px] border-green-950 rounded-full bg-green-700 p-[10px] z-20">
      <IoArrowBack className="h-[30px] w-[30px] fill-green-50" />
      <Link
        className="absolute top-0 left-0 w-full h-full rounded-full"
        href={backName}
      ></Link>
    </div>
  );
}

export default BackArrow;
