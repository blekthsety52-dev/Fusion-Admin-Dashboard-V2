import React from 'react';
import { motion } from 'motion/react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { StatsCard } from './components/dashboard/StatsCard';
import { UsageChart } from './components/dashboard/UsageChart';
import { LocalStrategy } from './components/dashboard/LocalStrategy';
import { DASHBOARD_CONTENT } from './constants/content';

/**
 * Main Application Component
 * Fusion Admin Dashboard - Optimized for Builder.io
 */
export default function App() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Sidebar Navigation */}
      <Sidebar className="hidden lg:flex" />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
          {/* Welcome Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
                Dashboard Overview
              </h2>
              <p className="text-zinc-500 max-w-2xl">
                Monitor your Fusion integration health and resource consumption. 
                Switch to local indexing to bypass cloud quotas.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-sm font-medium transition-all">
                Export Data
              </button>
              <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/20">
                Sync GitHub
              </button>
            </div>
          </motion.section>

          {/* Stats Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {DASHBOARD_CONTENT.stats.map((stat, index) => (
              <StatsCard 
                key={stat.label} 
                {...stat} 
                trend={stat.trend as 'up' | 'down' | 'stable'} 
              />
            ))}
          </motion.section>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Chart Section */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="xl:col-span-2"
            >
              <UsageChart />
            </motion.section>

            {/* Local Strategy Section */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <LocalStrategy />
            </motion.section>
          </div>

          {/* Footer Info */}
          <footer className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
            <p>© 2026 Fusion Admin Dashboard. All systems operational.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-zinc-400 transition-colors">Documentation</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Support</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
