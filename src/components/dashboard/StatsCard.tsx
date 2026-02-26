import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StatsCardProps {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
  description: string;
}

/**
 * Card for displaying key metrics
 */
export const StatsCard: React.FC<StatsCardProps> = ({ label, value, trend, description }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm font-medium text-zinc-500">{label}</span>
        <div className={cn(
          "p-2 rounded-lg",
          trend === 'up' ? "bg-emerald-500/10 text-emerald-400" :
          trend === 'down' ? "bg-red-500/10 text-red-400" :
          "bg-blue-500/10 text-blue-400"
        )}>
          {trend === 'up' && <TrendingUp className="w-4 h-4" />}
          {trend === 'down' && <TrendingDown className="w-4 h-4" />}
          {trend === 'stable' && <Minus className="w-4 h-4" />}
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-zinc-100 tracking-tight">{value}</h3>
        <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
};
