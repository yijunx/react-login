import React from "react";
import { logout } from "../utils/loginUtils";

function LogoutBlock({ setUser }) {
  const submithandler = (e) => {
    e.preventDefault();
    logout(setUser);
  };
  return (
    <div>
      <button onClick={submithandler}>Logout</button>
    </div>
  );
}

export default LogoutBlock;
