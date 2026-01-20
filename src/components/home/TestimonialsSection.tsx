import React from 'react';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../ui/Section';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ashish Dingra',
      role: 'Founder',
      company: 'iDesign.market',
      testimonial: 'MarkTechRover completely transformed our online presence. Their SEO strategy increased our organic traffic by 150% in just 3 months, and their website redesign improved our conversion rate significantly.',
      rating: 5,
      imageSrc: '/ClientPhotos/left ashsih.jpeg'
    },
    {
      name: 'Nishant Khemani',
      role: 'Founder',
      company: 'Saturn Consulting Group',
      testimonial: 'As an accounting firm, we needed a strong digital presence. MarkTechRover delivered an exceptional website and marketing strategy that increased our client acquisition by 85% and established us as a leading firm.',
      rating: 5,
      imageSrc: '/ClientPhotos/nishantkhemani.jpeg'
    },
    {
      name: 'Dr. Amit Narang',
      role: 'Founder',
      company: 'Dentinics',
      testimonial: 'Their social media management has been game-changing for my wellness business. They created engaging content that resonates with my audience, growing my Instagram following by 10K in 6 months.',
      rating: 4,
      imageSrc: '/ClientPhotos/AmitNarang.png'
    },
    {
      name: 'Manish Vishen',
      role: 'Founder',
      company: 'The Whiteys Dental',
      testimonial: 'The PPC campaigns run by MarkTechRover have consistently delivered an impressive ROI. Their data-driven approach to optimization has reduced our cost per acquisition while increasing sales volume.',
      rating: 5,
      imageSrc: '/ClientPhotos/manishvishen.jpeg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate visible testimonials
  const itemsPerSlide = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);
  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerSlide, 
    Math.min((currentIndex + 1) * itemsPerSlide, testimonials.length)
  );

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section className="relative overflow-hidden" id="testimonials">
      {/* Removed background elements for transparency */}
      
      <div className="container relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-0">
          <div className="max-w-2xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-white">
                What Our Clients Say
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Our clients have experienced exceptional results with our digital marketing strategies. Here's what some of them have to say.
              </p>
            </motion.div>
          </div>
          
          <div className="hidden sm:flex space-x-2 flex-shrink-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-900/30 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-slate-700 dark:text-gray-300" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-900/30 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-slate-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <motion.div
            ref={slideRef}
            key={currentIndex}
            initial="hidden"
            animate="visible"
            variants={slideVariants}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                imageSrc={testimonial.imageSrc}
                imageWidth={150}
                imageHeight={100}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Mobile navigation */}
        <div className="flex justify-center mt-8 md:hidden">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-slate-900 dark:bg-white w-6' 
                  : 'bg-slate-300 dark:bg-slate-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;