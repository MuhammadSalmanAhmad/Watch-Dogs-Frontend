import React from "react";
import watchdogs from "../assets/header-logo.png";
import { useNavigate } from "react-router-dom";

function OnBoarding() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col flex-1 h-screen w-full bg-white items-center">
      <img
        src={watchdogs}
        className="h-16 w-14 mx-auto mt-12"
        alt="Watchdogs logo"
      />
      <div className="mt-24 items-center flex flex-col justify-center w-full px-4">
        <div className="w-full max-w-[400px] flex flex-col items-center space-y-5">
          <h1 className="text-4xl text-black text-center font-semibold mb-1">
            What should we call you
          </h1>
          <div className="flex w-full gap-3">
            <input
              type="text"
              className="w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Last Name"
            />
          </div>

          <button
            type="button"
            className="w-full px-5 py-2 bg-gradient-to-r from-[#FFA234] via-[#C553ED] to-[#ED62B1] text-white border border-gray-700 rounded-md hover:opacity-90 transition-opacity"
            onClick={() => navigate("/wallet")}
          >
            Continue
          </button>
          <p className="text-gray-600 text-sm text-center max-w-[400px]">
            By clicking 'Continue', you agree to our Terms and confirm you're 18 years or older
          </p>
        </div>
      </div>
    </div>
  );
}

export default OnBoarding;