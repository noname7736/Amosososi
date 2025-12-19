
import React from 'react';

interface Props {
  onDeploy: () => void;
  isDeploying: boolean;
  onGenerateAPK: () => void;
  onRemoteInject: () => void;
  isRemoteInjecting: boolean;
}

const ControlPanel: React.FC<Props> = ({ onDeploy, isDeploying, onGenerateAPK, onRemoteInject, isRemoteInjecting }) => {
  return (
    <div className="bg-[#111] border border-gray-800 rounded p-6 shadow-2xl">
      <h2 className="orbitron text-xl mb-4 flex items-center gap-2">
        <i className="fas fa-terminal text-green-500"></i>
        แผงบงการ (Master Console)
      </h2>
      <div className="grid grid-cols-1 gap-3">
        <button 
          onClick={onDeploy}
          disabled={isDeploying}
          className={`py-4 rounded font-bold orbitron text-white flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(255,0,0,0.3)] 
            ${isDeploying ? 'bg-gray-800 cursor-not-allowed' : 'bg-red-600 hover:bg-red-500 hover:scale-[1.02] active:scale-95'}`}
        >
          <i className={`fas ${isDeploying ? 'fa-spinner fa-spin' : 'fa-microchip'}`}></i>
          {isDeploying ? 'กำลังวิเคราะห์ระบบ...' : 'เริ่มต้นตรวจสอบระบบ AI (Real)'}
        </button>

        <button 
          onClick={onRemoteInject}
          disabled={isRemoteInjecting}
          className={`py-4 bg-blue-900/20 border-2 border-blue-600 rounded font-bold orbitron text-blue-400 flex items-center justify-center gap-2 transition-all 
            ${isRemoteInjecting ? 'opacity-50' : 'hover:bg-blue-600 hover:text-white'}`}
        >
          <i className={`fas ${isRemoteInjecting ? 'fa-satellite-dish animate-pulse' : 'fa-link'}`}></i>
          {isRemoteInjecting ? 'กำลังเชื่อมต่อท่อส่ง...' : 'เปิดการเชื่อมต่อ Direct Pipe'}
        </button>

        <button 
          onClick={onGenerateAPK}
          className="py-4 bg-black border-2 border-green-600 rounded font-bold orbitron text-green-500 flex flex-col items-center justify-center transition-all hover:bg-green-600 hover:text-white group relative overflow-hidden"
        >
          <div className="flex items-center gap-2">
            <i className="fas fa-file-export"></i>
            <span>ส่งออกรายงาน Audit (ข้อมูลจริง)</span>
          </div>
          <span className="text-[8px] opacity-50 uppercase mt-1">ไฟล์รายงานวิเคราะห์ระดับสูงแบบเรียลไทม์</span>
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button className="flex-1 bg-gray-900 border border-gray-700 py-2 rounded text-[10px] font-bold hover:border-red-500 transition-colors uppercase">
          Key Rotation
        </button>
        <button className="flex-1 bg-gray-900 border border-gray-700 py-2 rounded text-[10px] font-bold hover:border-green-500 transition-colors uppercase">
          Service Pulse
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
