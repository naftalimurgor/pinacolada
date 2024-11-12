import React from 'react';
import Image from 'next/image';

interface PoolBalanceProps {
    balance: string;
    tokens: { name: string; symbol: string; amount: string; imageUrl: string }[];
}

const PoolBalance: React.FC<PoolBalanceProps> = ({ balance, tokens }) => (
    <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-between mb-6">
        <div>
            <h2 className="text-sm font-semibold text-gray-500 mb-1">Your Pool Balance</h2>
            <p className="text-2xl font-semibold text-gray-900">${balance}</p>
        </div>
        <div className="flex items-center space-x-4">
            {tokens.map((token, index) => (
                <div key={index} className="flex items-center space-x-1">
                    <Image src={token.imageUrl} alt={token.name} width={24} height={24} className="rounded-full" />
                    <span className="text-sm font-medium text-gray-900">{token.symbol}</span>
                    <span className="text-sm text-gray-500">{token.amount}</span>
                </div>
            ))}
        </div>
    </div>
);

export default PoolBalance;
