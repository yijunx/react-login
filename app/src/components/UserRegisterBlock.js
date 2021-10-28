import React, { useState } from "react";
import { registerUserWithPassword } from "../utils/loginUtils";

function UserRegisterBlock({ setError }) {
  const [details, setDetails] = useState({ password: "", email: "", name: "" });
  const registerSubmitHandler = (e) => {
    e.preventDefault();
    registerUserWithPassword(details, setError);
  };
  return (
    <div>
      <form onSubmit={registerSubmitHandler}>
        <div className="form-inner">
          <span className="form-group">
            <label>Name: </label>
            <input
              type="name"
              name="name"
              id="register-name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </span>
          <span className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="register-email"
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
              id="register-password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </span>
          <input type="submit" value="REGISTER" />
        </div>
      </form>
    </div>
  );
}

export default UserRegisterBlock;
