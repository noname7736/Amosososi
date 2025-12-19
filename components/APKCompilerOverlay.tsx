
import React from 'react';
import { INSTALLATION_REQUIREMENTS } from '../constants';

interface Props {
  progress: number;
  status: string;
}

const APKCompilerOverlay: React.FC<Props> = ({ progress, status }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-6 backdrop-blur-xl overflow-y-auto">
      <div className="w-full max-w-2xl bg-[#0a0a0a] border-2 border-red-600 p-8 rounded shadow-[0_0_120px_rgba(255,0,0,0.4)] relative overflow-hidden">
        {/* Animated Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-30"></div>
        
        <div className="flex items-center gap-6 mb-10 relative z-20">
          <div className="w-20 h-20 border-2 border-red-600 rounded-lg flex items-center justify-center bg-red-900/30 shadow-[0_0_40px_rgba(255,0,0,0.5)]">
             <i className="fas fa-microchip text-red-500 text-4xl animate-pulse"></i>
          </div>
          <div>
            <h2 className="orbitron text-3xl font-bold text-white tracking-[0.2em] dragon-glow uppercase">OMEGA PRO COMPILER</h2>
            <p className="text-red-500 text-[11px] font-bold uppercase tracking-[0.4em] mt-2">v8.0.0 Production Build // Fixed Core Alignment</p>
          </div>
        </div>

        <div className="space-y-8 relative z-20">
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
               <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Compiler Status</span>
               <span className="text-green-500 text-sm orbitron font-bold animate-pulse">{status}</span>
            </div>
            <span className="text-white text-5xl orbitron font-bold tabular-nums">{progress}%</span>
          </div>
          
          <div className="w-full bg-gray-900 h-6 rounded border border-red-900/50 p-1 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-red-900 via-red-600 to-red-400 transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-shimmer"></div>
              <div className="absolute top-0 right-0 h-full w-2 bg-white blur-sm"></div>
            </div>
          </div>

          {progress === 100 && (
            <div className="bg-green-900/10 border border-green-600/50 p-6 rounded-lg animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-[0_0_50px_rgba(0,255,0,0.1)]">
              <div className="flex items-center gap-3 mb-4">
                 <i className="fas fa-shield-check text-green-500 text-2xl"></i>
                 <h3 className="orbitron text-green-500 font-bold text-lg">PRO-BUILD READY: INTEGRITY VERIFIED</h3>
              </div>
              <ul className="space-y-4">
                {INSTALLATION_REQUIREMENTS.map((req, idx) => (
                  <li key={idx} className="flex gap-4 text-xs text-gray-300 font-sans border-l-4 border-green-600 pl-4 bg-green-900/5 py-2">
                    <span className="text-green-500 font-bold">STG_{idx + 1}:</span>
                    {req}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-green-500 transition-all group cursor-pointer active:scale-95">
                 <div className="bg-white p-3 rounded-lg mb-4 shadow-[0_0_30px_rgba(255,255,255,0.8)] group-hover:scale-110 transition-transform">
                    <i className="fas fa-qrcode text-black text-6xl"></i>
                 </div>
                 <p className="text-xs orbitron text-green-500 font-bold tracking-widest">TAP TO DEPLOY MASTER PACKAGE</p>
                 <p className="text-[9px] text-gray-600 uppercase mt-2">PRODUCTION LINK: DRAGON_PRO_8.0</p>
              </div>
            </div>
          )}

          <div className="bg-black border border-gray-800 p-5 rounded-lg font-mono text-[10px] text-green-900/80 h-40 overflow-hidden flex flex-col-reverse shadow-inner relative">
             <p className="text-green-500">>>> [CORE_SUCCESS] 0x00FF: Master build finalized and optimized for ARM-64.</p>
             <p className="text-green-600">>>> Production Signature Applied: [MASTER_ROOT_KEY]</p>
             <p className="text-green-700">>>> Aligning Manifest Resources: Correcting Package IDs...</p>
             <p className="text-yellow-600">>>> INFO: Hardware Concurrency Audited: Optimal Load Distribution.</p>
             <p className="text-green-800">>>> Injecting lib_master_pipe.so [Architecture: v8-Production]</p>
             <p className="text-gray-700">>>> Synchronizing Build with Neural Audit results...</p>
             <p className="text-gray-800">>>> Initializing OMEGA-PRO-PRODUCTION Compiler...</p>
             <div className="absolute top-2 right-2 flex gap-1">
                <div className="w-1 h-1 bg-red-600 rounded-full animate-ping"></div>
                <div className="w-1 h-1 bg-red-600 rounded-full animate-ping delay-100"></div>
                <div className="w-1 h-1 bg-red-600 rounded-full animate-ping delay-200"></div>
             </div>
          </div>
        </div>

        <div className="mt-10 pt-4 border-t border-gray-900/50 flex justify-between items-center text-[10px] text-gray-700 orbitron">
            <span className="animate-pulse text-red-900">SECURITY PROTOCOL: PRODUCTION_MASTER</span>
            <span>NODE_ID: #MASTER-PRO-01</span>
        </div>
      </div>
    </div>
  );
};

export default APKCompilerOverlay;
