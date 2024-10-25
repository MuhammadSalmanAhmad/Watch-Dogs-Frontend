import React from 'react';
import ScatterPlot from './ScatterPlot';


function NFTtransactions() {
    return (
        <div className='flex flex-col shadow-2xl rounded-2xl bg-[#333639] px-10 py-10 mt-10 w-[450px]  gap-y-2 mx-2 sm:gap-y-4 sm:w-[1450px] sm:mx-16  mb-10'>
            <h2 className='text-white text-2xl sm:text-4xl font-bold'>NFT Transactions (Profit / Loss) </h2>
            <ScatterPlot></ScatterPlot>
           
        </div>
    );
}

export default NFTtransactions;