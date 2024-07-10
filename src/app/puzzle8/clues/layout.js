import CluesPage from "@/components/clues-page";

function CluesLayout({ children }) {

  return (
    <main>
      <CluesPage
        links={[
          "/puzzle8/clues/clue1",
          "/puzzle8/clues/clue2",
          "/puzzle8/clues/clue3",
          "/puzzle8/clues/clue4",
          "/puzzle8/clues/clue5",
          "/puzzle8/clues/clue6",
        ]}
      />
      {children}
    </main>
  );
}

export default CluesLayout;
