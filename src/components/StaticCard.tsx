import { ReactNode } from 'react';

interface StatisticCardProps {
  value: string;
  label: string;
  icon: ReactNode;
}

const StatisticCard = ({ value, label, icon }: StatisticCardProps) => {
  return (
    <div className="rounded-lg bg-gray-800 p-6 text-white dark:bg-gray-950 dark:text-gray-200 backdrop-blur-lg transition-transform hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-3xl font-bold">{value}</p>
          <p className="mt-1 text-sm text-primary-200">{label}</p>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default StatisticCard;
