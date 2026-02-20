
import React from 'react';
import { ArrowRightLeft } from 'lucide-react';
import KPICard from '../components/KPICard';
import { ENTERPRISE_DATA } from '../data/enterpriseData';
import { TabType } from '../types';

const MMBReports: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  const totalChanges = ENTERPRISE_DATA.reduce((acc, d) => acc + d.booking_changes, 0);
  const totalCancellations = ENTERPRISE_DATA.reduce((acc, d) => acc + d.cancellations, 0);

  const kpis = [
    { label: 'Modifications', value: totalChanges.toString(), change: 15, trend: 'up', icon: 'ArrowRightLeft', color: 'bg-amber-500', sparklineData: [] },
    { label: 'Cancellations', value: totalCancellations.toString(), change: 5, trend: 'down', icon: 'AlertTriangle', color: 'bg-rose-500', sparklineData: [] },
    { label: 'No-Shows', value: '12', change: 2, trend: 'down', icon: 'Users', color: 'bg-slate-400', sparklineData: [] },
    { label: 'Refund Impact', value: `$${(totalCancellations * 350).toLocaleString()}`, change: 10, trend: 'up', icon: 'Receipt', color: 'bg-indigo-500', sparklineData: [] },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">MMB Reports</h1>
        <p className="text-[11px] font-black text-slate-400 uppercase mt-2 flex items-center gap-2"><ArrowRightLeft className="w-3 h-3" /> Modification & Ancillary Tracking</p>
      </div>
      <div className="grid grid-cols-2 gap-4">{kpis.map((kpi, idx) => <KPICard key={idx} data={kpi as any} />)}</div>
    </div>
  );
};

export default MMBReports;
