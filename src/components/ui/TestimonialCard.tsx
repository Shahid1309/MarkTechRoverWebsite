import React from 'react';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  testimonial,
  rating,
  imageSrc,
  imageWidth = 150,
  imageHeight = 100,
}: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-purple-500/20 border border-white/20 hover:border-white/40 transition-all duration-300"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        
        {/* Testimonial */}
        <blockquote className="mb-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            "{testimonial}"
          </p>
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
            <picture>
              <source 
                srcSet={encodeURI(imageSrc.replace(/\.(png|jpeg|jpg)$/i, '.webp'))} 
                type="image/webp" 
              />
              <img
                src={encodeURI(imageSrc)}
                alt={name}
                className="w-full h-full rounded-full object-cover"
                width={48}
                height={48}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement?.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <span class="text-white font-semibold text-lg">${name.charAt(0)}</span>
                      </div>
                    `;
                  }
                }}
              />
            </picture>
          </div>
          <div>
            <div className="font-semibold text-white">
              {name}
            </div>
            <div className="text-gray-300 text-sm">
              {role} at {company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;