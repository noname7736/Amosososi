
import React, { useState, useMemo } from 'react';
import { APILog } from '../types';

interface Props {
  logs: APILog[];
}

const LogViewer: React.FC<Props> = ({ logs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'SUCCESS' | 'ERROR'>('ALL');

  const filteredLogs = useMemo(() => {
    return logs.filter(log => {
      const matchesSearch = 
        log.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'ALL' || log.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [logs, searchTerm, statusFilter]);

  return (
    <div className="bg-[#111] border border-gray-800 rounded p-6 flex flex-col h-[500px] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="orbitron text-xl flex items-center gap-2">
          <i className="fas fa-list-ul text-blue-500"></i>
          บันทึกการส่งข้อมูลผ่านท่อปลอดภัย (Secure Logs)
        </h2>
        
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Status Filter Buttons */}
          <div className="flex bg-black border border-gray-800 rounded p-1">
            {(['ALL', 'SUCCESS', 'ERROR'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 text-[10px] orbitron font-bold transition-all rounded ${
                  statusFilter === status 
                    ? status === 'SUCCESS' ? 'bg-green-600 text-white' : status === 'ERROR' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {status === 'ALL' ? 'ทั้งหมด' : status === 'SUCCESS' ? 'สำเร็จ' : 'ผิดพลาด'}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative flex-1 md:flex-none">
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-xs"></i>
            <input 
              type="text" 
              placeholder="ค้นหาเซอร์วิสหรือรายละเอียด..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-black border border-gray-800 rounded pl-8 pr-4 py-1.5 text-xs focus:border-blue-500 outline-none w-full md:w-64 transition-all text-gray-300 font-sans"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto font-mono text-xs space-y-1 pr-2 custom-scrollbar">
        {filteredLogs.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-700 italic gap-2">
            <i className="fas fa-database text-3xl opacity-20"></i>
            <p>ไม่พบข้อมูลที่ค้นหาในฐานข้อมูลบันทึก...</p>
          </div>
        ) : (
          filteredLogs.map((log) => (
            <div key={log.id} className="grid grid-cols-12 gap-2 p-2 border-b border-gray-900/50 hover:bg-blue-900/10 transition-colors group rounded">
              <span className="col-span-2 text-gray-600 font-sans">[{log.timestamp}]</span>
              <span className="col-span-3 text-blue-400 font-bold orbitron text-[10px] truncate" title={log.service}>{log.service}</span>
              <span className="col-span-2 text-gray-400 uppercase tracking-tighter text-[9px] flex items-center">{log.action}</span>
              <span className="col-span-4 text-gray-500 italic truncate group-hover:text-gray-300 font-sans">{log.details}</span>
              <span className={`col-span-1 text-right font-bold orbitron text-[9px] flex items-center justify-end ${log.status === 'SUCCESS' ? 'text-green-500' : 'text-red-500'}`}>
                {log.status === 'SUCCESS' ? (
                  <><i className="fas fa-check-circle mr-1"></i> OK</>
                ) : (
                  <><i className="fas fa-exclamation-triangle mr-1"></i> ERR</>
                )}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 pt-2 border-t border-gray-900 flex justify-between items-center text-[9px] text-gray-600 uppercase tracking-widest">
        <span>รายการทั้งหมด: {filteredLogs.length} / {logs.length}</span>
        <span className="animate-pulse flex items-center gap-1">
          <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
          กำลังฟังข้อมูลเรียลไทม์...
        </span>
      </div>
    </div>
  );
};

export default LogViewer;
