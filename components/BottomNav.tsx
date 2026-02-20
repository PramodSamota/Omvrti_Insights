
import React from 'react';
import { LayoutGrid, BarChart3, ListTree } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: 'Data', icon: LayoutGrid, value: 'Data' as TabType },
    { label: 'Trends', icon: BarChart3, value: 'Trends' as TabType },
    { label: 'Details', icon: ListTree, value: 'Details' as TabType },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 flex justify-around items-center h-20 pb-5 px-4 z-50">
      {tabs.map(({ label, icon: Icon, value }) => (
        <button
          key={label}
          onClick={() => setActiveTab(value)}
          className={`flex flex-col items-center gap-1 transition-all duration-300 flex-1 ${
            activeTab === value ? 'text-indigo-600' : 'text-slate-300'
          }`}
        >
          <div className={`p-2 rounded-2xl transition-all duration-300 ${activeTab === value ? 'bg-indigo-50 scale-110' : 'bg-transparent'}`}>
            <Icon className="w-6 h-6" strokeWidth={activeTab === value ? 2.5 : 2} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-widest ${activeTab === value ? 'opacity-100' : 'opacity-60'}`}>
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
