import Image from "next/image";
import vig from "@/images/puzzle7/vig.png";

function Page() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <a
        href="https://en.wikipedia.org/wiki/Blaise_de_Vigen%C3%A8re#Vigen%C3%A8re_cipher"
        target="_blank"
        rel="noopener noreferrer"
        data-secret="asecretcipher"
      >
        <Image src={vig} height={300} alt="Vigenère" />
      </a>
    </div>
  );
}

export default Page;
