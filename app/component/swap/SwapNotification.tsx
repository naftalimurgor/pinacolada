import React from 'react';
import { AiOutlineLoading3Quarters, AiOutlineCheck } from 'react-icons/ai';

interface SwapNotificationProps {
  onDismiss: () => void;
  status: 'waiting' | 'success';
}

const SwapNotification: React.FC<SwapNotificationProps> = ({ onDismiss, status }) => {
  const isWaiting = status === 'waiting';

  return (
    <div className="max-w-xs mx-auto p-6 bg-white rounded-2xl shadow-lg text-center">
      <div className="flex justify-center items-center mb-4">
        {isWaiting ? (
          <AiOutlineLoading3Quarters className="w-8 h-8 text-gray-500 animate-spin" />
        ) : (
          <AiOutlineCheck className="w-8 h-8 text-green-500" />
        )}
      </div>
      <h2 className="text-xl font-semibold text-gray-800">
        {isWaiting ? 'Connecting...' : 'Cheers!'}
      </h2>
      <p className="text-xl font-semibold text-gray-800">
        {isWaiting ? 'Please wait while we connect...' : 'Swap Successful!'}
      </p>
      <p className="text-gray-500 mt-2">
        {isWaiting
          ? 'This might take a few seconds.'
          : 'Your swap went through and your token balances have been updated accordingly.'}
      </p>
      <hr className="my-4 border-gray-300" />
      <button
        onClick={onDismiss}
        className="text-black font-semibold hover:underline"
      >
        {isWaiting ? 'Cancel' : 'Dismiss'}
      </button>
    </div>
  );
};

export default SwapNotification;
