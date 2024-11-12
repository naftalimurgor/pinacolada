import React from 'react';

interface ChartButtonsProps {
    selectedTime: string;
    onTimeChange: (value: string) => void;
}

const ChartButtons: React.FC<ChartButtonsProps> = ({ selectedTime, onTimeChange }) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
                <button className="flex items-center px-6 py-3 text-black font-semibold bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">Volume</button>
                <button className="text-gray-500 font-semibold">Liquidity</button>
            </div>
            <select
                className="text-gray-500 border rounded-lg p-2"
                value={selectedTime}
                onChange={(e) => onTimeChange(e.target.value)}
            >
                <option>7 Days</option>
                <option>30 Days</option>
                <option>90 Days</option>
            </select>
        </div>
    );
};

export default ChartButtons;
