import React from 'react';
import XIcon from '../Icons/XIcon';
import TokenSelector from '../TokenSelector';

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
                        <TokenSelector token="ARCH" onTokenChange={(newToken) => console.log("Token changed to:", newToken)}  />
                        <span className="text-xs text-gray-400 mt-1">
                            Available: 144,950.00
                        </span>
                    </div>

                    {/* Input and Half/Max Buttons (Right side) */}
                    <div className="w-1/2 flex flex-col items-end">
                        <input
                            type="text"
                            placeholder="0"
                            className="w-full bg-transparent text-lg font-medium text-gray-800 text-right border border-gray-200 rounded-lg p-2 h-15 placeholder-gray-400 focus:outline-none"
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
                    <div className="w-1/2 flex flex-col items-end">
                        <input
                            type="text"
                            placeholder="0"
                            className="w-full bg-transparent text-2xl focus:outline-none text-right border border-gray-300 rounded-lg p-2 h-15 placeholder-black"
                        />
                        <div className="flex space-x-2 mt-2">
                            <button className="text-sm text-gray-600 hover:underline">Half</button>
                            <button className="text-sm text-gray-600 hover:underline">Max</button>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 mt-4">
                    <div className="flex justify-between text-sm text-gray-700">
                        <span>Pool Ratio</span>
                        <span>1:1</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700">
                        <span>My Liquidity</span>
                        <span>$1,000</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700">
                        <span>Combined APR</span>
                        <span>18%</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700">
                        <span>Combined APR</span>
                        <span>18%</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700">
                        <span>Combined APR</span>
                        <span>18%</span>
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button onClick={onClose} className="text-gray-600 font-semibold">Cancel</button>
                    <button className="px-4 py-2 font-semibold text-black font-semibold bg-[#ADFF00] rounded-lg">Add Liquidity</button>
                </div>
            </div>
        </div>
    );
};

export default AddLiquidityModal;