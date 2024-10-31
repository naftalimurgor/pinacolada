"use client";

import React, { useState, useEffect } from "react";
import HeaderSmall from "./component/HeaderSmall";
import HeaderPool from "./component/HeaderPool";
import FilterSidebar from "./component/FilterSideBar";
import PoolList from "./component/PoolList"; 

const PoolInterface: React.FC = () => {
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [showSmallHeader, setShowSmallHeader] = useState(false);

  const pools = [
    { name: "ARCH - AXV", apr: "16%", liquidity: "$75M", fees: "0.45-0.35", volume: "$2M" },
    { name: "ATOM - AXV", apr: "16%", liquidity: "$75M", fees: "0.45-0.35", volume: "$2M" },
    { name: "ARCH - Osmo", apr: "16%", liquidity: "$75M", fees: "0.45-0.35", volume: "$2M" },
  ];

  const myPools = [
    { name: "ARCH - AXV", apr: "16%", liquidity: "$50M", fees: "0.40", volume: "$1.5M" },
  ];

  const handleTabClick = (tab: string) => setActiveTab(tab);

  useEffect(() => {
    const handleScroll = () => setShowSmallHeader(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen font-sans">
      {showSmallHeader ? <HeaderSmall /> : <HeaderPool />}
      <div className="flex h-full">
        <FilterSidebar />
        <div className="w-3/4 p-4">
          <div className="flex border-b mb-4">
            <button
              onClick={() => handleTabClick("my")}
              className={`px-4 py-2 font-semibold ${activeTab === "my" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"}`}
            >
              My Pools
            </button>
            <button
              onClick={() => handleTabClick("all")}
              className={`px-4 py-2 font-semibold ml-4 ${activeTab === "all" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"}`}
            >
              All Pools
            </button>
          </div>
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
