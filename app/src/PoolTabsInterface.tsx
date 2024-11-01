"use client";

import React, { useState } from "react";
import PoolList from "./component/PoolList";

interface Pool {
  name: string;
  apr: string;
  liquidity: string;
  fees: string;
  volume: string;
  imageUrls: string[];
}

interface PoolTabsInterfaceProps {
  onSelectPool: (pool: Pool) => void;
}

const PoolTabsInterface: React.FC<PoolTabsInterfaceProps> = ({ onSelectPool }) => {
  const [activeTab, setActiveTab] = useState("all");

  const pools: Pool[] = [
    { name: "ARCH - AXV", apr: "16%", liquidity: "$75M", fees: "0.45-0.35", volume: "$2M", imageUrls: ["/archipelago.png", "/cosmos.png"] },
    { name: "ATOM - AXV", apr: "16%", liquidity: "$75M", fees: "0.45-0.35", volume: "$2M", imageUrls: ["/cosmos.png", "/archipelago.png"] },
    { name: "ARCH - Osmo", apr: "16%", liquidity: "$75M", fees: "0.45-0.35", volume: "$2M", imageUrls: ["/archipelago.png", "/cosmos.png"] },
  ];

  const myPools: Pool[] = [
    { name: "ARCH - AXV", apr: "16%", liquidity: "$50M", fees: "0.40", volume: "$1.5M", imageUrls: ["/archipelago.png", "/cosmos.png"] },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative w-full h-screen font-sans">
      <div className="flex h-full">
        <div className="w-3/4 p-4">
          <div className="flex border-b mb-4">
            <button
              onClick={() => handleTabClick("my")}
              className={`px-4 py-2 font-semibold cursor-pointer ${
                activeTab === "my" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
              }`}
            >
              My Pools
            </button>
            <button
              onClick={() => handleTabClick("all")}
              className={`px-4 py-2 font-semibold ml-4 cursor-pointer ${
                activeTab === "all" ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"
              }`}
            >
              All Pools
            </button>
          </div>
          {activeTab === "my" ? (
            <PoolList pools={myPools} onSelect={onSelectPool} />
          ) : (
            <PoolList pools={pools} onSelect={onSelectPool} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PoolTabsInterface;
