
import React from 'react';
import { SystemMetric } from '../types';

interface Props {
  metrics: SystemMetric[];
}

const SystemMonitor: React.FC<Props> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((m, i) => (
        <div key={i} className="bg-[#111] border border-gray-800 p-4 rounded hover:border-green-600 transition-all duration-300">
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{m.label}</div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold orbitron text-white leading-none">{m.value}</span>
            <span className="text-xs text-gray-600">{m.unit}</span>
          </div>
          <div className="mt-3 w-full bg-gray-900 h-1.5 rounded-full overflow-hidden">
             <div 
               className={`h-full transition-all duration-500 ${m.status === 'optimal' ? 'bg-green-500' : 'bg-red-500'}`} 
               style={{ width: `${Math.min(m.value, 100)}%` }}
             ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SystemMonitor;
