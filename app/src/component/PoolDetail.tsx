import React from "react";
import Image from "next/image";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

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
    const data = {
        labels: ["28/07/2023", "29/07/2023", "30/07/2023", "31/07/2023", "01/08/2023", "02/08/2023"],
        datasets: [
            {
                label: "Liquidity",
                data: [120, 150, 200, 180, 220, 160],
                fill: false,
                borderColor: "#4F46E5",
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="p-6">
            <button onClick={onBack} className="text-blue-600 hover:underline mb-4">← Back</button>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                <div className="lg:col-span-1 p-6 bg-white rounded-lg shadow-md">
                    <div className="flex items-center mb-6">
                        <div className="flex -space-x-2 mr-4">
                            {pool.imageUrls.slice(0, 2).map((url, index) => (
                                <Image
                                    key={index}
                                    src={url}
                                    alt="Token logo"
                                    width={48}
                                    height={48}
                                    className="rounded-full border-2 border-white"
                                />
                            ))}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{pool.name}</h2>
                            <p className="text-sm text-gray-500">{pool.apr} APR</p>
                        </div>
                    </div>

                    <p className="text-gray-500 mb-2">Fees: {pool.fees}</p>
                    <p className="text-gray-500 mb-2">Liquidity: {pool.liquidity}</p>
                    <p className="text-gray-500 mb-6">24h Volume: {pool.volume}</p>

                    <button className="bg-lime-500 text-white px-4 py-2 rounded-lg font-semibold">
                        Add Liquidity
                    </button>
                </div>

                <div className="lg:col-span-3 p-6 bg-white rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex space-x-4">
                            <button className="text-blue-600 font-semibold">Volume</button>
                            <button className="text-gray-500 font-semibold">Liquidity</button>
                        </div>
                        <select className="text-gray-500 border rounded-lg p-2">
                            <option>7 Days</option>
                            <option>30 Days</option>
                            <option>90 Days</option>
                        </select>
                    </div>
                    <Line data={data} />
                </div>

            </div>
        </div>
    );
};

export default PoolDetail;
