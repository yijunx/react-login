import { useEffect } from "react";
import axios from "axios";

export const CSRF = () => {
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
};

export const login = (details, setUser, setError) => {
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
        console.log("logged in");
      } else {
        console.log("dtail not match");
        setError("Details do not match!!!");
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const logout = (setUser) => {
  console.log("Logout");
  setUser(null);
  // need to take out the cookie
};
