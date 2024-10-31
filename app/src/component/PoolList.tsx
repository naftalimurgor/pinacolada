// PoolList.tsx
import React from "react";

interface Pool {
  name: string;
  apr: string;
  liquidity: string;
  fees: string;
  volume: string;
}

interface PoolListProps {
  pools: Pool[];
  onSelect: (pool: Pool) => void;
}

const PoolList: React.FC<PoolListProps> = ({ pools, onSelect }) => {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pools.map((pool, index) => (
          <div
            key={index}
            onClick={() => onSelect(pool)}
            className="p-4 border rounded shadow cursor-pointer hover:bg-gray-100 transition duration-200"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{pool.name}</h3>
              <span className="text-gray-500 text-sm">{pool.apr} APR</span>
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

export default PoolList;
