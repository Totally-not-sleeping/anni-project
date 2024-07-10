import Link from "next/link";
import CluesPage from "@/components/clues-page";

function CluesLayout({ children }) {
  return (
    <main>
      <CluesPage
        links={[
          "/puzzle5/clues/clue1",
          "/puzzle5/clues/clue2",
          "/puzzle5/clues/clue3",
        ]}
      />
      {children}
    </main>
  );
}

export default CluesLayout;
