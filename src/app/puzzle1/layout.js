import HasPermission from "@/lib/has-permission";
import { ObjectId } from "bson";

async function Layout({ children }) {
  //   const permission = await HasPermission(new ObjectId("66839ae48e792059298cbf30"), "q1");
  //   if (!permission) {
  //     return <p>oops</p>;
  //   }
  return <>{children}</>;
}

export default Layout;
