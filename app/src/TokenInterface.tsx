
'use client';

import React, { useState, useEffect } from 'react';

import { HeaderComponent, SearchFiltersComponent, TokenTableComponent } from '@/component/token';


const TokenInterface: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSmallHeader, setShowSmallHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSmallHeader(true);
      } else {
        setShowSmallHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tokens = [
    {
      asset: 'ARCH',
      balance: '9644',
      price: '$100',
      percentage: '10%',
      tvl: '$18,901.00',
      volume: '$18,901.00',
      imageUrl: '/archipelago.png',
    },
    {
      asset: 'AXV',
      balance: '9644',
      price: '$100',
      percentage: '10%',
      tvl: '$18,901.00',
      volume: '$18,901.00',
      imageUrl: '/cosmos.png',
    },
    {
      asset: 'ATOM',
      balance: '9644',
      price: '$100',
      percentage: '10%',
      tvl: '$18,901.00',
      volume: '$18,901.00',
      imageUrl: '/archipelago.png',
    },
  ];

  return (
    <div className="flex flex-col">
      <HeaderComponent showSmallHeader={showSmallHeader} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
        <div className="col-span-1">
          <SearchFiltersComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="col-span-3">
          <TokenTableComponent tokens={tokens} />
        </div>
      </div>

    </div>
  );
};

export default TokenInterface;
