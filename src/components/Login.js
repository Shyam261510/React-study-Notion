import React from "react";
import Template from "./Template";
import login from "../assets/login.png";
function Login({  setISLogin }) {
  return (
    <div>
      <Template
        tittle="Welcome Back"
        disc1="Build skills for today, tomorrow, and beyond."
        disc2="Education to future-proof your career."
        formType="login"
        image={login}
        setISLogin={setISLogin}
      />
    </div>
  );
}
export default Login;
