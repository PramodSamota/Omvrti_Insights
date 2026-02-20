
import React from 'react';
import { Users } from 'lucide-react';
import KPICard from '../components/KPICard';
import { ENTERPRISE_DATA } from '../data/enterpriseData';
import { TabType } from '../types';

const EmployeeDept: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  const activeUsers = ENTERPRISE_DATA.filter(d => d.active_user).length;
  const deptCount = new Set(ENTERPRISE_DATA.map(d => d.department)).size;

  const kpis = [
    { label: 'Active Users', value: activeUsers.toString(), change: 2, trend: 'up', icon: 'Users', color: 'bg-indigo-600', sparklineData: [] },
    { label: 'Dept Coverage', value: `${deptCount}/14`, change: 0, trend: 'up', icon: 'LayoutGrid', color: 'bg-emerald-500', sparklineData: [] },
    { label: 'Policy Adherence', value: '94%', change: 4, trend: 'up', icon: 'ShieldCheck', color: 'bg-blue-500', sparklineData: [] },
    { label: 'User Savings', value: '$24K', change: 11, trend: 'up', icon: 'Landmark', color: 'bg-rose-500', sparklineData: [] },
  ];

  if (activeTab === 'Details') {
    return (
      <div className="space-y-4">
        {ENTERPRISE_DATA.map(d => (
          <div key={d.employee_id} className="bg-white p-6 rounded-[2.2rem] border border-slate-50 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-indigo-600 font-bold">{d.employee_name[0]}</div>
            <div className="flex-1">
              <h4 className="text-sm font-black text-slate-900">{d.employee_name}</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase">{d.department} • {d.role}</p>
            </div>
            <div className="text-right">
              <h4 className="text-xs font-black text-slate-900">{d.credits_used} Cr</h4>
              <p className="text-[9px] text-slate-400 font-bold uppercase">Used</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Employee & Dept</h1>
        <p className="text-[11px] font-black text-slate-400 uppercase mt-2 flex items-center gap-2"><Users className="w-3 h-3" /> Behavioral & Usage Insights</p>
      </div>
      <div className="grid grid-cols-2 gap-4">{kpis.map((kpi, idx) => <KPICard key={idx} data={kpi as any} />)}</div>
    </div>
  );
};

export default EmployeeDept;
