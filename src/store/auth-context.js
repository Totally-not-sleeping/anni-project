"use client";

import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  userId: null,
  setUserSignIn: function (newId) {},
  setUserSignOut: function () {},
});

export default AuthContext;

export async function getStaticProps() {
  const oldId = localStorage.getItem("user-id");
  return {
    props: {
      oldId,
    },
  };
}

export function AuthContextProvider({ children, oldId }) {
  const [id, setId] = useState(oldId);

  function setUserSignIn(newId) {
    setId(newId);
  }

  function setUserSignOut() {
    setId(null);
  }

  const context = {
    id: id,
    signIn: setUserSignIn,
    signOut: setUserSignOut,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
