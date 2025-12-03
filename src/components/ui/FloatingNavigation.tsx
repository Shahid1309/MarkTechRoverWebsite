import React, { useState, useEffect } from 'react';
import { Target, Users, Palette, Cpu, Trophy, MessageSquare, Rocket, BarChart3 } from 'lucide-react';

interface FloatingNavigationProps {
  navItems: Array<{
    id: string;
    label: string;
    icon: React.ReactNode;
  }>;
  heroHeight?: number;
  topOffset?: number;
}

const FloatingNavigation: React.FC<FloatingNavigationProps> = ({ 
  navItems, 
  heroHeight = 800, 
  topOffset = 32 
}) => {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id || '');
  const [isNavSticky, setIsNavSticky] = useState(false);

  // Handle scroll for sticky navigation and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavSticky(scrollPosition > heroHeight);

      // Detect active section based on scroll position
      const sectionElements = navItems.map(item => document.getElementById(item.id));
      
      let currentSection = navItems[0]?.id || '';
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150; // Offset for sticky nav height
          
          if (rect.top <= offset && rect.bottom > offset) {
            currentSection = navItems[index].id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, heroHeight]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for sticky nav height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isNavSticky 
        ? `top-${topOffset} opacity-100 scale-100` 
        : 'top-0 opacity-0 scale-95 pointer-events-none'
    }`}>
      {/* Floating Background Element */}
      <div className="relative">
        {/* Animated Background Ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 rounded-full"></div>
        
        {/* Main Navigation Container */}
        <div className="relative bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl shadow-purple-500/20">
          <nav className="flex items-center space-x-1 px-6 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  activeSection === item.id
                    ? 'text-purple-300 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border border-purple-400/50 shadow-lg shadow-purple-500/25' 
                    : 'text-gray-300 hover:text-purple-300 hover:bg-gradient-to-r from-purple-500/20 to-purple-400/20 hover:border-purple-300/30'
                } px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center space-x-2 rounded-full backdrop-blur-sm border border-transparent hover:scale-105 hover:shadow-lg`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default FloatingNavigation;

