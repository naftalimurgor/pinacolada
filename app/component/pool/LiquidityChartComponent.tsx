import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LiquidityChartComponentProps {
    chartData: { date: string, liquidity: number }[];
}

const LiquidityChartComponent: React.FC<LiquidityChartComponentProps> = ({ chartData }) => {
    return (
        <div className="overflow-hidden rounded-lg">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff' }} />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Line
                        type="monotone"
                        dataKey="liquidity"
                        stroke="#000000"
                        strokeWidth={2}
                        dot={{ r: 5, fill: '#4F46E5', strokeWidth: 2 }}
                        activeDot={{ r: 7, fill: '#4F46E5', strokeWidth: 2 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LiquidityChartComponent;
