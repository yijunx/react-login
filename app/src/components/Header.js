import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function Header({ user }) {
  console.log(user);
  const message = useContext(UserContext);
  return (
    <header>
      <p>
        this is header, current user is {user.name}, and we have message
        {message}
      </p>
    </header>
  );
}

export default Header;
