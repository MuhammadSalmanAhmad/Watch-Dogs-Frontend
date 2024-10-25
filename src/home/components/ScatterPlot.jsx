// ScatterPlot.js
import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, TimeScale, LinearScale, Tooltip, Legend, PointElement } from 'chart.js';
import 'chartjs-adapter-date-fns';  // Adapter for time scale to parse dates

// Register the necessary Chart.js components
ChartJS.register(TimeScale, LinearScale, Tooltip, Legend, PointElement);

const ScatterPlot = () => {
  // Data for the chart
  const data = {
    datasets: [
      {
        label: 'Sales',
        data: [
          { x: '2021-03-20', y: 5, profit: '-2.9 ETH', item: 'Porsche 911', date: 'June 24th, 2021' },
          { x: '2021-05-10', y: 3, profit: '-1.0 ETH', item: 'Lamborghini', date: 'May 10th, 2021' },
          { x: '2021-06-24', y: 1, profit: '1.5 ETH', item: 'Ferrari', date: 'June 24th, 2021' },
          { x: '2021-03-20', y: 10, profit: '-2.9 ETH', item: 'Porsche 911', date: 'June 24th, 2021' },
          { x: '2021-05-10', y: 7, profit: '-1.0 ETH', item: 'Lamborghini', date: 'May 10th, 2021' },
          { x: '2021-06-24', y: 2, profit: '1.5 ETH', item: 'Ferrari', date: 'June 24th, 2021' },
          { x: '2021-06-24', y: 6, profit: '1.5 ETH', item: 'Ferrari', date: 'June 24th, 2021' },
          { x: '2021-03-20', y: 4, profit: '-2.9 ETH', item: 'Porsche 911', date: 'June 24th, 2021' },
          { x: '2021-06-24', y: 8, profit: '1.5 ETH', item: 'Ferrari', date: 'June 24th, 2021' },
        ],
        backgroundColor: ['purple', 'orange', 'purple'],
        pointRadius: 10,
      },
    ],
  };

  // Options for customizing the chart and tooltips
  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        
        callbacks: {
          // Custom tooltip text
          label: function (tooltipItem) {
            const { profit, item, date } = tooltipItem.raw;
            return `${item}: ${profit} on ${date}`;
          },
        },
      },
    },
    
    scales: {
        x: {
          type: 'time',
          time: {
            unit: 'month',
            tooltipFormat: 'MMM dd',
          },
          title: {
            display: true,
            text: 'Date',
            color: 'white'  // Title color
          },
          ticks: {
            color: 'white'  // Tick labels color
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'  // Grid lines color
          },
          border: {
            color: 'white'  // Axis line color
          }
        },
        y: {
          type: 'linear',
          title: {
            display: true,
            text: 'Sales',
            color: 'white'  // Title color
          },
          ticks: {
            beginAtZero: true,
            color: 'white'  // Tick labels color
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'  // Grid lines color
          },
          border: {
            color: 'white'  // Axis line color
          }
        },
      },
  };

  // Render the Scatter plot
  return <Scatter data={data} options={options} />;
};

export default ScatterPlot;
