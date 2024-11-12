import React, { useState, useEffect } from "react";

import { HeaderSmall, HeaderPool } from '@/component/Header';

import FilterSidebar from "@/component/filtersidebar/FilterSideBar";
import PoolTabsInterface from "./PoolTabsInterface";
import PoolDetail from "@/component/pool/PoolDetail";
import PoolDetailAdvanced from "@/component/pool/PoolDetailAdvanced";

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
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSmallHeader(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackClick = () => {
    setSelectedPool(null);
    setShowAdvanced(false); 
  };

  const handleAddLiquidityClick = () => {
    setShowAdvanced(true); 
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
            {showAdvanced ? (
              <PoolDetailAdvanced pool={selectedPool} onBack={handleBackClick} />
            ) : (
              <PoolDetail pool={selectedPool} onBack={handleBackClick} onAddLiquidity={handleAddLiquidityClick} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PoolInterface;
