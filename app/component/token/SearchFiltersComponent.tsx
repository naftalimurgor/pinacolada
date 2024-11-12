import React from 'react';

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchFiltersComponent: React.FC<SearchFiltersProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="col-span-1">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 Search for name or ticker"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-600">Balance</label>
        <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <option>Any</option>
          <option>High to Low</option>
          <option>Low to High</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-600">Price</label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="From"
            className="w-1/2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            style={{
              appearance: 'textfield',
              WebkitAppearance: 'none',
              MozAppearance: 'textfield',
            }}
          />
          <input
            type="number"
            placeholder="To"
            className="w-1/2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            style={{
              appearance: 'textfield',
              WebkitAppearance: 'none',
              MozAppearance: 'textfield',
            }}
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-600">TVL</label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="From"
            className="w-1/2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            style={{
              appearance: 'textfield',
              WebkitAppearance: 'none',
              MozAppearance: 'textfield',
            }}
          />
          <input
            type="number"
            placeholder="To"
            className="w-1/2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            style={{
              appearance: 'textfield',
              WebkitAppearance: 'none',
              MozAppearance: 'textfield',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFiltersComponent;
