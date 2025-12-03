import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-background border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const CardHeader = ({ className, children }: CardHeaderProps) => {
  return (
    <div
      className={cn(
        'p-6',
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent = ({ className, children }: CardContentProps) => {
  return (
    <div
      className={cn(
        'p-6 pt-0',
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

const CardFooter = ({ className, children }: CardFooterProps) => {
  return (
    <div
      className={cn(
        'p-6 border-t border-border',
        className
      )}
    >
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent, CardFooter };