import React from "react";
import watchdogs from "../assets/header-logo.png";
import googleIcon from "../assets/googleicon.svg";
import microSoft from "../assets/microsoft_icon.svg";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col flex-1 h-screen w-auto sm:w-full bg-white items-center">
      <img
        src={watchdogs}
        style={{
          height: "61px",
          width: "55px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "50px",
        }}
      ></img>
      <div className="mt-24 items-center flex flex-col justify-between space-y-5 w-auto sm:w-full max-w-sm min-w-[200px]">
        <h1 className="text-4xl text-black text-center font-semibold">
          Create your account
        </h1>
        <input
          type="text"
          className="w-auto sm:w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Email Address"
        ></input>

        <button
          type="button"
          class="w-auto sm:w-full px-5 py-2 bg-gradient-to-r from-[#FFA234] via-[#C553ED] to-[#ED62B1] text-white border border-gray-700"
          onClick={()=>{
            navigate('/onboarding')
          }}
        >
          Continue
        </button>
        <div className="flex flex-row space-x-2">
          <p className="text-black">Already have an Account ? </p>
          <Link className="text-[#C553ED]" to={"/onboarding"}>
            Login
          </Link>
        </div>
        <button
          type="button"
          className="w-auto sm:w-full flex items-center justify-center gap-4 bg-white px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
        >
          <img src={googleIcon} alt="Google icon" className="w-6 h-6" />
          <span className="text-gray-600 text-base font-medium">
            Continue with Google
          </span>
        </button>
        <button
          type="button"
          className="w-auto sm:w-full flex items-center justify-center gap-4 bg-white px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
        >
          <img src={microSoft} alt="Google icon" className="w-6 h-6" />
          <span className="text-gray-600 text-base font-medium">
            Continue with Microsoft
          </span>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
