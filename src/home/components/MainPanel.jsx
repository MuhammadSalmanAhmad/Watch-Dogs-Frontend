import React from "react";
import DougnutChart from "./DougnutChart.jsx";
import ProfitTable from "./ProfitTable.jsx";
import NFTtransactions from "./NFTtransactions.jsx";
import NFTCollections from "./NFTCollections.jsx";
import Transaction from "./Transactions.jsx";
//import DougnutChart from "./DougnutChart";

function MainPanel() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-5xl font-semibold  text-white">WatchDogs</h2>
      <div
        className="flex flex-col items-center mt-5 mx-10  "
        style={{
          width: "1000px",
        }}
      >
        <div className="w-auto sm:w-full mt-10 ">
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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 px-6 ">
        <DougnutChart />
        <ProfitTable></ProfitTable>
      </div>
      <NFTCollections></NFTCollections>
      <NFTtransactions></NFTtransactions>
      <Transaction></Transaction>
    </div>
  );
}

export default MainPanel;
