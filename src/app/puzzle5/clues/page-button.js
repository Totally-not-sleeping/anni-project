"use client";

function PageButton({ redir }) {
  return (
    <button
      data-secret="perhaps you need to find a way to click on me, but how?"
      className="hidden pointer-events-none w-0 h-0"
      tabIndex={-1}
      onClick={() => {
        console.log("huh");
        redir();
      }}
    >
      secret?
    </button>
  );
}

export default PageButton;
