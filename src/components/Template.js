import frame from "../assets/frame.png";
import React from "react";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
function Template({ tittle, disc1, disc2, image, formType, setISLogin }) {
  return (
    <div className="flex w-11/12  py-12 max-w-[1160px] gap-x-20 gap-y-0 mx-auto ">
      <div className="flex flex-col gap-3">
        <h1 className="text-[1.75rem] text-white font-bold leading-[2.375rem] ">
          {tittle}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] ">
          <span className="text-[#afb2bf] ">{disc1}</span>
          <br />
          <span className="text-[#47a5c5] ">{disc2}</span>
        </p>
        {formType === "signup" ? (
          <SignUpForm setISLogin={setISLogin} />
        ) : (
          <LogInForm setISLogin={setISLogin} />
        )}
        <div className="flex w-full items-center gap-x-2">
          <div className="w-full h-[1px] bg-[#afb2bf]"></div>
          <div className="text-[#afb2bf] font-medium ">OR</div>
          <div className="w-full bg-[#afb2bf] h-[1px]"></div>
        </div>
        <button className="w-full bg-[#000814] text-[#afb2bf] border-2 border-[#afb2bf] p-2 rounded-md">
          Sign in with Google
        </button>
      </div>
      <div className="relative w-11/12 max-w-[450px]">
        <img src={frame} loading="lazy" height={558} width={504} />
        <img
          src={image}
          loading="lazy"
          height={558}
          width={490}
          className="absolute  -top-4 right-4"
        />
      </div>
    </div>
  );
}
export default Template;
