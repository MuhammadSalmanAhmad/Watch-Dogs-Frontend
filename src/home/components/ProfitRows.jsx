import React from "react";
import profilepic1 from '../../assets/profile1.svg'

function ProfitRows() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row space-x-16 mt-5 flex-1">
        <img src={profilepic1}></img>
        <div className="flex flex-col">
          <p className="text-white text-xl font-semibold">CloneX #10098</p>
          <p className="text-[#F19C44] text-lg"> 12 hours to go</p>
        </div>
      </div>
      <div className="items-center">
        <p className="text-2xl font-bold text-white">6.9 ETH</p>
      </div>
    </div>
  );
}

export default ProfitRows;
