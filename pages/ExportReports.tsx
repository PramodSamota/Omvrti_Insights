
import React from 'react';
import { FileBarChart, Download } from 'lucide-react';
import KPICard from '../components/KPICard';
import { TabType } from '../types';

const ExportReports: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  const kpis = [
    { label: 'Scheduled Jobs', value: '42', change: 10, trend: 'up', icon: 'Clock', color: 'bg-slate-400', sparklineData: [] },
    { label: 'Reports Ready', value: '18', change: 22, trend: 'up', icon: 'FileText', color: 'bg-rose-500', sparklineData: [] },
    { label: 'Total Exports', value: '2.4K', change: 15, trend: 'up', icon: 'Download', color: 'bg-blue-500', sparklineData: [] },
    { label: 'Data Latency', value: '3m', change: 12, trend: 'down', icon: 'Zap', color: 'bg-indigo-600', sparklineData: [] },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Export & Reports</h1>
        <p className="text-[11px] font-black text-slate-400 uppercase mt-2 flex items-center gap-2"><FileBarChart className="w-3 h-3" /> Scheduled Data Management</p>
      </div>
      <div className="grid grid-cols-2 gap-4">{kpis.map((kpi, idx) => <KPICard key={idx} data={kpi as any} />)}</div>
      <button className="w-full py-5 bg-slate-900 rounded-[1.8rem] text-[11px] font-black text-white uppercase tracking-[0.2em] flex items-center justify-center gap-3">
        <Download className="w-4 h-4" /> Generate Audit Pack
      </button>
    </div>
  );
};

export default ExportReports;
