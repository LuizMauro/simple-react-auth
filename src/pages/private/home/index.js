import React from "react";

import { useAuth } from "../../../hook/authenticator";

function HomePage() {
  const { signOut } = useAuth();

  const sair = async () => {
    signOut();
  };

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={sair}>Sair</button>
    </>
  );
}

export { HomePage };
