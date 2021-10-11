import { useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";

export const CSRF = () => {
  useEffect(() => {
    const getCsrfToken = () => {
      axios.get(env.API_BASE_URL + "/csrf-token").then((response) => {
        console.log(response);
        // here i use .common, because backend all endpoints will check CSRF, include get
        // seems that can use .post.. but backend needs to do the changes..
        axios.defaults.headers.common["X-CSRF-Token"] =
          response.data.myCsrfToken;
      });
    };

    getCsrfToken();
  }, []);
};

export const login = (details, setUser, setError) => {
  console.log(details);
  axios
    .post(env.API_BASE_URL + "/login", details, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json", // <-- here
      },
    })
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        setUser({
          name: response.data.response.name,
          email: response.data.response.email,
        });
        console.log("logged in");
        // write to localstorage
        window.localStorage.setItem("name", response.data.response.name);
        window.localStorage.setItem("email", response.data.response.email);
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
  // setUser to null
  setUser(null);
  // need to take out the cookie
  axios.post(env.API_BASE_URL + "/logout").then((response) => {
    console.log(response);
  });
  // erase local storage
  window.localStorage.removeItem("name");
  window.localStorage.removeItem("email");
};

export const getCurrentUser = () => {
  if (window.localStorage.getItem("name")) {
    return {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
    };
  } else {
    return null;
  }
};

export const axios_instance = () => {
  // will not work with token with httpOnly set!!!
  // A cookie with the HttpOnly attribute is inaccessible to the JavaScript Document.cookie API
  // const cookies = new Cookies();
  // const token = cookies.get("token");
  return axios.create({
    baseURL: env.API_BASE_URL,
    timeout: 3000,
    // headers: { Authorization: "Bearer " + token },
  });
};
