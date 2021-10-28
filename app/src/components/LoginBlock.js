import React, { useState } from "react";
import { login, loginWithGoogle } from "../utils/loginUtils";
import GoogleLogin from "react-google-login";
import env from "react-dotenv";

function LoginBlock({ setUser, setError }) {
  const [details, setDetails] = useState({ password: "", email: "" });
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    login(details, setUser, setError);
  };
  const googleLoginHandler = (response) => {
    console.log("here is google response!!");
    console.log(response.tokenId);
    loginWithGoogle(response.tokenId, setUser, setError);
  };

  return (
    <div>
      <form onSubmit={loginSubmitHandler}>
        <div className="form-inner">
          <span className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </span>
          <span className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </span>
          <input type="submit" value="LOGIN" />
        </div>
      </form>
      <GoogleLogin
        clientId={env.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={googleLoginHandler}
        onFailure={googleLoginHandler}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default LoginBlock;
