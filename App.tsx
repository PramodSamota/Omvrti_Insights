
import React, { useState } from 'react';
import { 
  User, ChevronDown, Calendar, Menu, X, Users, Globe, 
  FileBarChart, Zap, LayoutGrid, ArrowRightLeft, Filter,
  CreditCard, MapPin, Fuel, Gauge, Coins
} from 'lucide-react';
import BottomNav from './components/BottomNav';
import { TabType } from './types';

// Page Imports
import OverallSummary from './pages/OverallSummary';
import CreditUsage from './pages/CreditUsage';
import BookingTravel from './pages/BookingTravel';
import EmployeeDept from './pages/EmployeeDept';
import RouteAnalysis from './pages/RouteAnalysis';
import MMBReports from './pages/MMBReports';
import PaymentFinance from './pages/PaymentFinance';
import TaxFuel from './pages/TaxFuel';
import Dashboards from './pages/Dashboards';
import ExportReports from './pages/ExportReports';

type SectionType = 
  | 'Overall Summary' | 'Credit Usage' | 'Booking & Travel' | 'Employee & Dept' 
  | 'Route Analysis' | 'MMB Reports' | 'Payment & Finance' | 'Tax & Fuel' 
  | 'Dashboards' | 'Export & Reports';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Data');
  const [activeSection, setActiveSection] = useState<SectionType>('Overall Summary');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedYear] = useState('2025');

  const renderActivePage = () => {
    switch (activeSection) {
      case 'Overall Summary': return <OverallSummary activeTab={activeTab} />;
      case 'Credit Usage': return <CreditUsage activeTab={activeTab} />;
      case 'Booking & Travel': return <BookingTravel activeTab={activeTab} />;
      case 'Employee & Dept': return <EmployeeDept activeTab={activeTab} />;
      case 'Route Analysis': return <RouteAnalysis activeTab={activeTab} />;
      case 'MMB Reports': return <MMBReports activeTab={activeTab} />;
      case 'Payment & Finance': return <PaymentFinance activeTab={activeTab} />;
      case 'Tax & Fuel': return <TaxFuel activeTab={activeTab} />;
      case 'Dashboards': return <Dashboards activeTab={activeTab} />;
      case 'Export & Reports': return <ExportReports activeTab={activeTab} />;
      default: return <OverallSummary activeTab={activeTab} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen pb-32 relative overflow-x-hidden bg-[#F8FAFC]">
      {/* Sidebar Navigation */}
      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
        <aside className={`absolute left-0 top-0 bottom-0 w-[85%] bg-white shadow-2xl transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
          <div className="p-8 flex flex-col h-full overflow-y-auto no-scrollbar">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-600 p-2.5 rounded-2xl text-white shadow-lg"><Zap className="w-6 h-6" /></div>
                <span className="text-2xl font-black text-slate-900 tracking-tighter">Omvrti.ai</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-slate-50 rounded-2xl text-slate-400"><X className="w-6 h-6" /></button>
            </div>
            <nav className="space-y-1.5">
              <SidebarItem icon={LayoutGrid} label="Overall Summary" active={activeSection === 'Overall Summary'} onClick={() => {setActiveSection('Overall Summary'); setIsMenuOpen(false);}} />
              <SidebarItem icon={CreditCard} label="Credit Usage" active={activeSection === 'Credit Usage'} onClick={() => {setActiveSection('Credit Usage'); setIsMenuOpen(false);}} />
              <SidebarItem icon={Globe} label="Booking & Travel" active={activeSection === 'Booking & Travel'} onClick={() => {setActiveSection('Booking & Travel'); setIsMenuOpen(false);}} />
              <SidebarItem icon={Users} label="Employee & Dept" active={activeSection === 'Employee & Dept'} onClick={() => {setActiveSection('Employee & Dept'); setIsMenuOpen(false);}} />
              <SidebarItem icon={MapPin} label="Route Analysis" active={activeSection === 'Route Analysis'} onClick={() => {setActiveSection('Route Analysis'); setIsMenuOpen(false);}} />
              <SidebarItem icon={ArrowRightLeft} label="MMB Reports" active={activeSection === 'MMB Reports'} onClick={() => {setActiveSection('MMB Reports'); setIsMenuOpen(false);}} />
              <SidebarItem icon={Coins} label="Payment & Finance" active={activeSection === 'Payment & Finance'} onClick={() => {setActiveSection('Payment & Finance'); setIsMenuOpen(false);}} />
              <SidebarItem icon={Fuel} label="Tax & Fuel" active={activeSection === 'Tax & Fuel'} onClick={() => {setActiveSection('Tax & Fuel'); setIsMenuOpen(false);}} />
              <SidebarItem icon={Gauge} label="Dashboards" active={activeSection === 'Dashboards'} onClick={() => {setActiveSection('Dashboards'); setIsMenuOpen(false);}} />
              <SidebarItem icon={FileBarChart} label="Export & Reports" active={activeSection === 'Export & Reports'} onClick={() => {setActiveSection('Export & Reports'); setIsMenuOpen(false);}} />
            </nav>
          </div>
        </aside>
      </div>

      <div className="p-6 pt-8">
        <header className="flex justify-between items-center mb-10">
          <button onClick={() => setIsMenuOpen(true)} className="bg-white p-3.5 rounded-[1.4rem] border border-slate-100 shadow-sm"><Menu className="w-6 h-6 text-slate-800" /></button>
          <div className="bg-white px-4 py-3 rounded-[1.4rem] border border-slate-100 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-500" />
            <span className="text-[11px] font-black text-slate-700">{selectedYear}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex gap-2">
            <button className="bg-white p-3.5 rounded-[1.4rem] border border-slate-100 shadow-sm"><Filter className="w-6 h-6 text-slate-600" /></button>
            <button className="bg-indigo-600 p-3.5 rounded-[1.4rem] shadow-lg text-white"><User className="w-6 h-6" /></button>
          </div>
        </header>

        <main className="min-h-[70vh]">
          {renderActivePage()}
        </main>
      </div>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label, onClick, active }: any) => (
  <button onClick={onClick} className={`w-full flex items-center gap-4 px-5 py-4.5 rounded-[1.6rem] transition-all group ${active ? 'bg-indigo-600 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-50'}`}>
    <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600'}`} />
    <span className="font-bold text-[14px]">{label}</span>
  </button>
);

export default App;
