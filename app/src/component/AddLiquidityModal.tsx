import React from 'react';
import XIcon from './Icons/XIcon';
import Image from 'next/image';

interface AddLiquidityModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddLiquidityModal: React.FC<AddLiquidityModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            <div className="relative z-10 w-1/3 bg-white h-full shadow-lg p-6" style={{ minWidth: '320px' }}>
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

                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Image src="/archipelago.png" alt="ARCH" width={24} height={24} />
                        <input className="border rounded-lg px-3 py-2 w-full" type="number" placeholder="0" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image src="/archipelago.png" alt="AXV" width={24} height={24} />
                        <input className="border rounded-lg px-3 py-2 w-full" type="number" placeholder="0" />
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
                    <button className="px-4 py-2 font-semibold text-white bg-[#ADFF00] rounded-lg">Add Liquidity</button>
                </div>
            </div>
        </div>
    );
};

export default AddLiquidityModal;
