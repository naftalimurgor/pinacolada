import React from 'react';
import TokenSelector from '@/component/TokenSelector';

type TokenInputProps = {
    token: string;
    availableAmount: string;
    onTokenChange: (newToken: string) => void;
};

const TokenInput: React.FC<TokenInputProps> = ({ token, availableAmount, onTokenChange }) => {
    return (
        <div className="rounded-2xl p-4 flex justify-between items-center">
            <div className="flex flex-col items-start w-1/4">
                <TokenSelector token={token} onTokenChange={onTokenChange} />
                <span className="text-sm text-gray-500">
                    Available:{availableAmount}
                </span>
            </div>
            <div className="flex-1 flex flex-col items-end ml-2">
                <input
                    type="text"
                    placeholder="0"
                    className="w-full bg-transparent text-2xl focus:outline-none text-right border border-gray-300 rounded-lg p-2 h-12 placeholder-black"
                />
                <div className="flex space-x-2 mt-2">
                    <button className="text-sm text-gray-600 hover:underline">Half</button>
                    <button className="text-sm text-gray-600 hover:underline">Max</button>
                </div>
            </div>
        </div>


    );
};

export default TokenInput;
