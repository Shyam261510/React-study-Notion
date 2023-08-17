import React from "react";
import Template from "./Template";
import signup from "../assets/signup.png";
function Signup({setISLogin}) {
  return (
    <div>
      <Template
        tittle="Join the millions learning to code with StudyNotion for free"
        disc1="Build skills for today, tomorrow, and beyond."
        disc2="Education to future-proof your career."
        formType="signup"
        image={signup}
        setISLogin={setISLogin}
      />
    </div>
  );
}
export default Signup;
