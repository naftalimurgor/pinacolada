import React from "react";
import Image from "next/image";

interface Pool {
  name: string;
  apr: string;
  liquidity: string;
  fees: string;
  volume: string;
  imageUrls: string[];
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
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {pool.imageUrls.slice(0, 2).map((url, i) => (
                    <Image
                      key={i}
                      src={url}
                      alt={`${pool.name} logo ${i + 1}`}
                      width={24}
                      height={24}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <h3 className="text-lg font-semibold">{pool.name}</h3>
              </div>
              <span className="text-gray-500 text-sm">{pool.apr} APR</span>
            </div>
            <p className="text-gray-500">Fees: {pool.fees}</p>
            <p className="text-gray-500">Liquidity: {pool.liquidity}</p>
            <p className="text-gray-500">24h Volume: {pool.volume}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoolList;
