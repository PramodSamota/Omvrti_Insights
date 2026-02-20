
import React from 'react';
import { LayoutGrid, Sparkles, Activity, FileText, Globe } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import KPICard from '../components/KPICard';
import { ENTERPRISE_DATA } from '../data/enterpriseData';
import { TabType } from '../types';

const OverallSummary: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  const totalCredits = ENTERPRISE_DATA.reduce((acc, d) => acc + d.credits_allocated, 0);
  const totalUsed = ENTERPRISE_DATA.reduce((acc, d) => acc + d.credits_used, 0);
  const totalSavings = ENTERPRISE_DATA.reduce((acc, d) => acc + d.savings, 0);
  const intlCount = ENTERPRISE_DATA.filter(d => d.Is_Internation_flight).length;

  const kpis = [
    { label: 'Total Records', value: ENTERPRISE_DATA.length.toString(), change: 5, trend: 'up', icon: 'FileText', color: 'bg-indigo-600', sparklineData: [] },
    { label: 'Global Credits', value: `${(totalCredits / 1000).toFixed(1)}K`, change: 12, trend: 'up', icon: 'ShieldCheck', color: 'bg-blue-500', sparklineData: [] },
    { label: 'Net Savings', value: `$${(totalSavings / 1000).toFixed(1)}K`, change: 18, trend: 'up', icon: 'Landmark', color: 'bg-emerald-500', sparklineData: [] },
    { label: 'Intl Routes', value: intlCount.toString(), change: 8, trend: 'up', icon: 'Globe', color: 'bg-indigo-400', sparklineData: [] },
  ];

  if (activeTab === 'Trends') {
    return (
      <div className="space-y-6">
        <section className="bg-white p-7 rounded-[2.5rem] border border-slate-50">
          <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">Global Consumption Trend</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ENTERPRISE_DATA.slice(0, 7)}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="booking_date" hide />
                <Tooltip />
                <Area type="monotone" dataKey="credits_used" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    );
  }

  if (activeTab === 'Details') {
    return (
      <div className="space-y-4">
        {ENTERPRISE_DATA.slice(0, 10).map(d => (
          <div key={d.booking_id} className="bg-white p-6 rounded-[2.2rem] border border-slate-50 flex justify-between">
            <div>
              <h4 className="text-sm font-black text-slate-900">{d.employee_name}</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase">{d.route}</p>
            </div>
            <div className="text-right">
              <h4 className="text-sm font-black text-slate-900">${d.payment_amount}</h4>
              <span className="text-[9px] text-emerald-500 font-black uppercase">Paid</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Overall Summary</h1>
        <p className="text-[11px] font-black text-slate-400 uppercase mt-2 flex items-center gap-2"><LayoutGrid className="w-3 h-3" /> Global Corporate Overview</p>
      </div>
      <div className="bg-indigo-600 p-7 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="bg-white/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4"><Sparkles className="w-3.5 h-3.5" /><span className="text-[9px] font-black uppercase">AI Analysis</span></div>
          <p className="text-[17px] font-bold">Consolidated spend is tracking 8% below forecast due to international route optimizations.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">{kpis.map((kpi, idx) => <KPICard key={idx} data={kpi as any} />)}</div>
      <div className="bg-white p-7 rounded-[2.5rem] border flex items-center justify-between shadow-sm">
        <div><span className="text-[10px] font-black text-slate-400 uppercase">Global Data Health</span><h4 className="text-2xl font-black text-slate-900 mt-1">98.2% Stable</h4></div>
        <div className="p-4 bg-emerald-50 rounded-[1.8rem] text-emerald-500"><Activity className="w-7 h-7" /></div>
      </div>
    </div>
  );
};

export default OverallSummary;
