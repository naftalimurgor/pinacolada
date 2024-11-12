import React from 'react';

import TokenSelector from '../TokenSelector';
import { InfoIcon, XIcon } from '@/component/Icons';

interface AddLiquidityModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddLiquidityModal: React.FC<AddLiquidityModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end p-3">
            <div className="relative z-10 w-1/3 bg-white h-full rounded-2xl shadow-lg p-6" >
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <XIcon />
                </button>
                <h2 className="text-xl font-bold mb-4">Add Liquidity to Pool</h2>
                <p className="text-sm text-gray-500 mb-4">Choose between Double Sided or Single Sided.</p>

                <div className="flex space-x-2 mb-6 bg-gray-100 p-1 rounded-lg">
                    <button className="flex-1 px-4 py-2 text-center font-semibold bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                        Double Sided
                    </button>
                    <button className="flex-1 px-4 py-2 text-center font-semibold text-gray-700 rounded-lg">
                        Single Sided
                    </button>
                </div>

                <div className="rounded-lg p-3 flex justify-between items-center bg-white">
                    {/* Token Selector and Available Balance (Left side) */}
                    <div className="flex flex-col items-start">
                        <TokenSelector token="ARCH" onTokenChange={(newToken) => console.log("Token changed to:", newToken)} />
                        <span className="text-xs text-gray-400 mt-1">
                            Available: 144,950.00
                        </span>
                    </div>

                    {/* Input and Half/Max Buttons (Right side) */}
                    <div className="w-3/4 flex flex-col items-end">
                        <input
                            type="text"
                            placeholder="0"
                            className="w-full bg-transparent text-2xl focus:outline-none text-right border border-gray-300 rounded-lg p-2 h-15 placeholder-black"
                        />
                        <div className="flex space-x-4 mt-1">
                            <button className="text-xs text-gray-400 hover:text-gray-600 focus:outline-none">Half</button>
                            <button className="text-xs text-gray-400 hover:text-gray-600 focus:outline-none">Max</button>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl p-4 flex justify-between items-center">
                    <div className="flex flex-col items-start">
                        <TokenSelector token="ATOM" onTokenChange={(newToken) => console.log("Token changed to:", newToken)} />
                        <span className="text-sm text-gray-500 mt-1">
                            Available: 144,950.00
                        </span>
                    </div>
                    <div className="w-3/4 flex flex-col items-end">
                        <input
                            type="text"
                            placeholder="0"
                            className="w-full bg-transparent text-2xl focus:outline-none text-right border border-gray-300 rounded-lg p-2 h-15 placeholder-black"
                        />
                        <div className="flex gap-0 mt-2">
                            <button className="text-sm text-gray-600 hover:underline">Half</button>
                            <button className="text-sm text-gray-600 hover:underline">Max</button>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-200 space-y-6 m-4 pb-6">
                    <div className="flex justify-between text-sm text-gray-700 border-b border-gray-200 pb-2 px-4 mt-4">
                        <span>Pool Ratio</span>
                        <span className="text-black font-bold">1.4888</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700 border-b border-gray-200 pb-2 px-4 mt-4">
                        <span>My Liquidity</span>
                        <span className="text-black font-bold">0</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700 border-b border-gray-200 pb-2 px-4 mt-4">
                        <span>My Share of Pool</span>
                        <span className="text-black font-bold">0%</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700 border-b border-gray-200 pb-2 px-4 mt-4">
                        <span>Combined APR</span>
                        <span className="text-black flex items-center font-bold">18% <InfoIcon className="ml-1 text-black font-bold" /></span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700 px-4">
                        <span>Staked LP Tokens</span>
                        <span className="text-black font-bold">0.00 ARCH-AXV-LP</span>
                    </div>
                </div>
                <div className="flex justify-end space-x-4 mt-auto mb-4 mr-4 mt-20">
                    <button onClick={onClose} className="text-gray-600 font-semibold">Cancel</button>
                    <button className="px-4 py-2 font-semibold text-black bg-[#ADFF00] rounded-lg">Add Liquidity</button>
                </div>


            </div>
        </div>
    );
};

export default AddLiquidityModal;
