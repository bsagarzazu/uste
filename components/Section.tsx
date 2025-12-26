
import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", light = false }) => {
  return (
    <section id={id} className={`py-20 px-6 ${light ? 'bg-white' : 'bg-slate-50'} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-slate-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
