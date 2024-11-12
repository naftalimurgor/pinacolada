import React, { useState } from "react";
import PoolInfo from "./PoolInfo";
import LiquidityChart from "./LiquidityChart";
import AddLiquidityModal from "./AddLiquidityModal";
import PoolDetailAdvanced from "./PoolDetailAdvanced";

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

const PoolDetail: React.FC<PoolDetailProps> = ({ pool, onBack }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [showAdvanced, setShowAdvanced] = useState(false);

    const handleAddLiquidity = () => {
        setShowAdvanced(true);
        setModalOpen(false);
    };

    if (showAdvanced) {
        return <PoolDetailAdvanced pool={pool} onBack={onBack} />;
    }
    return (
        <div className="p-6">
            <button onClick={onBack} className="flex items-center px-4 py-2 text-black font-semibold bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                <span className="mr-1">←</span> Back
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
                <div className="lg:col-span-1">
                    <PoolInfo pool={pool} onAddLiquidity={() => setModalOpen(true)} />
                </div>
                <div className="lg:col-span-3">
                    <LiquidityChart />
                </div>
            </div>
            <AddLiquidityModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddLiquidity={handleAddLiquidity} />
        </div>
    );
};

export default PoolDetail;
