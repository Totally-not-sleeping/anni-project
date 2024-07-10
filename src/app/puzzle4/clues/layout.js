import Link from "next/link";
import CluesPage from "@/components/clues-page";

function CluesLayout({ children }) {
  return (
    <main>
      <CluesPage
        links={[
          "/puzzle4/clues/clue1",
          "/puzzle4/clues/clue2",
          "/puzzle4/clues/clue3",
        ]}
      />
      {children}
    </main>
  );
}

export default CluesLayout;
