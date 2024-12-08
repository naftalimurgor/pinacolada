'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { CircleIcon,SwapLeftRightIcon , WaterDropIcon} from '@/component/Icons';

function Tabs() {
    const pathname = usePathname();

    return (
        <div className="flex items-center space-x-4 text-white text-sm">
            <Link href="/token">
                <button
                    className={`px-6 py-3 rounded-full flex items-center justify-center border transition-all duration-300 ease-in-out ${pathname === '/token'
                        ? 'bg-white text-black border-white shadow-md'
                        : 'bg-white bg-opacity-10 text-white border-transparent opacity-50'
                        }`}
                    style={{ width: '120px' }}
                >
                    <CircleIcon className={`${pathname === '/token' ? 'text-black' : 'text-white'}`} />
                    <span className={`ml-2 ${pathname === '/token' ? 'text-black' : 'text-white'}`}>Tokens</span>
                </button>
            </Link>
            <Link href="/swap">
                <button
                    className={`px-6 py-3 rounded-full flex items-center justify-center border transition-all duration-300 ease-in-out ${pathname === '/swap'
                        ? 'bg-white text-black border-white shadow-md'
                        : 'bg-white bg-opacity-10 text-white border-transparent opacity-50'
                        }`}
                    style={{ width: '120px' }}
                >
                    <SwapLeftRightIcon className={`${pathname === '/swap' ? 'text-black' : 'text-white'}`} />
                    <span className={`ml-2 ${pathname === '/swap' ? 'text-black' : 'text-white'}`}>Swap</span>
                </button>
            </Link>
            <Link href="/pools">
                <button
                    className={`px-6 py-3 rounded-full flex items-center justify-center border transition-all duration-300 ease-in-out ${pathname === '/pools'
                        ? 'bg-white text-black border-white shadow-md'
                        : 'bg-white bg-opacity-10 text-white border-transparent opacity-50'
                        }`}
                    style={{ width: '120px' }}
                >
                    <WaterDropIcon className={`${pathname === '/pools' ? 'text-black' : 'text-white'}`} />
                    <span className={`ml-2 ${pathname === '/pools' ? 'text-black' : 'text-white'}`}>Pools</span>
                </button>
            </Link>
        </div>
    );
}

export default Tabs;
