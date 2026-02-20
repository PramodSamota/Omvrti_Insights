
import React from 'react';
import { 
  TrendingUp, TrendingDown, LucideIcon, Ticket, CreditCard, Plane, 
  BarChart3, Clock, Lock, ShieldCheck, Landmark, Users, MapPin, 
  Receipt, Fuel, Zap, Luggage, AlertTriangle, Activity, Target,
  FileText, Coins, Gauge, ArrowRightLeft
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { KPIData } from '../types';

const IconMap: Record<string, LucideIcon> = {
  Ticket,
  CreditCard,
  Plane,
  LineChart: BarChart3,
  Clock,
  Lock,
  ShieldCheck,
  Landmark,
  Users,
  MapPin,
  Receipt,
  Fuel,
  Zap,
  Luggage,
  AlertTriangle,
  Activity,
  Target,
  FileText,
  Coins,
  Gauge,
  ArrowRightLeft
};

interface KPICardProps {
  data: KPIData;
  isFullWidth?: boolean;
}

const KPICard: React.FC<KPICardProps> = ({ data, isFullWidth = false }) => {
  const Icon = IconMap[data.icon] || BarChart3;
  const isPositive = data.trend === 'up';

  // Generate some dummy sparkline data if none provided
  const sparkData = data.sparklineData.length > 0 ? data.sparklineData : [
    { v: 40 }, { v: 30 }, { v: 45 }, { v: 50 }, { v: 35 }, { v: 60 }
  ];

  return (
    <div className={`bg-white p-5 rounded-[2.2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-50 flex flex-col justify-between transition-all active:scale-[0.97] hover:shadow-lg duration-300 ${isFullWidth ? 'h-48' : 'h-44'}`}>
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-tight w-2/3">
          {data.label}
        </span>
        <div className={`p-2.5 rounded-2xl ${data.color.replace('bg-', 'bg-opacity-10 bg-')} flex items-center justify-center`}>
          <Icon className={`w-4 h-4 ${data.color.replace('bg-', 'text-')}`} />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end mt-2">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-[28px] font-black text-slate-900 tracking-tighter leading-none">{data.value}</h3>
            <div className="flex items-center gap-1 mt-1.5">
              {isPositive ? (
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5 text-rose-500" />
              )}
              <span className={`text-[11px] font-black ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                {data.change}%
              </span>
            </div>
          </div>
          
          <div className="w-16 h-10 -mb-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparkData}>
                <Line 
                  type="monotone" 
                  dataKey="v" 
                  stroke={isPositive ? "#10b981" : "#f43f5e"} 
                  strokeWidth={2.5} 
                  dot={false} 
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPICard;
