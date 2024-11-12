"use client"

import React, { useState } from 'react';
import ChartButtons from './ChartButtons';
import LiquidityChartComponent from './LiquidityChartComponent';

const LiquidityChart: React.FC = () => {
    const data7Days = [
        { date: "28/07/2023", liquidity: 120 },
        { date: "29/07/2023", liquidity: 150 },
        { date: "30/07/2023", liquidity: 200 },
        { date: "31/07/2023", liquidity: 180 },
        { date: "01/08/2023", liquidity: 220 },
        { date: "02/08/2023", liquidity: 160 },
    ];

    const data30Days = [
        { date: "01/07/2023", liquidity: 100 },
        { date: "02/07/2023", liquidity: 130 },
        { date: "03/07/2023", liquidity: 180 },
        { date: "04/07/2023", liquidity: 160 },
        { date: "05/07/2023", liquidity: 210 },
        { date: "06/07/2023", liquidity: 190 },
        { date: "07/07/2023", liquidity: 170 },
        { date: "08/07/2023", liquidity: 220 },
        { date: "09/07/2023", liquidity: 180 },
        { date: "10/07/2023", liquidity: 200 },
        { date: "11/07/2023", liquidity: 210 },
        { date: "12/07/2023", liquidity: 240 },
        { date: "13/07/2023", liquidity: 220 },
        { date: "14/07/2023", liquidity: 230 },
        { date: "15/07/2023", liquidity: 240 },
        { date: "16/07/2023", liquidity: 250 },
        { date: "17/07/2023", liquidity: 230 },
        { date: "18/07/2023", liquidity: 200 },
        { date: "19/07/2023", liquidity: 210 },
        { date: "20/07/2023", liquidity: 220 },
        { date: "21/07/2023", liquidity: 230 },
        { date: "22/07/2023", liquidity: 240 },
        { date: "23/07/2023", liquidity: 250 },
        { date: "24/07/2023", liquidity: 220 },
        { date: "25/07/2023", liquidity: 210 },
        { date: "26/07/2023", liquidity: 230 },
        { date: "27/07/2023", liquidity: 240 },
        { date: "28/07/2023", liquidity: 230 },
    ];

    const data90Days = [
        { date: "01/05/2023", liquidity: 100 },
        { date: "02/05/2023", liquidity: 120 },
        { date: "03/05/2023", liquidity: 130 },
        { date: "04/05/2023", liquidity: 140 },
        { date: "05/05/2023", liquidity: 150 },
        { date: "06/05/2023", liquidity: 160 },
        { date: "30/07/2023", liquidity: 220 },
        { date: "01/08/2023", liquidity: 200 },
        { date: "02/08/2023", liquidity: 180 },
    ];

    const [selectedTime, setSelectedTime] = useState('7 Days');
    const [chartData, setChartData] = useState(data7Days);

    const handleSelectChange = (value: string) => {
        setSelectedTime(value);

        if (value === '7 Days') {
            setChartData(data7Days);
        } else if (value === '30 Days') {
            setChartData(data30Days);
        } else if (value === '90 Days') {
            setChartData(data90Days);
        }
    };

    return (
        <div>
            <ChartButtons selectedTime={selectedTime} onTimeChange={handleSelectChange} />
             <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
             
             <LiquidityChartComponent chartData={chartData} />
             </div>
          
        </div>
    );
};

export default LiquidityChart;
