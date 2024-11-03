import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LiquidityChart: React.FC = () => {
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
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4">
                    <button className="flex items-center px-6 py-3 text-black font-semibold bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">Volume</button>
                    <button className="text-gray-500 font-semibold">Liquidity</button>
                </div>
                <select className="text-gray-500 border rounded-lg p-2">
                    <option>7 Days</option>
                    <option>30 Days</option>
                    <option>90 Days</option>
                </select>
            </div>
            <div className="overflow-hidden rounded-lg">
                <Line data={data} options={{
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
                }} />
            </div>
        </div>
    );
};

export default LiquidityChart;
