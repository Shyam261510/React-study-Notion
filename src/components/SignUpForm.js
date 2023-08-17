import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function SignUpForm({ setISLogin }) {
  const [signupData, setSignUpData] = useState({
    fistName: "",
    lastName: "",
    password: "",
    cPassword: "",
    email: "",
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  function changeHandler(event) {
    setSignUpData((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  }
  return (
    <div className="flex flex-col">
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          setISLogin(true);
          console.log(signupData);
          toast.success("Account Created");
          navigate("/dashboard");
        }}
      >
        <div>
          {/* fist Name && Last Name */}
          <div className="flex gap-3">
            <label className="flex flex-col gap-1">
              <p className="text-white">
                First Name <sup className="text-pink-700">*</sup>
              </p>
              <input
                required
                type="text"
                value={signupData.fistName}
                onChange={changeHandler}
                name="fistName"
                placeholder="Enter your First Name"
                className="h-8 py-5 px-3 bg-[#000814] font-[Inter, sans-serif] text-[#afb2bf] border-2 border-[#afb2bf] rounded-md"
              />
            </label>

            <label className="flex flex-col gap-1">
              <p className="text-white">
                Last Name <sup className="text-pink-700">*</sup>
              </p>
              <input
                required
                type="text"
                value={signupData.lastName}
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter your Last Name"
                className="h-8 py-5 px-3 bg-[#000814] font-[Inter, sans-serif] text-[#afb2bf] border-2 border-[#afb2bf] rounded-md"
              />
            </label>
          </div>
          {/* email */}
          <label className="flex flex-col gap-1">
            <p className="text-white">
              Email Address Name <sup className="text-pink-700">*</sup>
            </p>
            <input
              required
              type="email"
              value={signupData.email}
              name="email"
              onChange={changeHandler}
              placeholder="Enter email address"
              className="h-8  py-5 px-3 bg-[#000814] font-[Inter, sans-serif] text-[#afb2bf] border-2 border-[#afb2bf] rounded-md"
            />
          </label>
          {/* password and conform password */}
          <div className="flex gap-3 mb-5">
            <label className="flex flex-col gap-1 relative">
              <p className="text-white">
                Password <sup className="text-pink-700">*</sup>
              </p>
              <input
                required
                type={showPassword1 ? "text" : "password"}
                value={signupData.password}
                onChange={changeHandler}
                name="password"
                placeholder="Enter password"
                className="h-8 py-5 px-3 bg-[#000814] font-[Inter, sans-serif] text-[#afb2bf] border-2 border-[#afb2bf] rounded-md"
              />
              <span
                onClick={() => {
                  setShowPassword1((prev) => !prev);
                }}
                className="absolute top-9 right-2 text-white text-2xl"
              >
                {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>

            <label className="flex flex-col gap-1 relative">
              <p className="text-white">
                Confirm Password <sup className="text-pink-700">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                value={signupData.cPassword}
                onChange={changeHandler}
                name="cPassword"
                placeholder="Enter Confirm password"
                className="h-8  py-5 px-3 bg-[#000814] font-[Inter, sans-serif] text-[#afb2bf] border-2 border-[#afb2bf] rounded-md"
              />
              <span
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
                className="absolute top-9 right-2 text-white text-2xl"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>
          </div>
          <button className="bg-[#ffd60a] text-[#000814] font-bold w-full  py-2 text-center rounded-md">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUpForm;
