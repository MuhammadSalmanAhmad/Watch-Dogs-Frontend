import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import clone from "../../assets/clone.png";
import tick from "../../assets/tick.png";

const NFTCollections = () => {
  const [data, setData] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      id: index,
      collection: `Collection ${index}`,
      floorPrice: (Math.random() * 10).toFixed(2),
      profit: (Math.random() * 1000).toFixed(2),
      minted: Math.floor(Math.random() * 100),
      total: Math.floor(Math.random() * 1000),
    }))
  );

  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (data.length >= 50) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const newItems = Array.from({ length: 10 }, (_, index) => ({
        id: data.length + index,
        collection: `Collection ${data.length + index}`,
        floorPrice: (Math.random() * 10).toFixed(2),
        profit: (Math.random() * 1000).toFixed(2),
        minted: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 1000),
      }));

      setData((prevData) => [...prevData, ...newItems]);
    }, 1500);
  };

  // Mobile view column labels
  const getColumnLabel = (key) => {
    const labels = {
      floorPrice: "Floor",
      profit: "Profit",
      minted: "Minted",
      total: "Total",
    };
    return labels[key] || key;
  };

  return (
    <div className="flex flex-col bg-[#1e2023] rounded-2xl p-2 sm:p-6 w-full max-w-screen-2xl mx-auto mt-4 sm:mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 px-2 sm:px-0">
        <h2 className="text-white text-xl sm:text-3xl font-bold mb-2 sm:mb-0">NFT Collections</h2>
        <p className="text-gray-400 text-xs sm:text-sm">
          owned by wallet: <span className="hidden sm:inline">0x123Hdedhei00012htg...</span>
          <span className="inline sm:hidden">0x123...htg</span>
        </p>
      </div>

      {/* Header - Hidden on mobile */}
      <div className="hidden sm:grid sm:grid-cols-6 gap-4 px-4 mb-4">
        <div className="text-gray-400 text-sm">#</div>
        <div className="text-gray-400 text-sm">COLLECTION</div>
        <div className="text-gray-400 text-sm">FLOOR PRICE</div>
        <div className="text-gray-400 text-sm">PROFIT</div>
        <div className="text-gray-400 text-sm">MINTED</div>
        <div className="text-gray-400 text-sm">TOTAL</div>
      </div>

      <div
        id="scrollableDiv"
        className="overflow-y-auto"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="text-gray-400 text-center py-4">
              Loading more items...
            </div>
          }
          scrollableTarget="scrollableDiv"
          endMessage={
            <div className="text-gray-400 text-center py-4">
              No more items to load.
            </div>
          }
        >
          <div className="flex flex-col gap-2">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="odd:bg-[#333639] transition-colors rounded-lg p-3 sm:p-4"
              >
                {/* Mobile Layout */}
                <div className="sm:hidden">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-gray-300 text-sm">{index + 1}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#3f4246] rounded-lg">
                        <img src={clone} alt="Clone" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-white text-sm">Clone X</p>
                      <img src={tick} alt="Verified" className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {['floorPrice', 'profit', 'minted', 'total'].map((key) => (
                      <div key={key} className="flex justify-between items-center bg-[#2a2d30] p-2 rounded">
                        <span className="text-gray-400 text-xs">{getColumnLabel(key)}</span>
                        <span className="text-white text-sm">{item[key]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:grid sm:grid-cols-6 gap-4 items-center">
                  <div className="text-gray-300">{index + 1}</div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-[#3f4246] rounded-lg">
                      <img src={clone} alt="Clone" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-white">Clone X</p>
                    <img src={tick} alt="Verified" className="w-5 h-5" />
                  </div>
                  <div className="text-white">{item.floorPrice}</div>
                  <div className="text-white">{item.profit}</div>
                  <div className="text-white">{item.minted}</div>
                  <div className="text-white">{item.total}</div>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default NFTCollections;