import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertTriangle } from 'lucide-react';

export default function AnomalyDashboard() {
    const [data, setData] = useState([]);
    const [isAnomaly, setIsAnomaly] = useState(false);

    useEffect(() => {
        // Initialize with some data
        const initialData = Array.from({ length: 20 }, (_, i) => ({
            time: i,
            value: 40 + Math.random() * 20
        }));
        setData(initialData);

        const interval = setInterval(() => {
            setData(prevData => {
                const lastTime = prevData[prevData.length - 1].time;
                const newTime = lastTime + 1;

                // Simulate anomaly occasionally (5% chance)
                const isSpike = Math.random() > 0.95;
                const newValue = isSpike
                    ? 85 + Math.random() * 10 // Anomaly value
                    : 40 + Math.random() * 20; // Normal value

                if (isSpike) {
                    setIsAnomaly(true);
                    setTimeout(() => setIsAnomaly(false), 2000);
                }

                const newData = [...prevData.slice(1), { time: newTime, value: newValue }];
                return newData;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[300px] md:h-[400px] bg-slate-900 rounded-xl border border-slate-700 p-4 flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isAnomaly ? 'bg-red-500 animate-ping' : 'bg-green-500'}`}></div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Live Sensor Feed</span>
                </div>
                {isAnomaly && (
                    <div className="flex items-center gap-2 text-red-400 animate-pulse">
                        <AlertTriangle size={16} />
                        <span className="text-xs font-bold">ANOMALY DETECTED</span>
                    </div>
                )}
            </div>

            {/* Chart */}
            <div className="flex-grow w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
                        <XAxis dataKey="time" hide />
                        <YAxis domain={[0, 100]} hide />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }}
                            itemStyle={{ color: '#38bdf8' }}
                            labelStyle={{ display: 'none' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke={isAnomaly ? "#f87171" : "#38bdf8"}
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={false} // Disable animation for smooth real-time updates
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Legend/Context */}
            <div className="mt-4 flex justify-between items-end">
                <div className="text-[10px] text-slate-500 font-mono">
                    <div>SENSOR_ID: VIB-X99</div>
                    <div>SAMPLING: 1000ms</div>
                </div>
                <div className="flex gap-4 text-[10px] text-slate-400">
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-0.5 bg-sky-400"></span> Normal
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-0.5 bg-red-400"></span> Critical (&gt;80)
                    </div>
                </div>
            </div>
        </div>
    );
}
