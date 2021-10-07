import React, { useState } from "react";
import Home from "./views/Home";
import Header from "./components/Header";
import axios from "axios";

function App() {
  //   const adminUser = {
  //     name: "admin",
  //     email: "admin@tom.com",
  //     password: "admin",
  //   };

  const [user, setUser] = useState({ email: "", name: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    axios
      .post("https://auth-test.freedynamicdns.net/login", details)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setUser({
            name: response.data.response.name,
            email: response.data.response.email,
          });
        } else {
          console.log("dtail not match");
          setError("Details do not match!!!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
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
