
import React from 'react';
import { Coins } from 'lucide-react';
import KPICard from '../components/KPICard';
import { ENTERPRISE_DATA } from '../data/enterpriseData';
import { TabType } from '../types';

const PaymentFinance: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  const totalSpend = ENTERPRISE_DATA.reduce((acc, d) => acc + d.total_spend, 0);

  const kpis = [
    { label: 'Total Invoiced', value: `$${(totalSpend/1000).toFixed(1)}K`, change: 12, trend: 'up', icon: 'Wallet', color: 'bg-emerald-600', sparklineData: [] },
    { label: 'Outstanding', value: '$12.5K', change: 2, trend: 'down', icon: 'AlertTriangle', color: 'bg-rose-500', sparklineData: [] },
    { label: 'Reconciled', value: '98%', change: 1, trend: 'up', icon: 'ShieldCheck', color: 'bg-indigo-500', sparklineData: [] },
    { label: 'Tax Impact', value: `$${(totalSpend * 0.12 / 1000).toFixed(1)}K`, change: 0, trend: 'up', icon: 'Clock', color: 'bg-blue-400', sparklineData: [] },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Payment & Finance</h1>
        <p className="text-[11px] font-black text-slate-400 uppercase mt-2 flex items-center gap-2"><Coins className="w-3 h-3" /> Financial Reconciliation Hub</p>
      </div>
      <div className="grid grid-cols-2 gap-4">{kpis.map((kpi, idx) => <KPICard key={idx} data={kpi as any} />)}</div>
    </div>
  );
};

export default PaymentFinance;
