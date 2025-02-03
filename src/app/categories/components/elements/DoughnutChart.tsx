'use client';

import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

export const DoughnutChart = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const context = chartRef.current.getContext('2d');

            // Hapus instance chart sebelumnya (jika ada)
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            // Inisialisasi chart baru
            chartInstance.current = new Chart(context!, {
                type: 'doughnut',
                data: {
                    labels: ['Donations'],
                    datasets: [
                        {
                            label: 'Donation Progress',
                            data: [75, 25], // Donated 75% of total
                            backgroundColor: [
                                'rgb(90, 190, 230)',
                                'lightgray'],
                            hoverOffset: 4,
                        },
                    ],
                },
                options: {
                    responsive: true, // Skalabilitas chart
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            });

            // Cleanup saat unmount
            return () => {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }
            };
        }
    }, []);

    return (
        <div className="relative w-80 h-80">
            <canvas ref={chartRef} />
        </div>
    );
};
