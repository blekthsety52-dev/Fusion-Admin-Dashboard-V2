import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';
import { DASHBOARD_CONTENT } from '../../constants/content';
import { cn } from '../../lib/utils';

interface HeaderProps {
  className?: string;
}

/**
 * Header component with search and notifications
 */
export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10", className)}>
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold text-zinc-100">{DASHBOARD_CONTENT.title}</h1>
        <p className="text-xs text-zinc-500">{DASHBOARD_CONTENT.subtitle}</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Search metrics..." 
            className="bg-zinc-900 border border-zinc-800 rounded-full py-1.5 pl-10 pr-4 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 w-64 transition-all"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950" />
          </button>
          <button className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
