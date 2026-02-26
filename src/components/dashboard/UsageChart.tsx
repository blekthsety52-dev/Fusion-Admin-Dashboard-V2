import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: '00:00', cloud: 4000, local: 2400 },
  { name: '04:00', cloud: 3000, local: 1398 },
  { name: '08:00', cloud: 2000, local: 9800 },
  { name: '12:00', cloud: 2780, local: 3908 },
  { name: '16:00', cloud: 1890, local: 4800 },
  { name: '20:00', cloud: 2390, local: 3800 },
  { name: '23:59', cloud: 3490, local: 4300 },
];

/**
 * Chart component showing Cloud vs Local usage
 */
export const UsageChart: React.FC = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-zinc-100">Usage Distribution</h3>
          <p className="text-sm text-zinc-500">Cloud API vs Local Execution</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-zinc-400 font-medium">Local</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="text-xs text-zinc-400 font-medium">Cloud</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorLocal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorCloud" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3f3f46" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3f3f46" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#52525b" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke="#52525b" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
              itemStyle={{ fontSize: '12px' }}
            />
            <Area 
              type="monotone" 
              dataKey="local" 
              stroke="#10b981" 
              fillOpacity={1} 
              fill="url(#colorLocal)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="cloud" 
              stroke="#52525b" 
              fillOpacity={1} 
              fill="url(#colorCloud)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
