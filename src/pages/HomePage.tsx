import React from 'react';

import { motion } from 'framer-motion';
import { Target, Users, Palette, Cpu, Trophy, MessageSquare, Rocket, BarChart3 } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import CtaSection from '../components/home/CtaSection';
import HomePortfolioPage from './HomePortfolioPage';
import OurProcess from '../components/home/OurProcess';
import TechStack from '../components/home/TechStack';
import FloatingMenu from '../components/ui/FloatingMenu';
import { ScrollToTop } from '../components/ScrollToTop';
// import ClientsSection from '../components/home/ClientsSection';

const HomePage = () => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: <Target className="h-4 w-4" /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Trophy className="h-4 w-4" /> },
    { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu className="h-4 w-4" /> },
    { id: 'services', label: 'Services', icon: <Palette className="h-4 w-4" /> },
    { id: 'process', label: 'Process', icon: <Rocket className="h-4 w-4" /> },
    { id: 'projects', label: 'Projects', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'cta', label: 'Contact', icon: <Users className="h-4 w-4" /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Floating Menu */}
      <FloatingMenu navItems={navItems} heroHeight={600} />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      {/* Hero Section - Dark gradient background */}
      <div id="hero">
        <HeroSection />
      </div>
      
      {/* Portfolio Section - Shows futuristic background */}
      <div id="portfolio">
        <HomePortfolioPage />
      </div>

      {/* Clients Section - Shows futuristic background */}
      {/* <ClientsSection /> */}
      
      {/* Tech Stack Section - Shows futuristic background */}
      <div id="tech-stack">
        <TechStack />
      </div>
      
      {/* Services Section - Shows futuristic background */}
      <div id="services">
        <ServicesSection />
      </div>
      
      {/* Process Section - Shows futuristic background */}
      <div id="process">
        <OurProcess />
      </div>
      
      {/* Featured Projects - Shows futuristic background */}
      <div id="projects">
        <FeaturedProjects />
      </div>
      
      {/* Testimonials Section - Shows futuristic background */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      
      {/* CTA Section - Shows futuristic background */}
      <div id="cta">
        <CtaSection />
      </div>
    </motion.div>
  );
};

export default HomePage;