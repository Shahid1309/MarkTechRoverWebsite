import React from 'react';

interface MacTypographyProps {
  variant: 'hero' | 'section-title' | 'card-title' | 'body' | 'small' | 'caption';
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const MacTypography: React.FC<MacTypographyProps> = ({ 
  variant, 
  children, 
  className = '', 
  as 
}) => {
  const baseClasses = {
    hero: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mac-13:text-7xl mac-15:text-8xl mac-16:text-9xl',
    'section-title': 'text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mac-13:text-5xl mac-15:text-6xl mac-16:text-7xl',
    'card-title': 'text-xl md:text-2xl font-semibold leading-snug mac-13:text-3xl mac-15:text-4xl mac-16:text-5xl',
    body: 'text-base md:text-lg leading-relaxed mac-13:text-xl mac-15:text-2xl mac-16:text-3xl',
    small: 'text-sm md:text-base leading-normal mac-13:text-lg mac-15:text-xl mac-16:text-2xl',
    caption: 'text-xs md:text-sm leading-normal mac-13:text-base mac-15:text-lg mac-16:text-xl'
  };

  const defaultElements = {
    hero: 'h1',
    'section-title': 'h2',
    'card-title': 'h3',
    body: 'p',
    small: 'p',
    caption: 'span'
  };

  const Element = as || defaultElements[variant] as keyof JSX.IntrinsicElements;

  return (
    <Element className={`${baseClasses[variant]} ${className}`}>
      {children}
    </Element>
  );
};

export default MacTypography;

