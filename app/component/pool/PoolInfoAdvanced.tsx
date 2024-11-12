import React from 'react';
import Image from 'next/image';

interface PoolInfoProps {
    pool: {
        name: string;
        apr: string;
        liquidity: string;
        fees: string;
        volume: string;
        imageUrls: string[];
        rewards: { token: string, amount: string, imageUrl: string }[];
    }; onAddLiquidity: () => void;
}

const PoolInfoAdvanced: React.FC<PoolInfoProps> = ({ pool, onAddLiquidity }) => (
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
                <span className="bg-gray-100 text-gray-700 text-xs font-medium py-1 px-2 rounded-full">
                    {pool.apr} APR
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
        <div className="bg-white rounded-lg gap-4 border border-gray-300 mt-4 mb-4">
            <div className="bg-white text-green-600 rounded-lg p-4 mb-4 mt-4 grid grid-cols-2 gap-4">
                {pool.rewards.map((reward, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <Image src={reward.imageUrl} alt={`${reward.token} logo`} width={24} height={24} className="rounded-full" />
                        <span className="font-medium text-gray-900">{reward.token}</span>
                        <span className="ml-auto text-gray-700">{reward.amount}</span>
                    </div>
                ))}
            </div>
            <button className="w-[94%] bg-[#ADFF00] text-black rounded-lg py-4 mb-2 font-semibold ml-3 mr-1">
                Claim Rewards
            </button>
        </div>



        <div className="space-y-4">
            <button onClick={onAddLiquidity} className="w-full py-4  bg-white rounded-xl border border-gray-200 shadow-lg font-bold">Add Liquidity</button>
            <button className=" w-full py-4 bg-white rounded-xl border border-gray-200 shadow-lg font-bold">Withdraw Liquidity</button>
        </div>

    </div>
);

export default PoolInfoAdvanced;
