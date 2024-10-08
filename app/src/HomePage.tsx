"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import PinaColadaInfoOverlay from './PinaColadaInfoOverlay';
import NavigationBar from './component/NavigationBar';
import { useRouter } from 'next/navigation'; 

const HomePage: React.FC = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const router = useRouter();

  const handleMenuBarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOverlayOpen(true);
  };

  const handleButtonClick = () => {
    router.push('/token'); 
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/pinacoladaisland.png"
          layout="fill"
          objectFit="cover"
          alt="Pina Colada Island"
        />
      </div>

      <NavigationBar onMenuClick={handleMenuBarClick} />

      <div className="relative z-1 flex flex-col items-center justify-between h-full text-center">
        <div className="flex flex-col items-center justify-center h-full">
          <span className="block text-5xl font-extrabold text-[#b8ff4f]">
            Welcome to
          </span>
          <div className="relative inline-block text-[7vw] font-extrabold text-white">
            PIÑA COLADA
            <span className="absolute right-0 -bottom-10 text-[5vw] text-[#b8ff4f]">
              ISLAND
            </span>
            <div className="absolute left-0 -bottom-16 text-base text-white text-left">
              <span>Your favourite DEX</span>
              <br />
              <span>with a Caribbean flavour</span>
            </div>
          </div>
        </div>
        <div className="mb-40">
          <button
            onClick={handleButtonClick}
            className="px-8 py-3 text-lg font-bold text-black bg-white rounded-[8px] shadow-lg hover:bg-[#e6b805] transition duration-300"
          >
            Enter the &apos;DEX&apos; ISLAND
          </button>
        </div>
      </div>

      <PinaColadaInfoOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
      />
    </div>
  );
};

export default HomePage;
