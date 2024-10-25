import React, { useContext, useState } from "react";
import Header from "./Header";
import doggy from "../assets/dog.png";
import DropDownProfile from "./components/drowndownprofile";
import WelcomeCard from "./components/WelcomeCard";
import MainPanel from "./components/MainPanel";

function HomeFeed() {
  const [parentData, setParentData] = useState(false);
  const [LoggedIn, setLogIn] = useState(false)
  const [onboarding, setonboarding] = useState(false)

  // Callback function to receive data from the child
  const handleDataFromChild = (data) => {
    setParentData(data);
  };

  const handleOnboardingData = (data) => {
    setonboarding(data)
    setLogIn(data)
  }
  return (
    <div className="flex flex-col m-0">
      <Header sendDatatoHome={handleDataFromChild}></Header>
      {parentData && <DropDownProfile></DropDownProfile>}
      {
        onboarding &&  <MainPanel></MainPanel>
      }

      {!onboarding && <div className="flex flex-col items-center">
        <h1 className="text-9xl font-bold mt-24 font-mono">
          <span className="bg-gradient-to-r from-[#644e6e] via-[#B234FF] via-50% to-[#F5B7FF] text-transparent bg-clip-text">
            WATCH
          </span>
          <span className="text-white">DOGS</span>
        </h1>
        <p className="text-2xl text-white">We know what you do in the dark..</p>

        <img
          src={doggy}
          alt="slack-logo"
          style={{
            marginTop: "50px",
            height: "338px",
            width: "342px",
          }}
        />

        <div className="flex items-center w-full mt-4 -translate-y-56 ">
          <input
            type="search"
            placeholder="Type in ETH Address.."
            className="placeholder:text-lime-400 placeholder:font-light placeholder:ml-5 w-full p-2 rounded-2xl border border-gray-300 mx-10"
          />
        </div>
        {!LoggedIn && !onboarding && <WelcomeCard setOnboarding={handleOnboardingData}></WelcomeCard>}

      </div>}
    </div>
  );
}

export default HomeFeed;
