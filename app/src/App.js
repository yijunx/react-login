import React, { useState } from "react";
import Home from "./views/Home";
import Header from "./views/Header";
import { UserContext } from "./UserContext";
import { CSRF, getCurrentUser } from "./utils/loginUtils";

function App() {
  CSRF();
  const current_user = getCurrentUser();
  console.log(current_user);
  const [user, setUser] = useState(current_user);
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
