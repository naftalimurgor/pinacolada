"use client";
import React, { useState, useEffect } from "react";
import HeaderSmall from "./component/HeaderSmall";
import HeaderPool from "./component/HeaderPool";

const FilterSidebar = () => {
  return (
    <div className="w-1/4 p-4 border-r bg-white">
      <input
        type="text"
        placeholder="Search for name or ticker"
        className="w-full p-2 mb-4 border rounded"
      />
      <select className="w-full p-2 mb-4 border rounded">
        <option value="any">Tokens (Any)</option>
      </select>
      <select className="w-full p-2 mb-4 border rounded">
        <option value="any">Pool Type (Any)</option>
      </select>
      <input
        type="number"
        placeholder="Volume From"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="number"
        placeholder="Liquidity From"
        className="w-full p-2 mb-4 border rounded"
      />
    </div>
  );
};

const PoolList = ({ pools, onSelect }) => {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-3 gap-4">
        {pools.map((pool, index) => (
          <div
            key={index}
            onClick={() => onSelect(pool)}
            className="p-4 border rounded shadow cursor-pointer hover:bg-gray-100"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{pool.name}</h3>
              <span className="text-gray-500 text-sm">16% APR</span>
            </div>
            <p className="text-gray-500">Fees: {pool.fees}</p>
            <p className="text-gray-500">Liquidity: {pool.liquidity}</p>
            <p className="text-gray-500">24 Volume: {pool.volume}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PoolInterface = () => {
  const [selectedPool, setSelectedPool] = useState(null);
  const [activeTab, setActiveTab] = useState("all"); // Track active tab (default to 'all')
  const [showSmallHeader, setShowSmallHeader] = useState(false); // State to track which header to show

  const pools = [
    { name: "ARCH - AXV", apr: "16%", liquidity: "$75M", fees: "0.45-0.35", volume: "$2M" },
    { name: "ATOM - AXV", apr: "16%", liquidity: "$75M", fees: "0.45-0.35", volume: "$2M" },
    { name: "ARCH - Osmo", apr: "16%", liquidity: "$75M", fees: "0.45-0.35", volume: "$2M" },
  ];

  // Simulating 'My Pools' data
  const myPools = [
    { name: "ARCH - AXV", apr: "16%", liquidity: "$50M", fees: "0.40", volume: "$1.5M" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Add scroll event to toggle header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSmallHeader(true); // Show HeaderSmall when scrolled past 100px
      } else {
        setShowSmallHeader(false); // Show HeaderPool when scrolled to the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen font-sans">
      {/* Toggle between HeaderSmall and HeaderPool based on scroll */}
      {showSmallHeader ? <HeaderSmall /> : <HeaderPool />}

      <div className="flex h-full">
        <FilterSidebar />

        {/* Tabs Section */}
        <div className="w-3/4 p-4">
          <div className="flex border-b mb-4">
            <button
              onClick={() => handleTabClick("my")}
              className={`px-4 py-2 font-semibold ${activeTab === "my" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
                }`}
            >
              My Pools
            </button>
            <button
              onClick={() => handleTabClick("all")}
              className={`px-4 py-2 font-semibold ml-4 ${activeTab === "all" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
                }`}
            >
              All Pools
            </button>
          </div>

          {/* Show pool list based on active tab */}
          {activeTab === "my" ? (
            <PoolList pools={myPools} onSelect={setSelectedPool} />
          ) : (
            <PoolList pools={pools} onSelect={setSelectedPool} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PoolInterface;
