
import React from 'react';
import { CreditCard, Sparkles, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import KPICard from '../components/KPICard';
import { ENTERPRISE_DATA } from '../data/enterpriseData';
import { TabType } from '../types';

const CreditUsage: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  const totalUsed = ENTERPRISE_DATA.reduce((acc, d) => acc + d.credits_used, 0);
  const totalAllocated = ENTERPRISE_DATA.reduce((acc, d) => acc + d.credits_allocated, 0);
  const topups = ENTERPRISE_DATA.reduce((acc, d) => acc + d.credit_topups, 0);

  const kpis = [
    { label: 'Used Credits', value: totalUsed.toLocaleString(), change: 10, trend: 'up', icon: 'LineChart', color: 'bg-amber-500', sparklineData: [] },
    { label: 'Burn Rate', value: `${((totalUsed/totalAllocated)*100).toFixed(1)}%`, change: 2, trend: 'up', icon: 'Activity', color: 'bg-rose-500', sparklineData: [] },
    { label: 'Remaining', value: (totalAllocated - totalUsed).toLocaleString(), change: 5, trend: 'down', icon: 'Clock', color: 'bg-emerald-500', sparklineData: [] },
    { label: 'System Top-ups', value: topups.toString(), change: 4, trend: 'up', icon: 'Zap', color: 'bg-indigo-500', sparklineData: [] },
  ];

  if (activeTab === 'Trends') {
    return (
      <div className="space-y-6">
        <section className="bg-white p-7 rounded-[2.5rem] border border-slate-50">
          <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">Weekly Credit Burn</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ENTERPRISE_DATA.slice(0, 10)}>
                <XAxis dataKey="booking_id" hide />
                <Tooltip />
                <Bar dataKey="credits_used" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    );
  }

  if (activeTab === 'Details') {
    return (
      <div className="space-y-4">
        {ENTERPRISE_DATA.map(d => (
          <div key={d.booking_id} className="bg-white p-6 rounded-[2.2rem] border border-slate-50 flex justify-between">
            <div>
              <h4 className="text-sm font-black text-slate-900">{d.employee_name}</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase">{d.booking_id}</p>
            </div>
            <div className="text-right">
              <h4 className="text-sm font-black text-amber-600">{d.credits_used} Cr</h4>
              <span className="text-[9px] text-slate-400 font-black uppercase">Consumed</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Credit Usage</h1>
        <p className="text-[11px] font-black text-slate-400 uppercase mt-2 flex items-center gap-2"><CreditCard className="w-3 h-3" /> Consumption & Burn Analysis</p>
      </div>
      <div className="grid grid-cols-2 gap-4">{kpis.map((kpi, idx) => <KPICard key={idx} data={kpi as any} />)}</div>
    </div>
  );
};

export default CreditUsage;
