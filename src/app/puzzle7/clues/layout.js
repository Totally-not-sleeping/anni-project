import CluesPage from "@/components/clues-page";
import { notFound } from "next/navigation";

function CluesLayout({ children }) {

  return (
    <main>
      <CluesPage
        links={[
          "/puzzle7/clues/clue1",
          "/puzzle7/clues/clue2",
          "/puzzle7/clues/clue3",
          "/puzzle7/clues/clue4",
          "/puzzle7/clues/clue5",
        ]}
      />
      {children}
    </main>
  );
}

export default CluesLayout;
