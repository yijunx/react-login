import React, { useState } from "react";
import Home from "./views/Home";
import Header from "./components/Header";

function App() {
  const adminUser = {
    name: "admin",
    email: "admin@tom.com",
    password: "admin",
  };

  const [user, setUser] = useState({ email: "", name: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (details.email === adminUser.email) {
      console.log("logged in");
      setUser({
        name: adminUser.name,
        email: adminUser.email,
      });
    } else {
      console.log("dtail not match");
      setError("Details do not match");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ email: "", name: "" });
  };
  return (
    <div>
      <Header user={user} />
      <Home user={user} Login={Login} Logout={Logout} error={error} />
    </div>
  );
}

export default App;
