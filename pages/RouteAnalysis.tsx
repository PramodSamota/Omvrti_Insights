
import React from 'react';
import { MapPin } from 'lucide-react';
import KPICard from '../components/KPICard';
import { ENTERPRISE_DATA } from '../data/enterpriseData';
import { TabType } from '../types';

const RouteAnalysis: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  const routesCount = new Set(ENTERPRISE_DATA.map(d => d.route)).size;

  const kpis = [
    { label: 'Active Routes', value: routesCount.toString(), change: 3, trend: 'up', icon: 'MapPin', color: 'bg-blue-600', sparklineData: [] },
    { label: 'Optimized Pairs', value: '32', change: 12, trend: 'up', icon: 'Zap', color: 'bg-amber-500', sparklineData: [] },
    { label: 'Peak Load', value: '72%', change: 8, trend: 'up', icon: 'Activity', color: 'bg-rose-500', sparklineData: [] },
    { label: 'Route Efficiency', value: '88%', change: 2, trend: 'up', icon: 'Target', color: 'bg-indigo-500', sparklineData: [] },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Route Analysis</h1>
        <p className="text-[11px] font-black text-slate-400 uppercase mt-2 flex items-center gap-2"><MapPin className="w-3 h-3" /> Geographic Pattern Optimization</p>
      </div>
      <div className="grid grid-cols-2 gap-4">{kpis.map((kpi, idx) => <KPICard key={idx} data={kpi as any} />)}</div>
    </div>
  );
};

export default RouteAnalysis;
