import React from 'react';
import './FilterSidebar.css';

const FilterSidebar: React.FC = () => {
  return (
    <div className="w-full md:w-1/4 p-6 bg-white shadow-md rounded-lg space-y-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for name or ticker"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {/* Tokens Dropdown */}
      <div>
        <label className="block text-gray-700 text-sm mb-1">Tokens</label>
        <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="any">Any</option>
        </select>
      </div>

      {/* Pool Type Dropdown */}
      <div>
        <label className="block text-gray-700 text-sm mb-1">Pool Type</label>
        <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="any">Any</option>
        </select>
      </div>

      {/* Volume Input */}
      <div>
        <label className="block text-gray-700 text-sm mb-1">Volume</label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="From"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 no-spinner"
          />
          <input
            type="number"
            placeholder="To"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 no-spinner"
          />
        </div>
      </div>

      {/* Liquidity Input */}
      <div>
        <label className="block text-gray-700 text-sm mb-1">Liquidity</label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="From"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 no-spinner"
          />
          <input
            type="number"
            placeholder="To"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 no-spinner"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
