import React from 'react';
import * as Icons from 'lucide-react';
import { DASHBOARD_CONTENT } from '../../constants/content';
import { cn } from '../../lib/utils';

interface SidebarProps {
  className?: string;
}

/**
 * Sidebar component for navigation
 */
export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={cn("w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col h-screen", className)}>
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Icons.Zap className="text-zinc-950 w-5 h-5" />
          </div>
          <span className="font-bold text-zinc-100 text-lg tracking-tight">
            {DASHBOARD_CONTENT.title}
          </span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {DASHBOARD_CONTENT.sidebar.nav.map((item) => {
          const Icon = (Icons as any)[item.icon];
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors group"
            >
              {Icon && <Icon className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />}
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800 bg-zinc-950/50">
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
            <Icons.User className="w-6 h-6 text-zinc-400" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium text-zinc-200 truncate">
              {DASHBOARD_CONTENT.sidebar.footer.user}
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-zinc-500">
                {DASHBOARD_CONTENT.sidebar.footer.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
