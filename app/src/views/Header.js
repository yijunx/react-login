import React, { useContext, useState } from "react";
import LoginBlock from "../components/LoginBlock";
import LogoutBlock from "../components/LogoutBlock";
import { UserContext } from "../UserContext";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState("");

  return (
    <header>
      <span>
        {user ? (
          <LogoutBlock setUser={setUser}></LogoutBlock>
        ) : (
          <span>
            {error}
            <LoginBlock setUser={setUser} setError={setError} />
          </span>
        )}
      </span>
    </header>
  );
}

export default Header;
