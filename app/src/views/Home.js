import React, { useContext } from "react";
import ResourceBlock from "../components/ResourceBlock";
import { UserContext } from "../UserContext";

function Home() {
  const { user, ...rest } = useContext(UserContext);
  return (
    <div>
      {user ? <p>we have a user: {user.name}</p> : ""}
      <ResourceBlock />
    </div>
  );
}

export default Home;
