import React from 'react';
import Image from 'next/image';

interface TokenSelectorProps {
  token: string;
  balance: string;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({ token, balance }) => (
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

export default TokenSelector;
