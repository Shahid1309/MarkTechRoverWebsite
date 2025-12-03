import React from 'react';

interface MacOptimizedContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
}

const MacOptimizedContainer: React.FC<MacOptimizedContainerProps> = ({ 
  children, 
  className = '', 
  maxWidth = '7xl' 
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <div className={`
      container mx-auto px-4 sm:px-6 lg:px-8
      mac-13:px-12 mac-15:px-16 mac-16:px-20
      mac-retina-13:px-24 mac-retina-15:px-28 mac-retina-16:px-32
      ${maxWidthClasses[maxWidth]}
      mac-13:max-w-8xl mac-15:max-w-9xl mac-16:max-w-10xl
      mac-retina-13:max-w-11xl mac-retina-15:max-w-12xl mac-retina-16:max-w-13xl
      ${className}
    `}>
      {children}
    </div>
  );
};

export default MacOptimizedContainer;

