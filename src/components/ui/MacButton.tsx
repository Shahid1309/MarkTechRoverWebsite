import React from 'react';

interface MacButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const MacButton: React.FC<MacButtonProps> = ({ 
  variant, 
  size, 
  children, 
  className = '', 
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 focus:ring-purple-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600 focus:ring-gray-500 border border-gray-600',
    outline: 'border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white focus:ring-purple-500',
    ghost: 'text-purple-500 hover:bg-purple-500/10 focus:ring-purple-500'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm mac-13:px-6 mac-13:py-3 mac-13:text-base mac-15:px-8 mac-15:py-4 mac-15:text-lg mac-16:px-10 mac-16:py-5 mac-16:text-xl',
    md: 'px-6 py-3 text-base mac-13:px-8 mac-13:py-4 mac-13:text-lg mac-15:px-10 mac-15:py-5 mac-15:text-xl mac-16:px-12 mac-16:py-6 mac-16:text-2xl',
    lg: 'px-8 py-4 text-lg mac-13:px-10 mac-13:py-5 mac-13:text-xl mac-15:px-12 mac-15:py-6 mac-15:text-2xl mac-16:px-16 mac-16:py-8 mac-16:text-3xl',
    xl: 'px-10 py-5 text-xl mac-13:px-12 mac-13:py-6 mac-13:text-2xl mac-15:px-16 mac-15:py-8 mac-15:text-3xl mac-16:px-20 mac-16:py-10 mac-16:text-4xl'
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default MacButton;

