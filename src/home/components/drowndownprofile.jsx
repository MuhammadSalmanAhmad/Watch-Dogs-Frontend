import React from "react";
import { useNavigate } from "react-router-dom";

function DropDownProfile() {
 // navigate = useNavigate();
  let Options = ["My porfolio", "What is watch dogs ? ", "Sign up", "Sign in"];

  const navigate = useNavigate();


  return (
    <div
      className="bg-[#E5E4E4] w-52 shadow-lg rounded-2xl border border-gray-600 items-center justify-between"
      style={{
        position: "absolute",
        top: "50px",
        right: "10px",
        zIndex: "2000",
      }}
    >
      <h2 className="mx-2 mt-1 mb-1 text-black font-sans">
        You are currently Annonymous
      </h2>

      <ul>
        {Options.map((item) => {
          return (
            <li
              key={item}
              className="px-3 py-2 text-black hover:bg-slate-500 cursor-pointer text-base items-center font-sans"
              onClick={() => {
                if (item === Options[0]) {
                  console.log("My portfolio");
                  navigate('/signUp')
                }
                //console.log(item)
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropDownProfile;
