
export type TabType = 'Data' | 'Trends' | 'Details';

export interface KPIData {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon: string;
  color: string;
  sparklineData: { v: number }[];
}

export type ReportCategory = 
  | 'executive'
  | 'finance'
  | 'travel'
  | 'tax'
  | 'lifecycle';
