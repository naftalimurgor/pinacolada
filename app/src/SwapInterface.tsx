'use client';

import React, { useState } from 'react';

import { HeaderContent } from '@/component/Header';
import TokenSelector from '@/component/TokenSelector';
import { SliderIcon, XIcon, SwapUpDownIcon } from '@/component/Icons';

const SwapInterface = () => {
  const [slippageOpen, setSlippageOpen] = useState(false);
  const [customSlippage, setCustomSlippage] = useState('');

  return (
    <div className="relative w-full h-screen font-sans"
      style={{
        width: '99%',
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

        <div className="bg-white rounded-2xl shadow-xl p-8 w-[480px]">
          <div className="space-y-6">
            <div className="rounded-2xl p-4 flex justify-between items-center">
              <div className="flex flex-col items-start">
                <TokenSelector token="ATOM" onTokenChange={(newToken) => console.log("Token changed to:", newToken)} />
                <span className="text-sm text-gray-500 mt-1">
                  Available: 144,950.00
                </span>
              </div>
              <div className="w-1/2 flex flex-col items-end">
                <input
                  type="text"
                  placeholder="0"
                  className="w-full bg-transparent text-2xl focus:outline-none text-right border border-gray-300 rounded-lg p-2 h-10 placeholder-black"
                />
                <div className="flex space-x-2 mt-2">
                  <button className="text-sm text-gray-600 hover:underline">Half</button>
                  <button className="text-sm text-gray-600 hover:underline">Max</button>
                </div>
              </div>
            </div>

            <div className="flex justify-center my-2 relative">
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-px bg-gray-300"></div>
              <button
                className="bg-white p-2 w-12 h-12 flex items-center justify-center rounded-lg shadow-md relative z-1"
                style={{
                  width: '48px',
                  height: '48px',
                  padding: '0 16px',
                  borderRadius: '8px',
                }}
              >
                <SwapUpDownIcon />
              </button>
            </div>

            {/* Second Token Input */}
            <div className="rounded-2xl p-4 flex justify-between items-center">
              {/* Token Selector and Available Balance (Left side) */}
              <div className="flex flex-col items-start">
                <TokenSelector token="ARCH" onTokenChange={(newToken) => console.log("Token changed to:", newToken)} />
                <span className="text-sm text-gray-500 mt-1">
                  Available: 0.00
                </span>
              </div>

              {/* Input and /Max Buttons (Right side) */}
              <div className="w-1/2 flex flex-col items-end">
                <input
                  type="text"
                  placeholder="0"
                  className="w-full bg-transparent text-2xl focus:outline-none text-right  rounded-lg p-2 h-10 placeholder-black"
                />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <button className="w-full bg-lime-500 text-black py-3 rounded-lg mt-6 font-bold text-lg hover:bg-lime-600 transition duration-300 shadow-lg">
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapInterface;
