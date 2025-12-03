import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  as?: React.ElementType;
  delay?: number;
}

const Section = ({
  className,
  children,
  id,
  as: Component = 'section',
  delay = 0.2,
}: SectionProps) => {
  return (
    <Component
      id={id}
      className={cn(
        'py-12 md:py-16',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </Component>
  );
};

export default Section;