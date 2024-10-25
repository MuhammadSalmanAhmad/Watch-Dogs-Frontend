import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import InfiniteScroll from "react-infinite-scroll-component";
import mockData from "../../assets/mock_Data/data.json";
import arrow_right from "../../assets/arrow_right.svg";
import arrow_left from "../../assets/arrow_left.svg";

function Transaction() {
  const [data, setData] = useState(() => mockData["transactions"]);
  const [hasMore, setHasMore] = useState(true);

  const columns = [
    {
      accessorKey: "txnHash",
      header: () => <span>Txn Hash</span>,
      cell: ({ row }) => (
        <div className="font-mono bg-gradient-to-r from-[#FFA234] via-[#ED62B1] to-[#C553ED] text-transparent bg-clip-text text-wrap break-all">
          {row.original.txnHash}
        </div>
      ),
    },
    {
      accessorKey: "date",
      header: () => <span>Date</span>,
      cell: ({ row }) => (
        <div className="text-gray-200">{row.original.date}</div>
      ),
    },
    {
      accessorKey: "from",
      header: () => <span>From</span>,
      cell: ({ row }) => (
        <div className="font-mono break-all">{row.original.from}</div>
      ),
    },
    {
      accessorKey: "to",
      header: () => <span>To</span>,
      cell: ({ row }) => (
        <div className="font-mono break-all">{row.original.to}</div>
      ),
    },
    {
      accessorKey: "tokenId",
      header: () => <span>Token ID</span>,
      cell: ({ row }) => (
        <div className="bg-gradient-to-r from-[#FFA234] via-[#ED62B1] to-[#C553ED] text-transparent bg-clip-text">
          {row.original.tokenId}
        </div>
      ),
    },
    {
      accessorKey: "profitLoss",
      header: () => <span>Profit/Loss</span>,
      cell: ({ row }) => {
        const value = row.original.profitLoss;
        if (!value) return <div>None</div>;
        const isProfit = value.startsWith("+");
        return (
          <div className={isProfit ? "text-green-500" : "text-red-500"}>
            {value}
          </div>
        );
      },
    },
    {
      accessorKey: "type",
      header: () => <span>Type</span>,
      cell: ({ row }) => (
        <div className="text-gray-200">{row.original.type}</div>
      ),
    },
  ];

  const fetchMoreData = () => {
    if (data.length >= 20) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const newItems = Array.from({ length: 20 }, (_, index) => ({
        txnHash: `0x${Math.random().toString(16).substr(2, 8)}...`,
        date: new Date(Date.now() - Math.random() * 10000000000)
          .toISOString()
          .split("T")[0],
        from: `0x${Math.random().toString(16).substr(2, 8)}...`,
        to: `0x${Math.random().toString(16).substr(2, 8)}...`,
        tokenId: Math.floor(Math.random() * 10000).toString(),
        profitLoss:
          Math.random() > 0.5
            ? `+${(Math.random() * 2).toFixed(2)} ETH`
            : `-${(Math.random() * 2).toFixed(2)} ETH`,
        type: Math.random() > 0.5 ? "Sale" : "Purchase",
      }));

      setData((prevData) => [...prevData, ...newItems]);
    }, 1500);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Mobile card view renderer
  const renderMobileCard = (row) => (
    <div className="bg-[#3f4246] p-4 rounded-lg mb-4 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">Date</span>
        <span className="text-gray-200">{row.original.date}</span>
      </div>
      <div className="space-y-1">
        <span className="text-gray-400 text-sm">Txn Hash</span>
        <div className="font-mono bg-gradient-to-r from-[#FFA234] via-[#ED62B1] to-[#C553ED] text-transparent bg-clip-text text-sm break-all">
          {row.original.txnHash}
        </div>
      </div>
      <div className="space-y-1">
        <span className="text-gray-400 text-sm">From</span>
        <div className="font-mono text-sm break-all">{row.original.from}</div>
      </div>
      <div className="space-y-1">
        <span className="text-gray-400 text-sm">To</span>
        <div className="font-mono text-sm break-all">{row.original.to}</div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-gray-400 text-sm">Token ID</span>
          <div className="bg-gradient-to-r from-[#FFA234] via-[#ED62B1] to-[#C553ED] text-transparent bg-clip-text">
            {row.original.tokenId}
          </div>
        </div>
        <div>
          <span className="text-gray-400 text-sm">Type</span>
          <div className="text-gray-200">{row.original.type}</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">Profit/Loss</span>
        <div className={row.original.profitLoss?.startsWith("+") ? "text-green-500" : "text-red-500"}>
          {row.original.profitLoss || "None"}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col shadow-2xl rounded-2xl bg-[#333639] p-4 sm:px-10 sm:py-10 mt-4 sm:mt-10 gap-y-4 w-full max-w-[1450px] mx-auto mb-10">
      <h2 className="text-white text-2xl sm:text-4xl font-bold px-2 sm:px-0">NFT Transactions</h2>

      <div
        id="scrollableDiv"
        className="overflow-auto"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="text-gray-400 text-center py-4">
              Loading more transactions...
            </div>
          }
          scrollableTarget="scrollableDiv"
          endMessage={
            <div className="text-gray-400 text-center py-4">
              No more transactions to load.
            </div>
          }
        >
          {/* Mobile View */}
          <div className="sm:hidden space-y-4">
            {table.getRowModel().rows.map((row) => (
              <div key={row.id}>{renderMobileCard(row)}</div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <table className="w-full">
              <thead className="sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="p-4 text-left text-gray-200 font-bold bg-[#333639]"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="border-t border-gray-700">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="p-4">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfiniteScroll>

        <div className="w-full flex flex-row gap-2 justify-center sm:justify-end mr-0 sm:mr-5 mb-5 mt-4">
          <button
            onClick={() => table.setPageIndex(0)}
            className="bg-[#5A555B] text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
          >
            First
          </button>
          <button
            onClick={() => table.previousPage()}
            className="bg-[#5A555B] text-white px-3 sm:px-4 py-2 rounded-lg"
          >
            <img src={arrow_left} alt="Previous" className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
          <button
            onClick={() => table.nextPage()}
            className="bg-[#5A555B] text-white px-3 sm:px-4 py-2 rounded-lg"
          >
            <img src={arrow_right} alt="Next" className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
          <button
            onClick={() => table.setPageIndex(table.pageCount() - 1)}
            className="bg-[#5A555B] text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transaction;