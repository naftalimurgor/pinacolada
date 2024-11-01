import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

interface Token {
    name: string;
    imageUrl: string;
    balance: string;
}

interface TokenSelectorProps {
    token: string;
    onTokenChange: (newToken: string) => void;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({ token, onTokenChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedToken, setSelectedToken] = useState<Token | null>(null);

    const tokens: Token[] = [
        { name: 'ARCH', imageUrl: '/archipelago.png', balance: '144,950.00' },
        { name: 'ATOM', imageUrl: '/cosmos.png', balance: '2.00' },
        { name: 'Bitcoin', imageUrl: '/cosmos.png', balance: '0.50' },
        { name: 'Ethereum', imageUrl: '/cosmos.png', balance: '5.25' },
        { name: 'Cardano', imageUrl: '/cosmos.png', balance: '10.00' },
    ];

    const filteredTokens = tokens.filter((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleTokenClick = (token: Token) => {
        setSelectedToken(token);
        onTokenChange(token.name);
        setIsOpen(false);
        setSearchQuery(""); 
    };

    return (
        <div className="relative w-full max-w-xs">
            <div
                className="flex items-center justify-between space-x-2 rounded-lg px-4 py-2 bg-white border border-gray-300 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedToken ? (
                    <Image src={selectedToken.imageUrl} alt={selectedToken.name} width={22} height={22} className="rounded-full" />
                ) : (
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                )}
                <span className="font-semibold">{selectedToken ? selectedToken.name : 'Select token'}</span>
                <FaChevronDown />
            </div>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4" style={{ width: '205%' }}>
                    <div className="flex items-center space-x-2 mb-4 px-3 py-2 bg-gray-100 rounded-lg">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent focus:outline-none text-center"
                        />
                        <FaSearch className="text-gray-400" />

                    </div>

                    <div className="max-h-60 overflow-y-auto space-y-2">
                        {filteredTokens.length > 0 ? (
                            filteredTokens.map((t, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between space-x-2 p-2 hover:bg-gray-100 cursor-pointer rounded-lg shadow-sm"
                                    onClick={() => handleTokenClick(t)}
                                >
                                    <div className="flex items-center space-x-2">
                                        <Image src={t.imageUrl} alt={t.name} width={22} height={22} className="rounded-full" />
                                        <span className="font-semibold">{t.name}</span>
                                    </div>
                                    <span className="text-gray-600">{t.balance}</span>
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500">No tokens found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TokenSelector;
