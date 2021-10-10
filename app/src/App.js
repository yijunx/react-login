import React, { useState, useEffect } from "react";
import Home from "./views/Home";
import Header from "./components/Header";
import axios from "axios";
import { UserContext } from "./UserContext";

function App() {
  //   const adminUser = {
  //     name: "admin",
  //     email: "admin@tom.com",
  //     password: "admin",
  //   };

  useEffect(() => {
    const getCsrfToken = () => {
      axios
        .get("https://auth-test.freedynamicdns.net/csrf-token")
        .then((response) => {
          console.log(response);
          axios.defaults.headers.post["X-CSRF-Token"] =
            response.data.myCsrfToken;
        });
    };

    getCsrfToken();
  }, []);

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
      <UserContext.Provider value="hello from context">
        <Header user={user} />
        <Home user={user} Login={Login} Logout={Logout} error={error} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
