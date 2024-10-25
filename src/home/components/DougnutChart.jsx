import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function DougnutChart() {
  const data = {
    labels: ["ETH balance", "Token Balance", "NFT balance"],
    datasets: [
      {
        label: "# of Votes",
        data: [100, 20, 30],
        backgroundColor: [
          "rgba(165, 16, 255, 1)",
          "rgba(217,70,170,1)",
          "rgba(241, 156, 68, 1)",
        ],
        borderWidth: 1,
        cutout: "50%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
          padding: 20,
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex flex-col shadow-2xl rounded-2xl bg-[#333639] px-10 py-10 mt-10 h-[700px] w-full">
      <p className="text-white font-normal text-3xl">Total Balance</p>
      <p className="font-bold text-white text-4xl mb-6">$101,230</p>
      <div className="flex-1 w-full">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default DougnutChart;