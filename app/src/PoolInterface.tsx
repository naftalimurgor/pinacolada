"use client";

import React, { useState, useEffect } from "react";
import HeaderSmall from "./component/HeaderSmall";
import HeaderPool from "./component/HeaderPool";
import FilterSidebar from "./component/FilterSideBar";
import PoolTabsInterface from "./PoolTabsInterface";
import PoolDetail from "./component/PoolDetail";

interface Pool {
  name: string;
  apr: string;
  liquidity: string;
  fees: string;
  volume: string;
  imageUrls: string[];
}

const PoolInterface: React.FC = () => {
  const [showSmallHeader, setShowSmallHeader] = useState(false);
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowSmallHeader(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackClick = () => {
    setSelectedPool(null); 
  };

  return (
    <div className="relative w-full h-screen font-sans">
      {selectedPool ? (
        <HeaderSmall />
      ) : showSmallHeader ? (
        <HeaderSmall />
      ) : (
        <HeaderPool />
      )}

      <div className="flex h-full">
        {!selectedPool ? (
          <>
            <FilterSidebar />
            <div className="w-3/4 p-4">
              <PoolTabsInterface onSelectPool={setSelectedPool} />
            </div>
          </>
        ) : (
          <div className="w-full p-4">
            <PoolDetail pool={selectedPool} onBack={handleBackClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PoolInterface;
