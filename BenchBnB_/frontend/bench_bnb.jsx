import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  window.login = login
  window.logout =logout
  window.signup = signup
  console.log("some sort")
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});