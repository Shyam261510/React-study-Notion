import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
function Navbar({ isLogin, setISLogin }) {
  return (
    <div className="flex justify-evenly w-11/12 max-x-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={Logo} width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-4 text-white font-[16px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-5 text-[16px]">
        {!isLogin && (
          <Link to="/login">
            <button className="bg-[#161d29] text-[#afb2bf] py-[8px] border-richblack-700 rounded-[8px] px-[8px]">
              Login
            </button>
          </Link>
        )}
        {!isLogin && (
          <Link to="/signup">
            <button className="bg-[#161d29] text-[#afb2bf]  py-[8px] border-richblack-700 rounded-[8px] px-[8px]">
              Sign Up
            </button>
          </Link>
        )}
        {isLogin && (
          <Link to="/">
            <button
              onClick={() => {
                setISLogin(false);
                toast.success("Log out");
              }}
              className="bg-[#161d29] text-[#afb2bf]  py-[8px] border-richblack-700 rounded-[8px] px-[8px]"
            >
              Log Out
            </button>
          </Link>
        )}
        {isLogin && (
          <Link to="/dashboard">
            <button className="bg-[#161d29] text-[#afb2bf]  py-[8px] border-richblack-700 rounded-[8px] px-[8px]">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
export default Navbar;
