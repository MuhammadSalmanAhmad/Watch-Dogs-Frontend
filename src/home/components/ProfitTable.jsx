import React, { useState } from 'react';
import ProfitRows from './ProfitRows';
import InfiniteScroll from "react-infinite-scroll-component";

function ProfitTable() {
    // Initialize with an array of objects instead of nested arrays
    const [data, setData] = useState(Array.from({ length: 10 }, (_, index) => ({
        id: index,
        // Add other properties your ProfitRows component needs
        amount: Math.random() * 1000,
        date: new Date().toISOString()
    })));

    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        if (data.length >= 10) { // Increased limit for better UX
            setHasMore(false);
            return;
        }

        setTimeout(() => {
            const newItems = Array.from({ length: 10 }, (_, index) => ({
                id: data.length + index,
                amount: Math.random() * 1000,
                date: new Date().toISOString()
            }));

            setData(prevData => [...prevData, ...newItems]);
        }, 1500);
    };

    return (
        <div className="flex flex-col shadow-2xl rounded-2xl bg-[#333639] px-10 py-10 mt-10 gap-y-4 w-full mr-10 h-[700px]">
            <p className="text-white text-4xl font-bold">Actual Profitability</p>
            <p className="text-4xl font-bold text-[#2DE93F]">+ $20,500</p>

            <div
                id="scrollableDiv"
                className="flex flex-col space-y-5 overflow-auto"
                style={{ height: '500px' }}
            >
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={
                        <div className="text-white text-center py-4">
                            Loading more items...
                        </div>
                    }
                    scrollableTarget="scrollableDiv"
                    endMessage={
                        <div className="text-white text-center py-4">
                            No more items to load.
                        </div>
                    }
                >
                    {data.map((item) => (
                        <ProfitRows
                            key={item.id}
                            // Pass the item data to your ProfitRows component
                            //data={item}
                        />
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default ProfitTable;