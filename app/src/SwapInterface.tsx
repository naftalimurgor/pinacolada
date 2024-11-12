'use client';

import React, { useState } from 'react';

import { HeaderContent } from '@/component/Header';
import { SlippageModal, SwapButton, TokenInput } from '@/component/swap';
import { SliderIcon, SwapUpDownIcon } from '@/component/Icons';


const SwapInterface = () => {
  const [slippageOpen, setSlippageOpen] = useState(false);
  const [customSlippage, setCustomSlippage] = useState('');

  const handleSlippageSelect = (value: string) => {
    setCustomSlippage(value);
    setSlippageOpen(false);
  };

  return (
    <div
      className="relative w-full h-screen font-sans"
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
      <div className="relative p-8 rounded-t-3xl">
        <HeaderContent />
      </div>
      <div className={`relative z-10 flex flex-col items-center justify-center ${slippageOpen ? 'mt-6' : 'mt-0'}`}>
        <div className="relative z-10 flex justify-between items-center px-8 mb-6">
          <h2 className="text-4xl font-extrabold tracking-wide text-white">
            SWAP <span className="text-[#ADFF00]">TOKENS</span>
          </h2>
          <button onClick={() => setSlippageOpen(true)} className="p-2">
            <SliderIcon />
          </button>
        </div>

        <SlippageModal
          isOpen={slippageOpen}
          onClose={() => setSlippageOpen(false)}
          customSlippage={customSlippage}
          onCustomSlippageChange={setCustomSlippage}
          onSlippageSelect={handleSlippageSelect}
        />
        <div
          className={`bg-white rounded-2xl shadow-xl p-8 w-[480px] ${slippageOpen ? 'mt-6' : ''}`}
        >
          <div className="space-y-6">
            <TokenInput token="ATOM" availableAmount="144,950.00" onTokenChange={(newToken) => console.log("Token changed to:", newToken)} />
            <div className="flex justify-center my-2 relative">
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-px bg-gray-300"></div>
              <button className="bg-white p-2 w-12 h-12 flex items-center justify-center rounded-lg shadow-md relative z-1">
                <SwapUpDownIcon />
              </button>
            </div>
            <TokenInput token="ARCH" availableAmount="0.00" onTokenChange={(newToken) => console.log("Token changed to:", newToken)} />
          </div>
        </div>
        <SwapButton />
      </div>
    </div>
  );
};

export default SwapInterface;