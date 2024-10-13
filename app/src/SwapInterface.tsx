'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import HeaderContent from './component/HeaderContent';
import SwapUpDownIcon from './component/Icons/SwapUpDown';
import XIcon from './component/Icons/XIcon';
import SliderIcon from './component/Icons/Slider';

const TokenSelector = ({ token, balance }) => (
  <div className="flex items-center space-x-2 rounded-lg px-4 py-2 w-36">
    <div className="flex items-center space-x-2">
      <Image
        src="/pinacoladaisland.png"
        alt={token}
        width={22}
        height={24}
        className="rounded-full"
      />
      <span className="font-semibold">{token}</span>
      <span className="text-sm text-gray-500">▼</span> {/* Dropdown icon */}
    </div>
  </div>
);

const SwapInterface = () => {
  const [slippageOpen, setSlippageOpen] = useState(false);
  const [customSlippage, setCustomSlippage] = useState('');

  return (
    <div className="relative w-full h-screen font-sans"
    style={{
      width: '2050px',
      height: '100vh',
      top: '8px',
      left: '8px',
      gap: '14px',
      borderRadius: '16px',
      backgroundImage: 'url(/pinacoladaisland.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
  }}
    >
      {/* Header Section */}
      <div className="relative p-8 rounded-t-3xl">
        <HeaderContent />
      </div>

      {/* Main Swap Box */}
      <div className={`relative z-10 flex flex-col items-center justify-center ${slippageOpen ? 'mt-10' : 'mt-0'}`}>
        <div className="relative z-10 flex justify-between items-center px-8 mb-6">
          <h2 className="text-4xl font-extrabold tracking-wide text-white">
            SWAP <span className="text-lime-500">TOKENS</span>
          </h2>
          <button onClick={() => setSlippageOpen(true)} className="p-2">
            <SliderIcon />
          </button>
        </div>

        {slippageOpen && (
          <div
            className="relative z-20 w-[480px] bg-white rounded-2xl shadow-lg p-6 transition-all ease-in-out duration-300"
            style={{ top: '0px', marginBottom: '20px' }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Slippage Tolerance</h3>
              <button onClick={() => setSlippageOpen(false)}>
                <XIcon />
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
        )}

        <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 w-[480px]">
          {/* Token Inputs */}
          <div className="space-y-6">
            {/* First Token Input */}
            <div className="rounded-2xl p-4 flex justify-between items-center">
              {/* Token Selector and Available Balance (Left side) */}
              <div className="flex flex-col items-start">
                <TokenSelector token="ATOM" balance="144,950.00" />
                <span className="text-sm text-gray-500 mt-1">
                  Available: 144,950.00
                </span>
              </div>

              {/* Input and Half/Max Buttons (Right side) */}
              <div className="w-1/2 flex flex-col items-end">
                <input
                  type="text"
                  placeholder="0"
                  className="w-full bg-transparent text-4xl font-extrabold focus:outline-none text-right"
                  style={{ borderBottom: '1px solid #E0E0E0' }}
                />
                <div className="flex space-x-2 mt-2">
                  <button className="text-sm text-gray-600 hover:underline">Half</button>
                  <button className="text-sm text-gray-600 hover:underline">Max</button>
                </div>
              </div>
            </div>

            {/* Swap Icon */}
            <div className="flex justify-center my-2">
              <SwapUpDownIcon />
            </div>

            {/* Second Token Input */}
            <div className="rounded-2xl p-4 flex justify-between items-center">
              {/* Token Selector and Available Balance (Left side) */}
              <div className="flex flex-col items-start">
                <TokenSelector token="ARCH" balance="0.00" />
              </div>

              {/* Input and Half/Max Buttons (Right side) */}
              <div className="w-1/2 flex flex-col items-end">
                <input
                  type="text"
                  placeholder="0"
                  className="w-full bg-transparent text-4xl font-extrabold focus:outline-none text-right"
                  style={{ borderBottom: '1px solid #E0E0E0' }}
                />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <button className="w-full bg-lime-500 text-white py-3 rounded-lg mt-6 font-bold text-lg hover:bg-lime-600 transition duration-300 shadow-lg">
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapInterface;
