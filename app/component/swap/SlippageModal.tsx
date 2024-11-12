import React from 'react';
import { XIcon } from '@/component/Icons';

type SlippageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  customSlippage: string;
  onCustomSlippageChange: (value: string) => void;
  onSlippageSelect: (value: string) => void;
};

const SlippageModal: React.FC<SlippageModalProps> = ({
  isOpen,
  onClose,
  customSlippage,
  onCustomSlippageChange,
  onSlippageSelect
}) => {
  if (!isOpen) return null;

  return (
    <div className="relative z-20 w-[480px] bg-white rounded-2xl shadow-lg p-6 transition-all ease-in-out duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Slippage Tolerance</h3>
        <button onClick={onClose}>
          <XIcon />
        </button>
      </div>
      <div className="flex space-x-2 mb-4">
        {['2%', '3%', '4%'].map((value) => (
          <button
            key={value}
            className="flex-1 py-2 border rounded-lg hover:bg-gray-100"
            onClick={() => onSlippageSelect(value)}
          >
            {value}
          </button>
        ))}
        <button
          className="flex-1 py-2 border rounded-lg hover:bg-gray-100"
          onClick={() => onSlippageSelect('')}
        >
          Custom
        </button>
      </div>
      <input
        type="text"
        value={customSlippage}
        onChange={(e) => onCustomSlippageChange(e.target.value)}
        placeholder="Custom slippage amount"
        className="w-full p-2 border rounded-lg"
      />
    </div>
  );
};

export default SlippageModal;
