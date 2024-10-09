import React from 'react';
import Tabs from './Tabs'; 
import UnionIcon from './Icons/Union'; 

const HeaderContent: React.FC = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="text-white font-extrabold text-lg">
                <UnionIcon />
            </div>

            <Tabs />

            <div className="text-black flex items-center space-x-4">
                <div className="text-right">
                    <span className="block text-sm font-semibold">Wallet Name</span>
                    <span className="block text-xs text-gray-500">archway1akqp...8g3xu</span>
                </div>
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold">
                    AC
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;
