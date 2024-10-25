import React from "react";
import { useNavigate } from "react-router-dom";
import doggy from "../../assets/header-logo.png";

function DropDownProfile() {
  // navigate = useNavigate();
  let Options = ["My porfolio", "What is watch dogs ? ", "Sign up", "Sign in"];

  const navigate = useNavigate();

  return (
    <div
      className="bg-[#E5E4E4] w-52 shadow-lg rounded-2xl border border-gray-600 items-center justify-between"
      style={{
        position: "absolute",
        top: "80px",
        right: "20px",
        zIndex: "2000",
      }}
    >
      <h2 className="mx-2 mt-1 mb-1 text-black font-bold text-lg">
        You are currently Annonymous
      </h2>
      <div className="flex flex-row mx-2 items-center mb-1">
        <div className="flex flex-row flex-1">
          <img src={doggy} className="w-6 h-6"></img>
          <p className="text-black">10</p>
        </div>
        <button
          type="submit"
          className="bg-[#CFCDCD] px-2 py-2 text-black font-bold rounded-lg"
        >
          Buy Credits
        </button>
      </div>
      <ul>
        {Options.map((item) => {
          return (
            <li
              key={item}
              className="px-3 py-2 text-black cursor-pointer text-base items-center font-sans hover:bg-[#CFCDCD]"
              onClick={() => {
                if (item === Options[0]) {
                  console.log("My portfolio");
                  navigate("/signUp");
                }
                //console.log(item)
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row  border-t-2 border-gray-500 w-auto gap-2 mb-2 items-center">
        <p className="text-sm text-gray-500 hover:text-gray-800">
          Content Policy
        </p>
        <p className="text-sm text-gray-500 hover:text-gray-800">Terms</p>
        <p className="text-sm text-gray-500 hover:text-gray-800"> About</p>
      </div>
    </div>
  );
}

export default DropDownProfile;
