"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Tabs from './component/Tabs';

const TokenSelector = ({ token, balance }) => (
  <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
    <span className="font-semibold">{token}</span>
  </div>
);

const SwapInterface = () => {
  const [slippageOpen, setSlippageOpen] = useState(false);
  const [customSlippage, setCustomSlippage] = useState('');

  return (
    <div className="relative w-full h-screen font-sans">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/pinacoladaisland.png"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
      </div>

      {/* Header */}
      <div className="relative p-6">
        <div className="flex justify-between items-center">
          {/* Left: Logo or Icon */}
          <div className="text-white font-extrabold text-lg">🍹</div>

          {/* Center: Menu Tabs */}
          <Tabs />

          {/* Right: Wallet Info */}
          <div className="text-white flex items-center space-x-4">
            <span className="text-sm">Wallet Name</span>
            <div className="w-6 h-6 bg-green-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Swap Box */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 w-96">
          {/* Swap Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-extrabold tracking-wide text-gray-900">
              SWAP <span className="text-lime-500">TOKENS</span>
            </h2>
            <button onClick={() => setSlippageOpen(true)} className="p-2">
              <div className="bg-gray-200 p-2 rounded-md shadow-md">⚙️</div>
            </button>
          </div>

          {/* Token Inputs */}
          <div className="space-y-6">
            {/* First Token Input */}
            <div className="bg-gray-100 rounded-2xl p-4 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <TokenSelector token="ATOM" balance="144,950.00" />
                <span className="text-sm text-gray-500">Available: 144,950.00</span>
              </div>
              <input
                type="text"
                placeholder="0"
                className="w-full bg-transparent text-4xl font-extrabold focus:outline-none text-right"
              />
              <div className="flex justify-end space-x-2 mt-2">
                <button className="text-sm text-gray-600 hover:underline">Half</button>
                <button className="text-sm text-gray-600 hover:underline">Max</button>
              </div>
            </div>

            {/* Swap Icon */}
            <div className="flex justify-center my-2">
              <button className="p-2 bg-white rounded-full shadow-lg">🔄</button>
            </div>

            {/* Second Token Input */}
            <div className="bg-gray-100 rounded-2xl p-4 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <TokenSelector token="ARCH" balance="0.00" />
                <span className="text-sm text-gray-500">Available: 0.00</span>
              </div>
              <input
                type="text"
                placeholder="0"
                className="w-full bg-transparent text-4xl font-extrabold focus:outline-none text-right"
              />
            </div>
          </div>

          {/* Swap Button */}
          <button className="w-full bg-lime-500 text-white py-3 rounded-lg mt-6 font-bold text-lg hover:bg-lime-600 transition duration-300 shadow-lg">
            Swap
          </button>
        </div>

        {/* Slippage Modal */}
        {slippageOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 w-96 relative shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Slippage Tolerance</h3>
                <button onClick={() => setSlippageOpen(false)}>
                  <span className="text-gray-500 cursor-pointer">✖️</span>
                </button>
              </div>
              <div className="flex space-x-2 mb-4">
                {['2%', '3%', '4%'].map((value) => (
                  <button
                    key={value}
                    className="flex-1 py-2 border rounded-lg hover:bg-gray-100"
                    onClick={() => {
                      setCustomSlippage(value);
                      setSlippageOpen(false);
                    }}
                  >
                    {value}
                  </button>
                ))}
                <button
                  className="flex-1 py-2 border rounded-lg hover:bg-gray-100"
                  onClick={() => setCustomSlippage('')}
                >
                  Custom
                </button>
              </div>
              <input
                type="text"
                value={customSlippage}
                onChange={(e) => setCustomSlippage(e.target.value)}
                placeholder="Custom slippage amount"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SwapInterface;
