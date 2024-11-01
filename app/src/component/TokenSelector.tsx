import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

interface Token {
  name: string;
  imageUrl: string;
}

interface TokenSelectorProps {
  token: string;
  balance:string;
  onTokenChange: (newToken: string) => void;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({ token, onTokenChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  // Sample token data
  const tokens: Token[] = [
    { name: 'Bitcoin', imageUrl: '/cosmos.png' },
    { name: 'Ethereum', imageUrl: '/cosmos.png' },
    { name: 'Cardano', imageUrl: '/cosmos.png' },
    { name: 'Solana', imageUrl: '/cosmos.png' },
    { name: 'ARCH', imageUrl: '/archipelago.png' },

  ];

  const handleTokenClick = (token: Token) => {
    setSelectedToken(token);
    onTokenChange(token.name); 
    setIsOpen(false); 
  };

  return (
    <div className="relative w-36">
      <div
        className="flex items-center space-x-2 rounded-lg px-4 py-2 bg-white border border-gray-300 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedToken ? (
          <Image src={selectedToken.imageUrl} alt={selectedToken.name} width={22} height={22} className="rounded-full" />
        ) : (
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        )}
        <input
          type="text"
          value={selectedToken ? selectedToken.name : 'Select token'}
          readOnly
          className="font-semibold bg-transparent focus:outline-none cursor-pointer"
        />
        <FaChevronDown />
      </div>

      {/* Dropdown list */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {tokens.map((t, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleTokenClick(t)}
            >
              <Image src={t.imageUrl} alt={t.name} width={22} height={22} className="rounded-full" />
              <span className="font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenSelector;
