import React from 'react';
import Image from "next/image";

interface Token {
  asset: string;
  balance: string;
  price: string;
  percentage: string;
  tvl: string;
  volume: string;
  imageUrl: string; 
}

interface TokenTableProps {
  tokens: Token[];
}

const TokenTableComponent: React.FC<TokenTableProps> = ({ tokens }) => {
  return (
    <table className="min-w-full bg-white rounded-lg overflow-hidden">
      <thead className="text-gray-600 uppercase text-sm font-bold leading-normal">
        <tr>
          <th className="py-3 px-6 text-left">Asset</th>
          <th className="py-3 px-6 text-center">Balance</th>
          <th className="py-3 px-6 text-center">Price</th>
          <th className="py-3 px-6 text-center">TVL</th>
          <th className="py-3 px-6 text-center">Volume</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm">
        {tokens.map((token, index) => (
          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-6 text-left flex items-center space-x-2">
              {token.imageUrl && (
                <Image
                  src={token.imageUrl}
                  alt={token.asset}
                  width={32} 
                  height={32}
                  className="w-6 h-6 rounded-full"
                />
              )}
              <span>
                <div>{token.asset}</div>
                <div className="text-gray-400 text-xs">
                  {token.asset === 'ARCH'
                    ? 'Archway'
                    : token.asset === 'AXV'
                    ? 'Astrovault'
                    : token.asset === 'ATOM'
                    ? 'Cosmos Hub'
                    : 'Osmosis'}
                </div>
              </span>
            </td>
            <td className="py-3 px-6 text-center">
              {token.balance}
              <div className="text-gray-400 text-xs">{token.tvl}</div>
            </td>
            <td className="py-3 px-6 text-center">
              {token.price}{' '}
              <span className="text-green-500 font-semibold"> {token.percentage} ▲</span>
            </td>
            <td className="py-3 px-6 text-center">{token.tvl}</td>
            <td className="py-3 px-6 text-center">{token.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TokenTableComponent;
