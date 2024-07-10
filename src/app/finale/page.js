import FinalImage from "@/components/final-image";
import GetImage from "@/lib/get-image";
import AddMessage from "@/lib/add-message";
import RevalidateFinale from "../../lib/revalidate-finale";
import CheckFinalName from "@/lib/check-final-name";
import GetUserPart from "@/lib/get-user-part";
import PageAnimation from "./page-animation";
import SetFinalTime from "@/lib/set-final-time";
import { ObjectId } from "bson";
import { cookies } from "next/headers";

async function Finale() {
  const goToImage = await GetUserPart(
    new ObjectId(cookies().get("user_id").value),
    "final_ended"
  );

  async function getImageHandler() {
    "use server";
    let img = await GetImage("secret");
    return await img;
  }

  async function addMessage(userId, message) {
    "use server";
    let res = await AddMessage(new ObjectId(userId), message);
    return res;
  }

  async function checkFinalName(userId, name) {
    "use server";
    let res = await CheckFinalName(new ObjectId(userId), name);
    return res;
  }

  async function revalidateFinale() {
    "use server";
    await RevalidateFinale();
  }

  async function setFinalTime(userId) {
    "use server";
    SetFinalTime(new ObjectId(userId));
  }

  return (
    <>
      {goToImage ? (
        <FinalImage
          onClickHandler={getImageHandler}
          setFinalTime={setFinalTime}
        />
      ) : (
        <PageAnimation
          addMessage={addMessage}
          checkName={checkFinalName}
          revalidateFinale={revalidateFinale}
        />
      )}
    </>
  );
}

export default Finale;
