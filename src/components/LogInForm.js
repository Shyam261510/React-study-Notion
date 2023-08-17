import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LogInForm({ setISLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setISLogin(true);
          toast.success("Logged in");
          navigate("/dashboard");
        }}
        className="flex flex-col gap-4 w-full"
      >
        <div className="flex flex-col gap-1">
          <label className="text-white">
            Email Address <sup className="text-pink-600">*</sup>
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            required
            value={formData.email}
            onChange={changeHandler}
            name="email"
            className="h-8 py-5 px-3 bg-[#000814] font-[Inter, sans-serif] text-[#afb2bf] border-2 border-[#afb2bf] rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white relative">
            Password <sup className="text-pink-600">*</sup>
          </label>
          <input
            required
            placeholder="Enter Password"
            type={showPassword ? "text" : "password"}
            value={formData.email}
            onChange={changeHandler}
            name="password "
            className="  h-8 py-5 px-3 bg-[#000814] font-[Inter, sans-serif] text-[#afb2bf] border-2 border-[#afb2bf] rounded-md"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-[#afb2bf] text-2xl absolute top-[23.4rem] left-[41rem] cursor-pointer "
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        <div>
          <button className="bg-[#ffd60a] te font-bold xt-[#000814] w-full  py-2 text-center rounded-md">
            Log in
          </button>
          <Link to="#" className="text-[#47a5c5] mx-auto max-w-max">
            Forgot Password
          </Link>
        </div>
      </form>
    </div>
  );
}
export default LogInForm;
