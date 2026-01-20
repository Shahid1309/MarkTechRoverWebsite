import React from 'react';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Zap, Rocket, Target, TrendingUp, Sparkles, CheckCircle, Users, Shield, BarChart3, Globe, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroScene from './HeroScene';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const featureCards = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Fast Results',
    description: 'See measurable growth in your first 30 days with our proven strategies.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Data-Driven',
    description: 'Every decision backed by analytics and real-time performance metrics.'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'ROI Focused',
    description: 'Maximize your return on investment with optimized campaigns.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Innovation',
    description: 'Cutting-edge tools and techniques to stay ahead of the competition.'
  }
];

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Shield, value: '95%', label: 'Client Retention' },
  { icon: BarChart3, value: '15X', label: 'Average ROI' },
  { icon: Globe, value: '50+', label: 'Countries Served' }
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
      {/* Solid Background to cover futuristic background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-purple-900 to-black" />
      
      {/* Additional overlay for better coverage */}
      <div className="absolute inset-0 z-5 bg-black/95" />
      
      {/* 3D Interactive Scene */}
      <div className="absolute inset-0 z-10 opacity-90">
        <HeroScene />
      </div>

      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-2xl w-full"
          >
            {/* Leading Digital Marketing Agency Tag */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border border-white/20">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="hidden xs:inline">Leading Digital Marketing Agency</span>
                <span className="xs:hidden">Leading Agency</span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-white">MarkTechRover</span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-purple-500 bg-clip-text text-transparent relative inline-block">
                Your Growth Marketing Agency
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed"
            >
              We're a <Link to="/services/digital-marketing" className="text-accent hover:underline font-medium">full-service digital marketing agency</Link> in India and UAE, delivering cutting-edge solutions that drive exceptional growth and measurable results for businesses worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Link 
                to="/contact"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-purple-700 text-white rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/30 hover:border-white/50 text-white rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-white/10">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Benefits List */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 text-white"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards Grid */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0"
          >
            {featureCards.map((card, index) => {
              // Soft, light gradient colors for each card
              const cardGradients = [
                'from-pink-400/10 via-purple-400/10 to-fuchsia-400/10',
                'from-blue-400/10 via-indigo-400/10 to-purple-400/10',
                'from-purple-400/10 via-pink-400/10 to-rose-400/10',
                'from-cyan-400/10 via-purple-400/10 to-pink-400/10'
              ];
              
              const borderColors = [
                'border-pink-400/20 hover:border-pink-300/40',
                'border-blue-400/20 hover:border-blue-300/40',
                'border-purple-400/20 hover:border-purple-300/40',
                'border-cyan-400/20 hover:border-cyan-300/40'
              ];
              
              const shadowColors = [
                'hover:shadow-pink-400/20',
                'hover:shadow-blue-400/20',
                'hover:shadow-purple-400/20',
                'hover:shadow-cyan-400/20'
              ];
              
              const iconGradients = [
                'bg-gradient-to-br from-pink-400/30 via-fuchsia-400/30 to-purple-500/30 shadow-pink-400/20',
                'bg-gradient-to-br from-blue-400/30 via-indigo-400/30 to-purple-500/30 shadow-blue-400/20',
                'bg-gradient-to-br from-purple-400/30 via-pink-400/30 to-rose-500/30 shadow-purple-400/20',
                'bg-gradient-to-br from-cyan-400/30 via-purple-400/30 to-pink-500/30 shadow-cyan-400/20'
              ];
              
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                  className={`relative bg-gradient-to-br ${cardGradients[index]} backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${borderColors[index]} transition-all duration-300 hover:scale-105 hover:shadow-lg ${shadowColors[index]} overflow-hidden group`}
                >
                  {/* Soft gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index]} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  
                  {/* Subtle glowing corner accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${iconGradients[index].split(' ')[0]} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${iconGradients[index]} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
                      <div className="text-white/90 text-sm sm:text-base">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-200 group-hover:via-purple-200 group-hover:to-cyan-200 transition-all duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section at Bottom */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                className="text-center"
              >
                <div className="flex justify-center mb-2 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">{stat.value}</p>
                <p className="text-gray-300 text-xs sm:text-sm font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
