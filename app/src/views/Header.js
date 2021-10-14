import React, { useContext, useState } from "react";
import LoginBlock from "../components/LoginBlock";
import LogoutBlock from "../components/LogoutBlock";
import { UserContext } from "../UserContext";
import GoogleLogin from "react-google-login";
import env from "react-dotenv";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const responseGoogle = (response) => {
    console.log("here is google response!!");
    console.log(response.tokenId);
  };

  return (
    <header>
      <span>
        {user ? (
          <LogoutBlock setUser={setUser}></LogoutBlock>
        ) : (
          (error, (<LoginBlock setUser={setUser} setError={setError} />))
        )}
      </span>
      <span>
        <GoogleLogin
          clientId={env.GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </span>
    </header>
  );
}

export default Header;
