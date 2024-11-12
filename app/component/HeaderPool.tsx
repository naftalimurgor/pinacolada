'use client';

import React from 'react';
import HeaderContent from './HeaderContent';

const HeaderPool: React.FC = () => {
    return (
        <div>
            <div
                className="relative p-8 rounded-t-3xl"
                style={{
                    width: '99%',
                    height: '300px',
                    top: '8px',
                    left: '8px',
                    gap: '14px',
                    borderRadius: '16px',
                    backgroundImage: 'url(/sky.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <HeaderContent />


                <div className="flex justify-between items-center px-8 py-20">
                    {/* Left Section: Piña Colada Title */}
                    <div className="flex flex-col items-start">
                        <h1 className="text-3xl font-bold text-white">Piña Colada</h1>
                        <h2 className="text-2xl font-bold text-green-400">POOLS</h2>
                    </div>

                    {/* Center Section: Liquidity and Volume */}
                    <div className="flex space-x-16 text-center"  style={{marginRight: '650px'}}>
                        <div>
                            <p className="text-4xl font-bold text-white">$75,624,989</p>
                            <p className="text-md text-gray-200">Total Liquidity</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-white">$2,782,698</p>
                            <p className="text-md text-gray-200">24h Volume</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-white">$2,782,698</p>
                            <p className="text-md text-gray-200">Total Volume</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeaderPool;
