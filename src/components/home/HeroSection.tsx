import { motion, Variants } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import HeroScene from './HeroScene';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  { icon: Star, value: '250+', label: 'Clients Served', color: 'from-emerald-400/20 to-cyan-400/20 border-emerald-400/30' },
  { icon: Shield, value: '95%', label: 'Client Retention', color: 'from-violet-400/20 to-fuchsia-400/20 border-violet-400/30' },
  { icon: Zap, value: '15X', label: 'Average ROI', color: 'from-cyan-400/20 to-blue-400/20 border-cyan-400/30' },
  { icon: Star, value: '24/7', label: 'Support', color: 'from-fuchsia-400/20 to-pink-400/20 border-fuchsia-400/30' },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center  overflow-hidden">
      {/* Solid Background to cover futuristic background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-purple-900 to-black" />
      
      {/* Additional overlay for better coverage */}
      <div className="absolute inset-0 z-5 bg-black/95" />
      
      {/* 3D Interactive Scene */}
      <div className="absolute inset-0 z-10 opacity-90">
        <HeroScene />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 py-12 md:py-20 mac-13:py-24 mac-15:py-32 mac-16:py-40">
        <motion.div 
          className="max-w-3xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 backdrop-blur-sm text-emerald-100 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-400/30">
              <Zap className="w-4 h-4" />
              Digital Growth Partner
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-8 leading-tight mac-13:text-7xl mac-15:text-8xl mac-16:text-9xl"
          >
            Transform Your Business with Next-Gen Digital Solutions
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed mac-13:text-2xl mac-15:text-3xl mac-16:text-4xl mac-13:max-w-4xl mac-15:max-w-5xl mac-16:max-w-6xl"
          >
            Elevate your online presence with our cutting-edge SEO strategies, AI-powered marketing campaigns, and conversion-focused web design. Experience growth that exceeds expectations.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link to="/contact">
              <Button 
                variant="accent" 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg shadow-emerald-500/25 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                variant="ghost" 
                size="lg" 
                className="w-full sm:w-auto border border-slate-300/30 text-white hover:bg-white/10 hover:border-emerald-400/50 backdrop-blur-sm"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 hover:scale-105 group`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-6 h-6 text-white mb-4 group-hover:text-emerald-300 transition-colors" />
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;