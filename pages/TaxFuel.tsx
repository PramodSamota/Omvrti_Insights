
import React from 'react';
import { Fuel } from 'lucide-react';
import KPICard from '../components/KPICard';
import { ENTERPRISE_DATA } from '../data/enterpriseData';
import { TabType } from '../types';

const TaxFuel: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  const totalTax = ENTERPRISE_DATA.reduce((acc, d) => acc + d.tax_amount, 0);

  const kpis = [
    { label: 'Total GST/VAT', value: `$${totalTax.toLocaleString()}`, change: 4, trend: 'up', icon: 'Receipt', color: 'bg-indigo-600', sparklineData: [] },
    { label: 'Fuel Recovery', value: `$${(totalTax * 0.28).toFixed(0)}`, change: 7, trend: 'up', icon: 'Fuel', color: 'bg-amber-500', sparklineData: [] },
    { label: 'Tax Audited', value: '100%', change: 0, trend: 'up', icon: 'ShieldCheck', color: 'bg-emerald-500', sparklineData: [] },
    { label: 'Compliance Index', value: 'A+', change: 0, trend: 'up', icon: 'Target', color: 'bg-blue-500', sparklineData: [] },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Tax & Fuel</h1>
        <p className="text-[11px] font-black text-slate-400 uppercase mt-2 flex items-center gap-2"><Fuel className="w-3 h-3" /> Statutory Compliance & Logs</p>
      </div>
      <div className="grid grid-cols-2 gap-4">{kpis.map((kpi, idx) => <KPICard key={idx} data={kpi as any} />)}</div>
    </div>
  );
};

export default TaxFuel;
