import React from 'react';
import { Terminal, Cpu, Share2, CheckCircle2 } from 'lucide-react';
import { DASHBOARD_CONTENT } from '../../constants/content';

/**
 * Component explaining the local-first strategy
 */
export const LocalStrategy: React.FC = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-zinc-800 bg-zinc-900/50">
        <h3 className="text-lg font-semibold text-zinc-100">{DASHBOARD_CONTENT.localStrategy.title}</h3>
        <p className="text-sm text-zinc-500">{DASHBOARD_CONTENT.localStrategy.description}</p>
      </div>
      
      <div className="p-6 space-y-6">
        {DASHBOARD_CONTENT.localStrategy.steps.map((step, index) => (
          <div key={step.id} className="flex gap-4 group">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all">
                {index === 0 && <Terminal className="w-4 h-4" />}
                {index === 1 && <Cpu className="w-4 h-4" />}
                {index === 2 && <Share2 className="w-4 h-4" />}
              </div>
              {index < DASHBOARD_CONTENT.localStrategy.steps.length - 1 && (
                <div className="w-px h-full bg-zinc-800 my-2" />
              )}
            </div>
            
            <div className="pb-6">
              <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors">
                {step.title}
              </h4>
              <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                {step.content}
              </p>
              <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-zinc-600">
                <CheckCircle2 className="w-3 h-3 text-emerald-500/50" />
                <span>Verified Configuration</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-emerald-500/5 border-t border-zinc-800 flex items-center justify-between">
        <span className="text-xs font-medium text-emerald-500/80">System Status: Optimized</span>
        <button className="text-xs font-bold text-zinc-100 bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg transition-colors">
          Run Diagnostics
        </button>
      </div>
    </div>
  );
};
