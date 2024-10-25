// src/WelcomeCard.js
import React from "react";
import dalleimage from "../../assets/Dalle-dog.png"

function WelcomeCard({setOnboarding}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-md mx-auto items-center">
        <img
          src={dalleimage}
          alt="Dog"
          className="w-full h-fit"
        />
        <h2 className="text-2xl font-bold mt-4">Welcome to WatchDogs</h2>
        <p className="mt-2 text-gray-400">Meet your creative copilot.</p>
        <p className="text-black font-semibold text-lg">Search and Learn with WatchDog's to..</p>
        <ul className="mt-4 list-disc list-inside">
          <li>
            Search any wallet addresses on the Ethereum blockchain and
            understand their NFT activity.
          </li>
          <li>
            Create watchlists, track wallet addresses and get notified when
            trades happen.
          </li>
          <li>Export the wallet data to build your own analysis.</li>
        </ul>
        {/* Added a flex container div around the button */}
        <div className="flex justify-center">
          <button className="mt-6 bg-black text-white py-2 px-4 rounded-xl w-full" onClick={()=>{
            setOnboarding(true)
          }}>
            Continue
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          By clicking 'Continue', you agree to our{" "}
          <a href="#" className="underline">
            terms
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            content policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default WelcomeCard;