import Link from "next/link";
import CluesPage from "@/components/clues-page";

function CluesLayout({ children }) {
  return (
    <main>
      <CluesPage
        links={[
          "/puzzle6/clues/clue1",
          "/puzzle6/clues/clue2",
          "/puzzle6/clues/clue3",
          "/puzzle6/clues/clue4",
        ]}
      />
      {children}
    </main>
  );
}

export default CluesLayout;
