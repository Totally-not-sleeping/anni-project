import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function RevalidateFinale() {
  revalidatePath("/finale", "layout");
  redirect("/finale");
}
