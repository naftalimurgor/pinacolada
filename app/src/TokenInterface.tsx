'use client';

import React, { useState } from 'react';

import HeaderContent from './component/HeaderContent';

const TokenInterface: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Header section */}
      <div
        className="relative p-8 rounded-t-3xl"
        style={{
          width: '2050px',
          height: '302px',
          top: '8px',
          left: '8px',
          gap: '14px',
          borderRadius: '16px',
          backgroundImage: 'url(/sky.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <HeaderContent />

        {/* Title Section */}
        <div className="mt-8 flex justify-between items-center text-white">
          {/* Left: Token Title */}
          <div className="text-left">
            <span className="block text-5xl font-extrabold">TOKENS</span>
            <span className="block text-xl text-lime-400 font-bold text-left">MENU</span>
          </div>

          {/* Description Section */}
          <div className="max-w-3xl mx-auto flex justify-between" style={{ marginLeft: '424px' }}>
            {/* Left-aligned sentence */}
            <div className="text-left">
              <p className="text-base">
                Browse through the menu with all the tokens that we currently support.
              </p>
            </div>

            {/* Right-aligned sentence */}
            <div className="text-right">
              <p className="text-base">
                Let the bartender know if you want to know our favourites.
              </p>
            </div>
          </div>
        </div>
      </div>





      {/* Content section */}
      <div className="px-8 py-12">
        <div className="grid grid-cols-4 gap-6">
          {/* Left: Search and Filters */}
          <div className="col-span-1">
            <div className="mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for name or ticker"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Balance</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Any</option>
                <option>High to Low</option>
                <option>Low to High</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Price</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="From"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="number"
                  placeholder="To"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 font-semibold">TVL</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="From"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="number"
                  placeholder="To"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right: Tokens List */}
          <div className="col-span-3">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Asset</th>
                  <th className="py-3 px-6 text-left">Balance</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">TVL</th>
                  <th className="py-3 px-6 text-left">Volume</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {[
                  { asset: 'ARCH', balance: '9644', price: '$100', tvl: '$18,901.00', volume: '$18,901.00' },
                  { asset: 'AXV', balance: '9644', price: '$100', tvl: '$18,901.00', volume: '$18,901.00' },
                  { asset: 'ATOM', balance: '9644', price: '$100', tvl: '$18,901.00', volume: '$18,901.00' },
                  { asset: 'OSMO', balance: '9644', price: '$100', tvl: '$18,901.00', volume: '$18,901.00' },
                  // Add more tokens as necessary
                ].map((token, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-6 text-left">{token.asset}</td>
                    <td className="py-3 px-6 text-left">{token.balance}</td>
                    <td className="py-3 px-6 text-left">{token.price}</td>
                    <td className="py-3 px-6 text-left">{token.tvl}</td>
                    <td className="py-3 px-6 text-left">{token.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenInterface;
