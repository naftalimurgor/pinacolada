import React from 'react';
import Tabs from '../Tabs';
import UnionIcon from '../Icons/Union';
import Link from 'next/link';


const HeaderContent: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-white font-extrabold text-lg flex items-center justify-center lg:justify-start w-full lg:w-auto">
                <Link href='/'>
                    <UnionIcon />
                </Link>
            </div>
            <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-center">
                <Tabs />
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4 text-black w-full lg:w-auto justify-center lg:justify-end">
                <div className="text-right hidden sm:block">
                    <span className="block text-xs lg:text-sm font-semibold">Wallet Name</span>
                    <span className="block text-xs text-gray-500">archway1akqp...8g3xu</span>
                </div>
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold">
                    AC
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;
