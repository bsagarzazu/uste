
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-start leading-tight ${className}`}>
      <span className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: '#C41E3A' }}>
        USTE
      </span>
      <div className="text-[0.6rem] md:text-[0.7rem] font-bold tracking-wider uppercase opacity-80" style={{ color: '#1E3A8A' }}>
        Recogida Apartados de Correos<br/>y Servicios Varios
      </div>
    </div>
  );
};
