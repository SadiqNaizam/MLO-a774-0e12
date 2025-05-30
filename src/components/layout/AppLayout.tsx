import React from 'react';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center min-h-screen bg-background',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AppLayout;
