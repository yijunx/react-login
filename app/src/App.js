import React, { useState } from "react";
import Home from "./views/Home";
import Header from "./views/Header";
import { UserContext } from "./UserContext";
import { CSRF } from "./utils/loginUtils";

function App() {
  CSRF();
  const [user, setUser] = useState(null);
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
