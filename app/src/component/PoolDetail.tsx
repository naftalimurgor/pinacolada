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
import InfoIcon from '../component/Icons/Info';

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
                borderColor: "#000000", 
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="p-6">
            <button onClick={onBack} className="text-blue-600 hover:underline mb-4">← Back</button>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                <div className="lg:col-span-1">
                    <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4 h-[50px]">
                            <div className="flex items-center space-x-2">
                                <div className="flex -space-x-1">
                                    {pool.imageUrls.slice(0, 2).map((url, index) => (
                                        <Image
                                            key={index}
                                            src={url}
                                            alt="Token logo"
                                            width={32}
                                            height={32}
                                            className="rounded-full border-2 border-white"
                                        />
                                    ))}
                                </div>
                                <h2 className="text-lg font-semibold text-gray-900">{pool.name}</h2>
                            </div>
                            <span className="bg-gray-100 text-gray-700 text-xs font-medium py-1 px-2 rounded-full flex items-center">
                                {pool.apr} APR <InfoIcon className="ml-1" />
                            </span>
                        </div>
                        <div className="grid grid-cols-3 divide-x divide-gray-200 text-center border border-gray-200 rounded-lg p-4 mt-4 mb-4">
                            <div className="flex flex-col items-center">
                                <p className="text-xs font-semibold text-gray-400">Fees</p>
                                <p className="text-lg font-medium text-gray-900">{pool.fees}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-xs font-semibold text-gray-400">Liquidity</p>
                                <p className="text-lg font-medium text-gray-900">{pool.liquidity}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-xs font-semibold text-gray-400">24 Volume</p>
                                <p className="text-lg font-medium text-gray-900">{pool.volume}</p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-lime-500 text-white px-4 py-2 rounded-lg font-semibold w-full mt-4">
                        Add Liquidity
                    </button>
                </div>
                <div className="lg:col-span-3 p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
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
                    <div className="overflow-hidden rounded-lg">
                        <Line
                            data={data}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: { display: false },
                                    tooltip: {
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        titleFont: { size: 12 },
                                        bodyFont: { size: 14 },
                                        padding: 10,
                                        displayColors: false,
                                    },
                                },
                                scales: {
                                    x: { grid: { display: false }, ticks: { font: { size: 12 } } },
                                    y: { grid: { color: "#E5E7EB" }, ticks: { font: { size: 12 } } }
                                },
                                elements: {
                                    point: {
                                        radius: 5,
                                        hoverRadius: 7,
                                        hoverBackgroundColor: '#4F46E5',
                                        borderWidth: 2,
                                        hitRadius: 10,
                                        pointStyle: 'circle',
                                    }
                                },
                                onHover: (event, chartElement) => {
                                    const target = event.native?.target as HTMLCanvasElement;
                                    if (target) {
                                        target.style.cursor = chartElement[0] ? 'pointer' : 'default';
                                    }
                                }
                            }}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PoolDetail;