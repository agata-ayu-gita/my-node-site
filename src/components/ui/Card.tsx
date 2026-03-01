import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", hover = true }) => {
  return (
    <div 
      className={`
        bg-[#171717] 
        border border-white/10 
        rounded-xl 
        p-6 
        ${hover ? 'card-hover' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
