import React from 'react';

interface MacGridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const MacGrid: React.FC<MacGridProps> = ({ 
  children, 
  cols = 3, 
  gap = 'lg', 
  className = '' 
}) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2 mac-13:grid-cols-2 mac-15:grid-cols-2 mac-16:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mac-13:grid-cols-3 mac-15:grid-cols-3 mac-16:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mac-13:grid-cols-4 mac-15:grid-cols-4 mac-16:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mac-13:grid-cols-5 mac-15:grid-cols-5 mac-16:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mac-13:grid-cols-6 mac-15:grid-cols-6 mac-16:grid-cols-6'
  };

  const gapClasses = {
    sm: 'gap-4 mac-13:gap-6 mac-15:gap-8 mac-16:gap-10',
    md: 'gap-6 mac-13:gap-8 mac-15:gap-10 mac-16:gap-12',
    lg: 'gap-8 mac-13:gap-10 mac-15:gap-12 mac-16:gap-16',
    xl: 'gap-10 mac-13:gap-12 mac-15:gap-16 mac-16:gap-20'
  };

  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default MacGrid;

