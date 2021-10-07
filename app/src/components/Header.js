import React from "react";

function Header({ user }) {
  console.log(user);
  return (
    <header>
      <p>this is header, current user is {user.name}</p>
    </header>
  );
}

export default Header;
