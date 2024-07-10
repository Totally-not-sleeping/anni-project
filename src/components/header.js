import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import HeaderSignInOut from "./header-sign-in-out";
import { redirect } from "next/navigation";
import HeaderHelpButton from "./header-help-button";
import UpdateHelpClicks from "@/lib/update-help-clicks";
import { ObjectId } from "bson";

function Header() {
  const userId = cookies().get("user_id")?.value;

  async function signOut() {
    "use server";
    cookies().delete("user_id");
    revalidatePath("/", "layout");
    redirect("/sign-in");
  }

  async function SignIn() {
    "use server";
    redirect("/sign-in");
  }

  async function updateHelpClicks() {
    "use server";
    await UpdateHelpClicks(new ObjectId(userId));
  }

  return (
    <>
      <div className="absolute top-[10px] left-[10px] w-[50px] h-[50px] p-[10px] flex justify-center items-center bg-green-900 rounded-2xl z-[1]">
        <Image
          className="rounded-xl"
          src="/background-image.png"
          alt="home"
          height={50}
          width={50}
        />
        <Link href="/" className="absolute w-full h-full top-0 left-0" />
      </div>
      <HeaderSignInOut userId={userId} signIn={SignIn} signOut={signOut} />
      {userId && <HeaderHelpButton updateHelpClicks={updateHelpClicks}/>}
    </>
  );
}

export default Header;
