import React from "react";
import LoginBlock from "../components/LoginBlock";
import ResourceBlock from "../components/ResourceBlock";

function Home({ user, Login, Logout, error }) {
  return (
    <div>
      <h1>login logout test</h1>
      {user.email !== "" ? (
        <div>
          <h2>welcome {user.name}</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginBlock Login={Login} error={error} />
      )}
      <ResourceBlock />
    </div>
  );
}

export default Home;
