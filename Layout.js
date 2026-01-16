import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      <style>{`
        * {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.3);
        }
        .wealth-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }
        .wealth-card:hover {
          border-color: rgba(255,255,255,0.15);
        }
        .green-glow {
          text-shadow: 0 0 20px rgba(74, 222, 128, 0.3);
        }
        .red-glow {
          text-shadow: 0 0 20px rgba(248, 113, 113, 0.3);
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
      {children}
    </div>
  );
}