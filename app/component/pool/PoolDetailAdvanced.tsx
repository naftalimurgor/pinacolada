"use client"
import React, { useState } from "react";
import LiquidityChart from "./LiquidityChart";
import PoolInfoAdvanced from "./PoolInfoAdvanced";
import PoolBalance from "./PoolBalance";
import AddLiquidityModal from "./AddLiquidityModal";

interface PoolDetailProps {
    pool: {
        name: string;
        apr: string;
        liquidity: string;
        fees: string;
        volume: string;
        imageUrls: string[];
    };
    onBack: () => void;
}

const PoolDetailAdvanced: React.FC<PoolDetailProps> = ({ pool, onBack }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAddLiquidity = () => {
        console.log("Liquidity added");
        setModalOpen(false); 
    };

    return (
        <div className="p-6">
            <button onClick={onBack} className="flex items-center px-4 py-2 text-black font-semibold bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                <span className="mr-1">←</span> Back
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
                <div className="lg:col-span-1">
                    <PoolInfoAdvanced
                        pool={{
                            name: "Sample Pool",
                            apr: "5.4%",
                            fees: "$120",
                            liquidity: "$500,000",
                            volume: "$200,000",
                            imageUrls: [
                                "/archipelago.png",
                                "/archipelago.png"
                            ],
                            rewards: [
                                { token: "Token 1", amount: "10", imageUrl: '/archipelago.png' },
                                { token: "Token 2", amount: "20", imageUrl: '/archipelago.png' }
                            ]
                        }} onAddLiquidity={() => setModalOpen(true)} />
                </div>
                <div className="lg:col-span-3">
                    <PoolBalance
                        balance="1.15"
                        tokens={[
                            { name: 'ARCH', symbol: 'ARCH', amount: '12', imageUrl: '/archipelago.png' },
                            { name: 'AXV', symbol: 'AXV', amount: '12', imageUrl: '/archipelago.png' },
                        ]}
                    />
                    <LiquidityChart />
                </div>
                <AddLiquidityModal 
                    isOpen={isModalOpen} 
                    onClose={() => setModalOpen(false)} 
                    onAddLiquidity={handleAddLiquidity} 
                />
            </div>
        </div>
    );
};

export default PoolDetailAdvanced;
