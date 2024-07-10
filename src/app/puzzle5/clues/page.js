import { redirect } from "next/navigation";
import PageButton from "./page-button";
import Link from "next/link";

function PuzzleOneClues() {
  const linkHref = "/puzzle5/clues/hopethisonesnotfound";

  async function redir() {
    "use server";
    console.log("huh");
    redirect(linkHref);
  }

  return (
    <div data-secret="perhaps there's something here as well...">
      <PageButton redir={redir} />
    </div>
  );
}

export default PuzzleOneClues;
