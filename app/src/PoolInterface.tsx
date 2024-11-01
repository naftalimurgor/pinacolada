"use client";

import React, { useState, useEffect } from "react";
import HeaderSmall from "./component/HeaderSmall";
import HeaderPool from "./component/HeaderPool";
import FilterSidebar from "./component/FilterSideBar";
import PoolTabsInterface from "./PoolTabsInterface";


const PoolInterface: React.FC = () => {
  const [showSmallHeader, setShowSmallHeader] = useState(false);

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
          <PoolTabsInterface />
        </div>
      </div>
    </div>
  );
};

export default PoolInterface;
