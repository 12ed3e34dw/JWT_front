'use client';

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useStats, Range } from '@/Statistic/Logics';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

interface StatsChartProps {
    userId: string;
    apiBaseUrl?: string;
}

export default function StatsChart({ userId, apiBaseUrl }: StatsChartProps) {
    const { data, error, isLoading, range, setRange } = useStats(userId, apiBaseUrl);

    if (error) return <div className="text-red-500 text-center">Ошибка загрузки данных 😢</div>;
    if (isLoading || !data) return <div className="text-gray-400 text-center">Загрузка...</div>;

    const categories = data.categories;
    const values = categories.map((c) => data.data[c] || 0);

    const chartData = {
        labels: categories,
        datasets: [
            {
                label: 'XP',
                data: values,
                backgroundColor: categories.map((c) =>
                    c === 'writing' ? '#EF4444' : c === 'speaking' ? '#22C55E' : '#EAB308'
                ),
                borderRadius: 10,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context: any) => `${context.parsed.y} xp`,
                },
            },
            datalabels: {
                color: '#fff',
                anchor: 'end' as const,
                align: 'end' as const,
                formatter: (value: number) => `${value} xp`,
                font: { size: 11, weight: 'bold' as const },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 5 },
                grid: { color: 'rgba(200,200,200,0.2)' },
            },
            x: { grid: { display: false } },
        },
    };

    return (
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg w-full max-w-lg mx-auto">
            <Bar data={chartData} options={options} />

            {/* Кнопки диапазонов */}
            <div className="flex justify-center gap-2 mt-4">
                {([
                    { key: 'today', label: 'Today' },
                    { key: '7', label: '7 days' },
                    { key: '30', label: '30 days' },
                    { key: 'all', label: 'All time' },
                ] as { key: Range; label: string }[]).map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setRange(key)}
                        className={`px-3 py-1 rounded border ${
                            range === key ? 'bg-blue-500 text-white' : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}
