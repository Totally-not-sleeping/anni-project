import CluesPage from "@/components/clues-page";
import { Suspense } from "react";

function CluesLayout({ children }) {
  return (
    <main>
      <CluesPage links={["/puzzle1/clues/clue1", "/puzzle1/clues/clue2"]} />
      {children}
    </main>
  );
}

export default CluesLayout;
