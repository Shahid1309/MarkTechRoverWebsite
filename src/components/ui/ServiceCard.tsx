import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Link to={link}>
      <div className="group relative h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:shadow-purple-500/20">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex flex-col h-full">
          {/* Icon */}
          <div className="inline-flex p-3 rounded-xl bg-white/20 mb-4 transition-colors duration-300 group-hover:bg-white/30">
            {icon}
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold mb-3 text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Learn More Link */}
          <div className="mt-auto">
            <span className="inline-flex items-center text-purple-300 font-medium hover:underline gap-2 px-4 py-2 rounded-full bg-purple-500/20 transition-colors duration-300 group-hover:bg-purple-500/30">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;