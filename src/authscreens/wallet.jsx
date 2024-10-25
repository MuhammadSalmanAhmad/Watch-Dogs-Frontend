import React from "react";
import watchdogs from "../assets/header-logo.png";
import googleIcon from "../assets/googleicon.svg";
import microSoft from "../assets/microsoft_icon.svg";
import wolf from "../assets/wolf.png";
import coinbase from "../assets/coinbase.png";
import walllet from "../assets/wallet.png";
import { Link,useNavigate } from "react-router-dom";

function Wallet() {
    let navigate = useNavigate();
  return (
    <div className="flex flex-col flex-1 h-screen w-full bg-white items-center">
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
      <div className="mt-24 items-center flex flex-col justify-between space-y-5 w-full max-w-sm min-w-[200px]">
        <h1 className="text-4xl text-black text-center font-extrabold">
          Connect your wallet
        </h1>

        <button
          type="button"
          class="w-auto sm:w-full flex items-center justify-center gap-4 px-5 py-2 bg-black rounded-xl text-white border border-gray-700"
        >
          <img
            src={wolf}
            style={{
              height: "20px",
              width: "20px",
            }}
          ></img>
          Install MetaMask
        </button>
        <button
          type="button"
          class="w-auto sm:w-full flex items-center justify-center gap-4 px-5 py-2 bg-black rounded-xl text-white border border-gray-700"
          onClick={()=>{
            navigate('/WelcomeScreen')
          }}
        >
          <img
            src={coinbase}
            style={{
              height: "20px",
              width: "20px",
            }}
          ></img>
          Coinbase Wallet
        </button>
        <button
          type="button"
          class="w-auto sm:w-full flex items-center justify-center gap-4 px-5 py-2 bg-black rounded-xl text-white border border-gray-700"
        >
          <img
            src={walllet}
            style={{
              height: "20px",
              width: "20px",
            }}
          ></img>
          Wallet Connect
        </button>
        <div className="flex flex-col items-center gap-4 mt-6">
          {/* "I'll do it later" link */}
          <button
            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
            onClick={() => {
              /* handle navigation */
            }}
          >
            I'll do it later
          </button>

          {/* Terms text */}
          <p className="text-gray-500 text-sm text-center max-w-sm">
            By connecting a wallet, you agree to WatchDogs'&nbsp;
            <a href="/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </a>
            &nbsp;and consent to its&nbsp;
            <a href="/privacy" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
