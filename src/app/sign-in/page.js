import SignInForm from "@/components/sign-in-form";
import AddUser from "@/lib/add-user";
import SignIn from "@/lib/sign-in";
import { redirect } from "next/navigation";

function SignInPage() {
  async function onSubmitHandler(username, password, mode) {
    "use server";
    if (mode == "sign up") {
      let res = await AddUser(username, password);
      return res;
    }
    if (mode == "sign in") {
      let res = await SignIn(username, password);
      return res;
    }
  }

  async function redirectTo() {
    "use server";
    redirect("/");
  }

  return (
    <div className="w-full h-full min-h-[100vh] flex flex-col items-center justify-center relative">
      <SignInForm CallApi={onSubmitHandler} redirectTo={redirectTo} />
    </div>
  );
}

export default SignInPage;
