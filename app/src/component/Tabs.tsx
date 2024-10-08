'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Tabs() {
    const pathname = usePathname();

    return (
        <div className="flex items-center space-x-6 text-white text-sm bg-black">
            <Link href="/token">
                <button
                    className={`px-6 py-3 rounded-full flex items-center justify-center border ${
                        pathname === '/token'
                            ? 'bg-white text-black border-black' 
                            : 'bg-transparent text-white border-transparent opacity-50' 
                    }`}
                >
                    {pathname === '/token' && (
                        <span className="w-4 h-4 mr-2 rounded-full border border-black" />
                    )}
                    Tokens
                </button>
            </Link>

            <Link href="/swap">
                <button
                    className={`px-6 py-3 rounded-full flex items-center justify-center border ${
                        pathname === '/swap'
                            ? 'bg-white text-black border-black' 
                            : 'bg-transparent text-white border-transparent opacity-50' 
                    }`}
                >
                    {pathname === '/swap' && (
                        <span className="w-4 h-4 mr-2 rounded-full border border-black" />
                    )}
                    Swap
                </button>
            </Link>

            <Link href="/pools">
                <button
                    className={`px-6 py-3 rounded-full flex items-center justify-center border ${
                        pathname === '/pools'
                            ? 'bg-white text-black border-black' 
                            : 'bg-transparent text-white border-transparent opacity-50' 
                    }`}
                >
                    {pathname === '/pools' && (
                        <span className="w-4 h-4 mr-2 rounded-full border border-black" />
                    )}
                    Pools
                </button>
            </Link>
        </div>
    );
}

export default Tabs;
