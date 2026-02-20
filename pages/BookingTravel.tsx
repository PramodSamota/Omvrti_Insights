
import React from 'react';
import { Globe, Plane, MapPin } from 'lucide-react';
import KPICard from '../components/KPICard';
import { ENTERPRISE_DATA } from '../data/enterpriseData';
import { TabType } from '../types';

const BookingTravel: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  const kpis = [
    { label: 'Total Bookings', value: ENTERPRISE_DATA.length.toString(), change: 14, trend: 'up', icon: 'Plane', color: 'bg-indigo-600', sparklineData: [] },
    { label: 'Intl Ratio', value: '62%', change: 4, trend: 'up', icon: 'Globe', color: 'bg-blue-500', sparklineData: [] },
    { label: 'Future Exposure', value: '$210K', change: 9, trend: 'up', icon: 'Clock', color: 'bg-amber-500', sparklineData: [] },
    { label: 'Advance Window', value: '18d', change: 2, trend: 'up', icon: 'Target', color: 'bg-emerald-500', sparklineData: [] },
  ];

  if (activeTab === 'Details') {
    return (
      <div className="space-y-4">
        {ENTERPRISE_DATA.map(d => (
          <div key={d.booking_id} className="bg-white p-6 rounded-[2.2rem] border border-slate-50">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm font-black text-slate-900">{d.route}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{d.booking_date} • {d.zone}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${d.booking_status === 'completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                {d.booking_status}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Booking & Travel</h1>
        <p className="text-[11px] font-black text-slate-400 uppercase mt-2 flex items-center gap-2"><Globe className="w-3 h-3" /> Real-time Travel Visibility</p>
      </div>
      <div className="grid grid-cols-2 gap-4">{kpis.map((kpi, idx) => <KPICard key={idx} data={kpi as any} />)}</div>
    </div>
  );
};

export default BookingTravel;
