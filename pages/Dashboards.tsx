
import React from 'react';
import { Gauge } from 'lucide-react';
import KPICard from '../components/KPICard';
import { TabType } from '../types';

const Dashboards: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  const kpis = [
    { label: 'System Uptime', value: '99.99%', change: 0, trend: 'up', icon: 'Activity', color: 'bg-emerald-500', sparklineData: [] },
    { label: 'Analytic Views', value: '124', change: 12, trend: 'up', icon: 'Gauge', color: 'bg-indigo-600', sparklineData: [] },
    { label: 'Alerts Active', value: '3', change: 50, trend: 'down', icon: 'AlertTriangle', color: 'bg-rose-500', sparklineData: [] },
    { label: 'Reporting Speed', value: '0.8s', change: 15, trend: 'down', icon: 'Zap', color: 'bg-blue-500', sparklineData: [] },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Dashboards</h1>
        <p className="text-[11px] font-black text-slate-400 uppercase mt-2 flex items-center gap-2"><Gauge className="w-3 h-3" /> Custom Analytical Overviews</p>
      </div>
      <div className="grid grid-cols-2 gap-4">{kpis.map((kpi, idx) => <KPICard key={idx} data={kpi as any} />)}</div>
    </div>
  );
};

export default Dashboards;
