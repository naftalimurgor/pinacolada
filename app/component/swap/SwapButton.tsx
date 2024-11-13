import React from 'react';

interface SwapButtonProps {
  onClick: () => void;
}

const SwapButton: React.FC<SwapButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[480px] bg-[#ADFF00] text-black py-3 rounded-lg mt-6 font-bold text-lg hover:bg-lime-600 transition duration-300 shadow-lg"
    >
      Swap
    </button>
  );
};

export default SwapButton;
