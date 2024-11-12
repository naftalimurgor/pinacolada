import React from 'react';
import Image from 'next/image';
import { InfoIcon} from '@/component/Icons';

interface PoolInfoProps {
    pool: {
        name: string;
        apr: string;
        liquidity: string;
        fees: string;
        volume: string;
        imageUrls: string[];
    };
    onAddLiquidity: () => void;
}

const PoolInfo: React.FC<PoolInfoProps> = ({ pool, onAddLiquidity }) => (
    <div>
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4 h-[50px]">
                <div className="flex items-center space-x-2">
                    <div className="flex -space-x-1">
                        {pool.imageUrls.slice(0, 2).map((url, index) => (
                            <Image key={index} src={url} alt="Token logo" width={32} height={32} className="rounded-full border-2 border-white" />
                        ))}
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">{pool.name}</h2>
                </div>
                <span className="bg-gray-100 text-gray-700 text-xs font-medium py-1 px-2 rounded-full flex items-center">
                    {pool.apr} APR <InfoIcon className="ml-1" />
                </span>
            </div>
            <div className="grid grid-cols-3 divide-x divide-gray-200 text-center border border-gray-200 rounded-lg p-4 mt-4 mb-4">
                <div className="flex flex-col items-center">
                    <p className="text-xs font-semibold text-gray-400">Fees</p>
                    <p className="text-lg font-medium text-gray-900">{pool.fees}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs font-semibold text-gray-400">Liquidity</p>
                    <p className="text-lg font-medium text-gray-900">{pool.liquidity}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs font-semibold text-gray-400">24 Volume</p>
                    <p className="text-lg font-medium text-gray-900">{pool.volume}</p>
                </div>
            </div>

        </div>
        <button onClick={onAddLiquidity} className="text-black px-4 py-2 rounded-lg font-semibold w-full mt-4 bg-[#ADFF00]">
            Add Liquidity
        </button>
    </div>
);

export default PoolInfo;
