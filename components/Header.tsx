
import React, { useState, useEffect } from 'react';
import { SYSTEM_TITLE, CORE_VERSION } from '../constants';

const Header: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center bg-[#111] border-b-2 border-red-600 p-6 rounded-t shadow-[0_0_15px_rgba(255,0,0,0.2)]">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_#ff0000]">
          <i className="fas fa-dragon text-white text-2xl"></i>
        </div>
        <div>
          <h1 className="orbitron text-2xl font-bold tracking-tighter dragon-glow">{SYSTEM_TITLE}</h1>
          <p className="text-xs text-gray-500 tracking-[0.1em] font-bold">
            ระบบบงการอัจฉริยะระดับสูงสุด // <span className="text-red-500 uppercase">{CORE_VERSION}</span>
          </p>
        </div>
      </div>
      <div className="flex gap-8 mt-4 md:mt-0 text-center">
        <div>
          <div className="text-[10px] text-gray-500 uppercase font-bold">สถานะระบบ</div>
          <div className="text-sm font-bold text-green-500 flex items-center gap-1">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span> ออนไลน์
          </div>
        </div>
        <div>
          <div className="text-[10px] text-gray-500 uppercase font-bold">เวลาท้องถิ่น</div>
          <div className="text-sm orbitron font-bold text-red-500">{time}</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-500 uppercase font-bold">รหัสรักษาความปลอดภัย</div>
          <div className="text-sm orbitron font-bold">D-DRAGON-01</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
