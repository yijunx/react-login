import React, { useState } from "react";
import { login } from "../utils/loginUtils";

function LoginBlock({ setUser, setError }) {
  const [details, setDetails] = useState({ password: "", email: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    login(details, setUser, setError);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
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
    </div>
  );
}

export default LoginBlock;
