
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const startApp = () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    // ในกรณีที่ยังหาไม่เจอ ให้ลองใหม่อีกครั้งในเฟรมถัดไป
    requestAnimationFrame(startApp);
  }
};

// เริ่มต้นแอปพลิเคชัน
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
