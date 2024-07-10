import HasPermission from "@/lib/has-permission";
import { ObjectId } from "bson";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function LayoutPermission({ children, permission }) {
  const perm = await HasPermission(
    new ObjectId(cookies().get("user_id").value),
    permission
  );

  if (!perm) {
    redirect("/unauthorized");
  }
  return <>{children}</>;
}

export default LayoutPermission;
