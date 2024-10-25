import React, { useContext, useState } from "react";
import Header from "./Header";
import doggy from "../assets/dog.png";
import DropDownProfile from "./components/drowndownprofile";
import WelcomeCard from "./components/WelcomeCard";

function WelcomeScreen() {
  const [parentData, setParentData] = useState(false);

  // Callback function to receive data from the child
  const handleDataFromChild = (data) => {
    setParentData(data);
  };
  return (
    <div className="flex flex-col m-0">
      <Header sendDatatoHome={handleDataFromChild}></Header>
      {parentData && <DropDownProfile></DropDownProfile>}

      <div className="flex flex-col items-center">
        <h1 className="text-2xl sm:text-9xl font-bold mt-24 font-mono chakra-bold">
          {/* bg-gradient-to-r from-[#F5B7FF] via-[##B234FF] to-[#08000C] */}
          <span
            // style={{background: 'linear-gradient(268.28deg, #08000C 27.33%, #B234FF 73.45%, #F5B7FF 101.19%)'}}

            className="
            bg-clip-text gradientText"
          >
            WATCH
          </span>
          <span className="text-white">DOGS</span>
        </h1>
        <p className="text-lg sm:text-2xl text-white">
          We know what you do in the dark..
        </p>

        <img
          src={doggy}
          alt="slack-logo"
          style={{
            marginTop: "50px",
            height: "338px",
            width: "342px",
          }}
        />

        <div className="w-auto sm:w-[70%] -translate-y-56 mx-10">
          <div className="relative flex items-center">
            <input
              type="search"
              placeholder="Type in ETH Address.."
              className="w-full p-2 pl-5 pr-32 rounded-2xl border border-gray-300 placeholder:text-white placeholder:font-light"
            />
            <button
              type="button"
              className="absolute right-2 flex items-center justify-center gap-4 px-5 py-1.5 bg-black rounded-xl text-white border border-gray-700"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
