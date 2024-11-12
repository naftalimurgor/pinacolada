import React from 'react';
import TokenSelector from '@/component/TokenSelector';

type TokenInputProps = {
  token: string;
  availableAmount: string;
  onTokenChange: (newToken: string) => void;
};

const TokenInputBottom: React.FC<TokenInputProps> = ({ token, onTokenChange }) => {
  return (
    <div className="rounded-2xl p-4 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <TokenSelector token={token} onTokenChange={onTokenChange} />
      </div>
      <div className="w-3/4 flex flex-col items-end ml-1">
        <input
          type="text"
          placeholder="0"
          className="w-full bg-transparent text-2xl focus:outline-none text-right  rounded-lg p-2 h-15 placeholder-black"
        />
      </div>
    </div>
  );
};

export default TokenInputBottom;
